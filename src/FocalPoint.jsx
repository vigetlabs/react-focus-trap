/**
 * FocalPoint
 * The container that will maintain focus
 */

let React = require('react')

module.exports = React.createClass({

  getDefaultProps() {
    return {
      className : 'focus-trap-inner',
      element   : 'div'
    }
  },

  render() {
    let { children, element, ...safe } = this.props

    return React.createElement(element, safe, children)
  }

})
