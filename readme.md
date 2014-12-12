# React Dialog

[![Build Status](https://travis-ci.org/vigetlabs/react-ink.png?branch=master)](https://travis-ci.org/vigetlabs/react-ink)

An accessible dialog component

## Usage

Include `./dialog.css` within your stylesheet build process. Then you can include the `<Dialog />` component like so:

```js
var React  = require('react');
var Dialog = require('react-dialog');

module.exports = React.createClass({
  render() {
    return <Dialog onExit={ this._onExit }/>
  },

  _onExit() {
    // do something to remove the dialog
  }
});
```
