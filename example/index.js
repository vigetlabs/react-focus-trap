var React  = require('react');
var Dialog = require('../dist/dialog');

var Component = React.createClass({

  render() {
    return (
      <Dialog onExit={ this._onExit }>
        <p>Hello!</p>
      </Dialog>
    );
  },

  _onExit() {
    console.log("yep")
  }

});

React.render(<Component />, document.body);
