let Backdrop   = require('./Backdrop')
let FocalPoint = require('./FocalPoint')
let Focus      = require('./mixins/focus')
let React      = require('react')

let FocusTrap = React.createClass({
  mixins: [ Focus ],

  propTypes: {
    active : React.PropTypes.bool,
    onExit : React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      active    : false,
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
