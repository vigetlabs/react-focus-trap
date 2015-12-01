let FocalPoint = require('./focal-point')
let React      = require('react')

let FocusTrap = React.createClass({

  propTypes: {
    active : React.PropTypes.bool,
    onExit : React.PropTypes.func
  },

  getDefaultProps() {
    return {
      active    : true,
      className : 'focus-trap',
      role      : 'dialog'
    }
  },

  render() {
    let { active, className, children, element, onExit, role } = this.props

    if (!active ) return null

    return (
      <div className={ `${ className }-wrapper` } onKeyUp={ this._onKeyUp } role={ role }>
        <div aria-hidden="true" className={ `${ className }-backdrop` } onClick={ onExit } />
        <FocalPoint ref='focus' className={ className } element={ element }>
          { children }
        </FocalPoint>
      </div>
    )
  },

  _onKeyUp(e) {
    if (e.key === 'Escape' && 'onExit' in this.props) {
      this.props.onExit()
    }
  }
})

module.exports = FocusTrap
