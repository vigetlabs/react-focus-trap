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
      active    : false,
      className : 'focus-trap-inner',
      element   : 'div',
      role      : "dialog"
    }
  },

  getBackdrop() {
    return (<div className="focus-trap-backdrop" aria-hidden={ true } onClick={ this.props.onExit } />)
  },

  getInner() {
    let { className, element, children } = this.props
    return React.createElement(element, { className }, children)
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
