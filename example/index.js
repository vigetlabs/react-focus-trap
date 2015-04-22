var React  = require('react');
var FocusTrap = require('../src/FocusTrap');

var Component = React.createClass({

  render() {
    return (
      <FocusTrap onExit={ this._onExit } active>
        <h1>Focus will always return to this component</h1>
        <p><a href="#" >Focus one</a></p>
        <p><a href="#">Focus two</a></p>
        <p><a href="#">Focus three</a></p>
        <p><a href="#">Focus four</a></p>
      </FocusTrap>
    );
  },

  _onExit() {
    console.log("exited")
  }

});

React.render(<Component />, window.app);
