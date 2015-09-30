import FocusTrap from '../FocusTrap'
import React     from 'react/addons'
import assert    from 'assert'

describe('FocusTrap', function() {
  let TestUtils = React.addons.TestUtils
  let render    = TestUtils.renderIntoDocument
  let stub  = () => {}

  it ('does not render when not active', function() {
    let component = render(<FocusTrap active={ false } />)
    assert.equal(component.getDOMNode(), null)
  })

  describe('when a key is pressed', function() {

    it ('triggers to exit when the key is escape', function(done) {
      let component = render(<FocusTrap onExit={ done } />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Escape' })
    })

    it ('does not throw an error if there is no callback', function() {
      let component = render(<FocusTrap />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Escape' })
    })

    it ('otherwise does nothing', function() {
      let onExit = function() {
        throw new Error("Exit should not have been called")
      }
      let component = render(<FocusTrap onExit={ onExit } />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Space' })
    })
  })

  it ('returns focus when it unmounts', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap ref="focus"/>) : null
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
        return this.state.active ? (<FocusTrap ref="focus"/>) : null
      }
    })

    render(<Component />).setState({ active: false })
  })

  it ('returns focus when it is lost', function(done) {
    let component = React.render(<FocusTrap />, document.body)
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

  it ('does not focus a null anchor when unmounting', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap ref="focus"/>) : null
      }
    })

    let component = render(<Component />)

    component.refs.focus.setState({ anchor: null })
    component.setState({ active: false })
  })

})
