/** @jsx */

var Focus = require('./mixins/focus')
var React = require('react')
var Types = React.PropTypes

var FocusTrap = React.createClass({

  mixins: [ Focus ],

  propTypes: {
    onExit : Types.func.isRequired,
    role   : Types.string.isRequired
  },

  getDefaultProps() {
    return {
      role: "dialog"
    }
  },

  render() {
    var { role } = this.props

    return (
      <div className="focus-trap" tabIndex="0" role={ role } onKeyUp={ this._onKeyUp }>

        <div className="focus-trap-backdrop" aria-hidden={ true } onClick={ this.props.onExit }></div>

        <section className="focus-trap-inner">
          { this.props.children }
        </section>

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
