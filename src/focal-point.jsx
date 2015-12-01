/**
 * FocalPoint
 * The container that will maintain focus
 */

let React = require('react')
let stack = []
let timer = null

/**
 * To support server-side rendering, do not push the active element
 * when not in the browser environment
 */
if (typeof document !== 'undefined' && document.activeElement) {
  stack.push(document.activeElement)
}

let FocalPoint = React.createClass({

  getDefaultProps() {
    return {
      element   : 'div',
      tabIndex  : '0'
    }
  },

  contains(element) {
    return this.refs.root.contains(element)
  },

  focus() {
    return this.refs.root.focus()
  },

  trapFocus(e) {
    clearTimeout(timer)
    timer = setTimeout(_ => stack[stack.length - 1].focus(), 10)
  },

  returnFocus() {
    let { anchor } = this.state

    // When transitioning between pages using hash route state,
    // this anchor is some times lost. Do not attempt to focus
    // on a non-existent anchor.
    if (typeof anchor === 'object' && typeof anchor.focus === 'function') {
      anchor.focus()
    }
  },

  componentDidMount() {
    stack.push(this)

    this.setState({ anchor: document.activeElement })
    this.trapFocus()

    document.addEventListener('focus', this._onBlur, true)
  },

  componentWillUnmount() {
    stack = stack.filter(i => i !== this)

    document.removeEventListener('focus', this._onBlur, true)

    clearTimeout(timer)

    this.returnFocus()
  },

  render() {
    let { children, element:Element, ...safe } = this.props

    return (
      <Element ref="root" { ...safe }>
        { children }
      </Element>
    )
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
