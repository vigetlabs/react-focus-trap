var React  = require('react');
var FocusTrap = require('../dist/focus-trap');

var Component = React.createClass({

  render() {
    return (
      <FocusTrap onExit={ this._onExit }>
        <h1>Focus will always return to this component</h1>
      </FocusTrap>
    );
  },

  _onExit() {
    console.log("exited")
  }

});

React.render(<Component />, document.body);
