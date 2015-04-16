import FocusTrap from '../FocusTrap'
import React     from 'react/addons'

describe('FocusTrap', function() {
  let TestUtils = React.addons.TestUtils
  let render    = TestUtils.renderIntoDocument

  it ('does not render when not active', function() {
    let component = render(<FocusTrap onExit={ sinon.mock() } />)
    expect(component.getDOMNode()).to.equal(null)
  })

  describe('when a key is pressed', function() {
    it ('triggers to exit when the key is escape', function() {
      let onExit    = sinon.mock()
      let component = render(<FocusTrap onExit={ onExit } active />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Escape' })
      onExit.should.have.been.called
    })

    it ('otherwise does nothing', function() {
      let onExit    = sinon.mock()
      let component = render(<FocusTrap onExit={ onExit } active />)
      TestUtils.Simulate.keyUp(component.getDOMNode(), { key: 'Space' })
      onExit.should.not.have.been.called
    })
  })

  it ('returns focus when it unmounts', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap onExit={ sinon.mock() } active ref="focus"/>) : null
      }
    })

    let component = render(<Component />)
    let previous  = component.refs.focus.state.previousFocus

    component.setState({ active: false })
    document.activeElement.should.equal(previous)
  })

  it ('properly tears down when inactive', function() {
    let Component = React.createClass({
      getInitialState() {
        return { active: true }
      },
      render() {
        return this.state.active ? (<FocusTrap onExit={ sinon.mock() } ref="focus"/>) : null
      }
    })

    render(<Component />).setState({ active: false })
  })

  it ('returns focus when it is lost', function(done) {
    let component = React.render(<FocusTrap onExit={ sinon.mock() } active/>,
 document.body)
    let el = component.getDOMNode()

    TestUtils.Simulate.blur(el)

    setTimeout(function() {
      document.activeElement.should.equal(el)
      done()
    }, 50)
  })

})
