/**
 * Backdrop
 * Intended to sit behind focus to capture click events
 */

let React = require('react')

let Backdrop = React.createClass({
  getDefaultProps() {
    return {
      'aria-hidden' : true,
      'element'     : 'div'
    }
  },

  render() {
    let { element, ...safe } = this.props
    return React.createElement(element, safe)
  }
})

module.exports = Backdrop
