import Focus from './mixins/focus'
import React from 'react'

export default React.createClass({

  mixins: [ Focus ],

  propTypes: {
    active : React.PropTypes.bool,
    onExit : React.PropTypes.func.isRequired,
    role   : React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      active : true,
      role   : "dialog"
    }
  },

  render() {
    let { active, role } = this.props

    return active ? (
      <div className="focus-trap" tabIndex="0" role={ role } onKeyUp={ this._onKeyUp }>

        <div className="focus-trap-backdrop" aria-hidden={ true } onClick={ this.props.onExit }></div>

        <section className="focus-trap-inner">
          { this.props.children }
        </section>

      </div>
    ) : null
  },

  _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.props.onExit()
    }
  }

})
