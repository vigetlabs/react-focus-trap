import React from 'react'
import DOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import assert from 'assert'
import FocusTrap from '../src/focus-trap'

describe('FocusTrap', function() {
  let render = TestUtils.renderIntoDocument
  let stub = () => {}

  it('does not render when not active', function() {
    let component = render(<FocusTrap active={false} />)
    assert.equal(DOM.findDOMNode(component), null)
  })

  describe('when a key is pressed', function() {
    it('triggers to exit when the key is escape', function(done) {
      let component = render(<FocusTrap onExit={done} />)
      TestUtils.Simulate.keyUp(DOM.findDOMNode(component), { key: 'Escape' })
    })

    it('does not throw an error if there is no callback', function() {
      let component = render(<FocusTrap />)
      TestUtils.Simulate.keyUp(DOM.findDOMNode(component), { key: 'Escape' })
    })

    it('otherwise does nothing', function() {
      let onExit = function() {
        throw new Error('Exit should not have been called')
      }
      let component = render(<FocusTrap onExit={onExit} />)
      TestUtils.Simulate.keyUp(DOM.findDOMNode(component), { key: 'Space' })
    })
  })

  it('returns focus when it unmounts', function() {
    class Component extends React.Component {
      state = {
        active: true
      }
      render() {
        return this.state.active ? <FocusTrap /> : null
      }
    }

    let previous = document.activeElement
    let component = render(<Component />)

    component.setState({ active: false })
    assert.equal(document.activeElement, previous)
  })

  it('properly tears down when inactive', function() {
    class Component extends React.Component {
      state = {
        active: true
      }
      render() {
        return this.state.active ? <FocusTrap /> : null
      }
    }

    render(<Component />).setState({ active: false })
  })

  it('returns focus when it is lost', function(done) {
    let component = DOM.render(<FocusTrap />, document.body)
    let el = DOM.findDOMNode(component.focus)

    component.focus._onBlur({
      preventDefault: stub,
      target: document.body
    })

    setTimeout(function() {
      assert.equal(document.activeElement, el)
      done()
    }, 50)
  })

  it('respects autofocus on a child element', function(done) {
    DOM.render(
      <FocusTrap>
        <input id="test" autoFocus />
      </FocusTrap>,
      document.body
    )

    setTimeout(function() {
      assert.equal(document.activeElement.id, 'test')
      done()
    }, 50)
  })
})
