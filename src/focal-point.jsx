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
    return this.refs.root.focus()
  },

  trapFocus(e) {
    let el = stack[stack.length - 1]

    clearTimeout(timer)
    timer = setTimeout(el.focus, 0)
  },

  componentDidMount() {
    stack.push(this)

    this.trapFocus()

    document.addEventListener('focus', this._onBlur, true)
  },

  componentWillUnmount() {
    stack = stack.filter(i => i !== this)

    document.removeEventListener('focus', this._onBlur, true)

    this.trapFocus()
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
      event.preventDefault();
      this.trapFocus()
    }
  }
})

module.exports = FocalPoint
