var React  = require('react');
var FocusTrap = require('../src/FocusTrap');

var Component = React.createClass({

  render() {
    return (
      <FocusTrap onExit={ this._onExit } active>
        <h1>Focus will always return to this component</h1>
      </FocusTrap>
    );
  },

  _onExit() {
    console.log("exited")
  }

});

React.render(<Component />, document.body);
