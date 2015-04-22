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
      active : false,
      role   : 'dialog'
    }
  },

  render() {
    let { active, className, children, element, onExit, role } = this.props

    if (!active ) return null

    return (
      <div className='focus-trap' onKeyUp={ this._onKeyUp } role={ role } tabIndex="-1">
        <Backdrop onClick={ onExit } />
        <FocalPoint ref='focus' className={ className } element={ element }>{ children }</FocalPoint>
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
