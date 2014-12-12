/**
 * @jsx
 * A reuseable, accessible modal
 */

var Focus = require('./mixins/focus')
var React = require('react')
var Types = React.PropTypes

var Dialog = React.createClass({

  mixins: [ Focus ],

  propTypes: {
    onExit : Types.func.isRequired,
  },

  render() {
    return (
      <div className="dialog" tabIndex="0" role="dialog" onKeyUp={ this._onKeyUp }>

        <div className="dialog-blackout" aria-hidden={ true } onClick={ this.props.onExit }></div>

        <section className="dialog-inner">
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

module.exports = Dialog
