import React from 'react'
import FocalPoint from './focal-point'

const defaultProps = {
  active: true,
  className: 'focus-trap'
}

class FocusTrap extends React.Component {
  constructor(props, context) {
    super(props, context)

    this._onKeyUp = this._onKeyUp.bind(this)
    this._setFocus = this._setFocus.bind(this)
  }

  render() {
    let { active, className, children, element, onExit } = this.props

    if (!active) return null

    return (
      <div className={`${className}-wrapper`} onKeyUp={this._onKeyUp}>
        <div
          aria-hidden="true"
          className={`${className}-backdrop`}
          onClick={onExit}
        />
        <FocalPoint ref={this._setFocus} className={className} element={element}>
          {children}
        </FocalPoint>
      </div>
    )
  }

  // Private -------------------------------------------------- //

  _setFocus(el) {
    this.focus = el
  }

  _onKeyUp(event) {
    if (event.key === 'Escape' && 'onExit' in this.props) {
      this.props.onExit()
    }
  }
}

FocusTrap.defaultProps = defaultProps

export default FocusTrap
