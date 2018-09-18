[![NPM](https://nodei.co/npm/react-focus-trap.png?compact=true)](https://npmjs.org/package/react-focus-trap)

---

[![Circle CI](https://circleci.com/gh/vigetlabs/react-focus-trap.svg?style=svg)](https://circleci.com/gh/vigetlabs/react-focus-trap)

---

A generic focus management tool for components such as dialogs and dropdowns.

![focus](https://cloud.githubusercontent.com/assets/590904/7422697/c648ecae-ef5c-11e4-8570-5bcf6819f53d.gif)

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
3. Exits when the escape key is pressed

## Props

| Name       | Default               | Description                                           |
| ---------- | --------------------- | ----------------------------------------------------- |
| active     | `true`                | Should the FocusTrap render?                          |
| className  | `'focus-trap'`         | The class of the inner container that maintains focus |
| onExit     | `null`                | Callback when escape or an outside click occurs       |
| element    | `'div'`               | The tag name of the inner container                   |
| role       | `'dialog'`            | The aria role for the inner container                 |

***

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
