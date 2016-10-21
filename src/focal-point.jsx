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
      element : 'div'
    }
  },

  contains(element) {
    return this.refs.root.contains(element)
  },

  focus() {
    /* if (this.contains(document.activeElement) === false) {*/
      this.refs.root.focus()
    /* }*/
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
    if (anchor && typeof anchor === 'object' && typeof anchor.focus === 'function') {
      anchor.focus()
    }
  },

  componentWillMount() {
    if (typeof document !== 'undefined') {
      this.setState({ anchor: document.activeElement })
    }
  },

  componentDidMount() {
    stack.push(this)

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
    let { children, element:Element, className } = this.props

    return (
      <Element ref="root" tabIndex="0" className={ className }>
        { children }
      </Element>
    )
  },

  _onBlur(event) {
    let current = stack[stack.length - 1]

    if (current && current.contains(event.target) === false) {
      event.preventDefault()
      this.trapFocus()
    }
  }
})

module.exports = FocalPoint
