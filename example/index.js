var React  = require('react');
var Dialog = require('../dist/dialog');

var Component = React.createClass({

  render() {
    return (
      <Dialog onExit={}>
        <p>Hello!</p>
      </div>
    );
  },

  _onExit() {
    console.log("yep")
  }

});

React.render(<Component />, document.body);
