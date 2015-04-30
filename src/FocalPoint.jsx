/**
 * FocalPoint
 * The container that will maintain focus
 */

let React = require('react')
let stack = [ document.activeElement ]

let FocalPoint = React.createClass({

  getDefaultProps() {
    return {
      element   : 'div',
      tabIndex  : '0'
    }
  },

  contains(element) {
    return this.getDOMNode().contains(element)
  },

  focus() {
    this.getDOMNode().focus()
  },

  trapFocus(e) {
    this._focusTimer = setTimeout(_ => stack[stack.length - 1].focus(), 10)
  },

  clearTrap() {
    clearTimeout(this._focusTimer)
  },

  componentDidMount() {
    stack.push(this)

    this.setState({ anchor: document.activeElement })

    this.focus()

    document.addEventListener('focus', this._onBlur, true)
  },

  componentWillUnmount() {
    stack = stack.filter(i => i !== this)

    document.removeEventListener('focus', this._onBlur, true)

    this.state.anchor.focus()
  },

  render() {
    let { children, element, ...safe } = this.props
    return React.createElement(element, safe, children)
  },

  _onBlur(event) {
    let current = stack[stack.length - 1]

    if (current.contains(event.target) === false) {
      event.preventDefault();
      this.trapFocus()
    }
  }
})

module.exports = FocalPoint
