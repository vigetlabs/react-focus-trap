let Focus = require('./mixins/focus')
let React = require('react')

module.exports = React.createClass({

  mixins: [ Focus ],

  propTypes: {
    active : React.PropTypes.bool,
    onExit : React.PropTypes.func.isRequired,
    role   : React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      active  : true,
      element : 'section',
      role    : "dialog"
    }
  },

  getBackdrop() {
    return (<div className="focus-trap-backdrop" aria-hidden={ true } onClick={ this.props.onExit } />)
  },

  getInner() {
    let { element, children } = this.props
    return React.createElement(element, { className: 'focus-trap-inner' }, children)
  },

  render() {
    let { active, role } = this.props

    return active ? (
        <div className="focus-trap" tabIndex="0" role={ role } onKeyUp={ this._onKeyUp }>
        { this.getBackdrop() }
      { this.getInner() }
      </div>
    ) : null
  },

  _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.props.onExit()
    }
  }

})
