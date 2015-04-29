/**
 * FocalPoint
 * The container that will maintain focus
 */

let React = require('react')

let FocalPoint = React.createClass({
  getDefaultProps() {
    return {
      element   : 'div',
      tabIndex  : '0'
    }
  },

  render() {
    let { children, element, ...safe } = this.props
    return React.createElement(element, safe, children)
  }
})

module.exports = FocalPoint
