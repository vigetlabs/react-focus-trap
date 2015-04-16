# React Focus Trap

A generic focus management tool for components such as dialogs and dropdowns.

## Usage

React Focus Trap is a container element that will manage focus for its children

```javascript
let Modal = React.createClass({

  render() {
    <FocusTrap onExit={ this._onExit }>
      Amazing stuff goes here
    </FocusTrap>
  }
})
```

When Focus Trap is active, it will do several things:

1. Ensure focus remains on its content
2. Exits when clicks outside of the container occur
3. Exists when the escape key is pressed

## Props

| Name       | Default              | Description                                           |
| ---------- | -------------------- | ----------------------------------------------------- |
| active     | false                | Should the FocusTrap render?                          |
| className  | 'focus-trap-inner'   | The class of the inner container that maintains focus |
| onExit     | null (but required)  | Callback when escape or an outside click occurs       |
| element    | 'div'                | The tag name of the inner container                   |
| role       | 'dialog'             | The aria role for the inner container                 |
