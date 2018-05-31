import React from 'react'
import FocalPoint from './focal-point'

const defaultProps = {
  active: true,
  className: 'focus-trap',
  onExit: () => {}
}

class FocusTrap extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._onKeyUp = this._onKeyUp.bind(this)
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
        <FocalPoint className={className} element={element}>
          {children}
        </FocalPoint>
      </div>
    )
  }

  // Private -------------------------------------------------- //

  _onKeyUp(event) {
    if (event.key === 'Escape') {
      this.props.onExit()
    }
  }
}

FocusTrap.defaultProps = defaultProps

export default FocusTrap
