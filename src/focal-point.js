/**
 * FocalPoint
 * The container that will maintain focus
 */

import React from 'react'

let timer = null
let isDOM = typeof document !== 'undefined'

const defaultProps = {
  element: 'div'
}

class FocalPoint extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.anchor = null

    this.focus = this.focus.bind(this)
    this._onBlur = this._onBlur.bind(this)
    this._setRoot = this._setRoot.bind(this)
  }

  contains(element) {
    return this.root.contains(element)
  }

  focus() {
    if (this.contains(document.activeElement) === false) {
      this.root.focus()
    }
  }

  trapFocus(e) {
    clearTimeout(timer)
    timer = setTimeout(this.focus, 10)
  }

  returnFocus() {
    // When transitioning between pages using hash route state,
    // this anchor is some times lost. Do not attempt to focus
    // on a non-existent anchor.
    if (
      this.anchor &&
      typeof this.anchor === 'object' &&
      typeof this.anchor.focus === 'function'
    ) {
      this.anchor.focus()
    }
  }

  componentWillMount() {
    if (isDOM) {
      this.anchor = document.activeElement
    }
  }

  componentDidMount() {
    this.trapFocus()

    document.addEventListener('focus', this._onBlur, true)
  }

  componentWillUnmount() {
    document.removeEventListener('focus', this._onBlur, true)

    clearTimeout(timer)

    this.returnFocus()

    this.anchor = null
  }

  render() {
    let { children, element, className } = this.props

    return React.createElement(element, {
      ref: this._setRoot,
      tabIndex: 0,
      className,
      children
    })
  }

  // Private -------------------------------------------------- //

  _setRoot(el) {
    this.root = el
  }

  _onBlur(event) {
    let current = this.anchor

    if (current && current.contains(event.target) === false) {
      event.preventDefault()
      this.trapFocus()
    }
  }
}

FocalPoint.defaultProps = defaultProps

export default FocalPoint
