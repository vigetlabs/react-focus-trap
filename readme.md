[![NPM](https://nodei.co/npm/react-focus-trap.png?compact=true)](https://npmjs.org/package/react-focus-trap)

---

[![Build Status](https://travis-ci.org/vigetlabs/react-focus-trap.png?branch=master)](https://travis-ci.org/vigetlabs/react-focus-trap)
[![Coverage Status](https://coveralls.io/repos/vigetlabs/react-focus-trap/badge.svg)](https://coveralls.io/r/vigetlabs/react-focus-trap)

---

A generic focus management tool for components such as dialogs and dropdowns.

## Usage

React Focus Trap is a container element that will manage focus for its children.

```javascript
let Modal = React.createClass({
  render() {
    return (
      <FocusTrap onExit={ this._onExit } active={ this.props.active }>
        Amazing stuff goes here
      </FocusTrap>
    )
  }
})
```

When Focus Trap is active, it will do several things:

1. Ensure focus remains on its content
2. Exits when clicks outside of the container occur
3. Exists when the escape key is pressed

## Props

| Name       | Default               | Description                                           |
| ---------- | --------------------- | ----------------------------------------------------- |
| active     | `false`               | Should the FocusTrap render?                          |
| className  | `'focus-trap-inner'`  | The class of the inner container that maintains focus |
| onExit     | `null (but required)` | Callback when escape or an outside click occurs       |
| element    | `'div'`               | The tag name of the inner container                   |
| role       | `'dialog'`            | The aria role for the inner container                 |
