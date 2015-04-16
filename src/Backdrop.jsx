/**
 * Backdrop
 * Intended to sit behind focus to capture click events
 */

let React = require('react')

module.exports = React.createClass({

  propTypes: {
    onExit : React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      'aria-hidden' : true,
      'className'   : 'focus-trap-backdrop',
      'element'     : 'div'
    }
  },

  render() {
    let { element, ...safe } = this.props

    return React.createElement(element, safe)
  }

})
