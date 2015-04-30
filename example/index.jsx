var React  = require('react');
var FocusTrap = require('../src/FocusTrap');

var Component = React.createClass({

  getInitialState() {
    return {
      focusOne: false,
      focusTwo: false
    }
  },

  render() {
    return (
      <div>
        <button onClick={ this._onOpenOne}>Open Dialog One</button>

        <FocusTrap onExit={ this._onExitOne } active={ this.state.focusOne }>
          <h1>This is the primary dialog</h1>
          <p><a href="http://google.com" >Focus one</a></p>
          <p><a href="http://google.com">Focus two</a></p>
          <p><a href="http://google.com">Focus three</a></p>
          <p><a href="http://google.com">Focus four</a></p>
          <button onClick={ this._onOpenTwo}>Open Dialog Two</button>
        </FocusTrap>

        <FocusTrap onExit={ this._onExitTwo } active={ this.state.focusTwo }>
          <h1>This is the secondary dialog</h1>
          <p><a href="http://google.com" >Focus one</a></p>
          <p><a href="http://google.com">Focus two</a></p>
          <p><a href="http://google.com">Focus three</a></p>
          <p><a href="http://google.com">Focus four</a></p>
        </FocusTrap>
      </div>
    );
  },

  _onOpenOne() {
    this.setState({ focusOne: true })
  },

  _onOpenTwo() {
    this.setState({ focusTwo: true })
  },

  _onExitOne() {
    this.setState({ focusOne: false })
  },

  _onExitTwo() {
    this.setState({ focusTwo: false })
  }

});

React.render(<Component />, window.app);
