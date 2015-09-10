import FocusTrap from '../FocusTrap'
import React     from 'react/addons'
import assert    from 'assert'

describe('FocusTrap', function() {
  let TestUtils = React.addons.TestUtils
  let render    = TestUtils.renderIntoDocument
  let stub  = () => {}

  it ('does not render when not active', function() {
    let component = render(<FocusTrap onExit={ stub } active={ false } />)
    assert.equal(component.getDOMNode(), null)
  })

  describe('when a key is pressed', function() {

    it ('triggers to exit when the key is escape', function(done) {
      let onExit = function() {
        done()
      }
      let component = render(<FocusTrap onExit={ onExit } active />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Escape' })
    })

    it ('otherwise does nothing', function() {
      let onExit = function() {
        throw new Error("Exit should not have been called")
      }
      let component = render(<FocusTrap onExit={ onExit } active />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Space' })
    })
  })

  it ('returns focus when it unmounts', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap onExit={ stub } active ref="focus"/>) : null
      }
    })

    let previous = document.activeElement
    let component = render(<Component />)

    component.setState({ active: false })
    assert.equal(document.activeElement, previous)
  })

  it ('properly tears down when inactive', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap onExit={ stub } ref="focus"/>) : null
      }
    })

    render(<Component />).setState({ active: false })
  })

  it ('returns focus when it is lost', function(done) {
    let component = React.render(<FocusTrap onExit={ stub } active/>, document.body)
    let el = component.refs.focus.getDOMNode()

    component.refs.focus._onBlur({
      preventDefault: stub,
      target: document.body
    })

    setTimeout(function() {
      assert.equal(document.activeElement, el)
      done()
    }, 50)
  })
})
