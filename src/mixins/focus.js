/**
 * Focus
 *
 * For accessibility, this mixin focuses on mount and returns focus
 * when it is unmounted
 * http://www.nczonline.net/blog/2013/02/12/making-an-accessible-dialog-box/
 */

module.exports = {

  _pushFocus() {
    this.setState({
      previousFocus: document.activeElement
    })

    this._focus()
  },

  _popFocus() {
    this.state.previousFocus.focus()
    this._clearTrap()
  },

  _focus() {
    if (this.refs.focus) {
      this.refs.focus.getDOMNode().focus()
    }
  },

  _trapFocus(e) {
    this._focusTimer = setTimeout(this._focus, 10)
  },

  _clearTrap() {
    clearTimeout(this._focusTimer)
  },

  componentDidMount() {
    document.addEventListener('focus', this._onFocusLeave, true)
    this._pushFocus()
  },

  componentWillUnmount() {
    document.removeEventListener('focus', this._onFocusLeave, true)
    this._popFocus()
  },

  _onFocusLeave(event) {
    let el = this.refs.focus.getDOMNode()

    if (el.contains(event.target) === false) {
      event.preventDefault();
      this._trapFocus()
    }
  }

}
