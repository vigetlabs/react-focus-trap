let Backdrop   = require('./Backdrop')
let FocalPoint = require('./FocalPoint')
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
        <Backdrop className={ `${ className }-backdrop` } onClick={ onExit } />
        <FocalPoint ref='focus' className={ className } element={ element }>
          { children }
        </FocalPoint>
      </div>
    )
  },

  _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.props.onExit()
    }
  }
})

module.exports = FocusTrap
