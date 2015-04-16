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

    this._focus()
  },

  _popFocus() {
    if (this.state.previousFocus) {
      this.state.previousFocus.focus()
      this._clearTrap()
    }
  },

  _focus() {
    let el = this.getDOMNode()

    if (el) {
      el.focus()
    }
  },

  // trap keyboard focus within modal
  // via http://www.nczonline.net/blog/2013/02/12/making-an-accessible-dialog-box/
  _trapFocus() {
    this._focusTimer = setTimeout(this._focus, 10)
  },

  _clearTrap() {
    clearTimeout(this._focusTimer)
  },

  componentDidMount() {
    let el = this.getDOMNode()

    if (el) {
      el.addEventListener('focusin', this._clearTrap)
      el.addEventListener('focusout', this._trapFocus)
    }

    this._pushFocus()
  },

  componentWillUnmount() {
    let el = this.getDOMNode()

    this._popFocus()

    if (el) {
      el.removeEventListener('focusin', this._clearTrap)
      el.removeEventListener('focusout', this._trapFocus)
    }
  }

}
