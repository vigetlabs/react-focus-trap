/**
 * Focus
 *
 * For accessibility, this mixin focuses on mount and returns focus
 * when it is unmounted
 */

module.exports = {

  _pushFocus() {
    this.setState({
      previousFocus: document.activeElement
    })

    this.getDOMNode().focus()
  },

  _popFocus() {
    if (this.state.previousFocus) {
      this.state.previousFocus.focus()
      this._clearTrap()
    }
  },

  // trap keyboard focus within modal
  // via http://www.nczonline.net/blog/2013/02/12/making-an-accessible-dialog-box/
  _trapFocus() {
    this._focusTimer = setTimeout(_ => this.getDOMNode().focus(), 10)
  },

  _clearTrap: function() {
    clearTimeout(this._focusTimer);
  },

  componentDidMount() {
    var el = this.getDOMNode()

    el.addEventListener('focusin', this._clearTrap);
    el.addEventListener('focusout', this._trapFocus);

    this._pushFocus()
  },

  componentWillUnmount() {
    var el = this.getDOMNode()

    this._popFocus()

    el.removeEventListener('focusin', this._clearTrap);
    el.removeEventListener('focusout', this._trapFocus);
  }

}
