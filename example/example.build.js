/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./example";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var FocusTrap = __webpack_require__(/*! ../dist/focus-trap */ 1);
	
	var Component = React.createClass({
	  displayName: 'Component',
	
	  render: function render() {
	    return React.createElement(
	      FocusTrap,
	      { onExit: this._onExit },
	      React.createElement(
	        'h1',
	        null,
	        'Focus will always return to this component'
	      )
	    );
	  },
	
	  _onExit: function _onExit() {
	    console.log('exited');
	  }
	
	});
	
	React.render(React.createElement(Component, null), document.body);

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./dist/focus-trap.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	!(function (e, t) {
	  if (true) module.exports = t(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if ("function" == typeof define && define.amd) define(["react"], t);else {
	    var o = t("object" == typeof exports ? require("react") : e.react);for (var s in o) ("object" == typeof exports ? exports : e)[s] = o[s];
	  }
	})(undefined, function (e) {
	  return (function (e) {
	    function t(s) {
	      if (o[s]) {
	        return o[s].exports;
	      }var r = o[s] = { exports: {}, id: s, loaded: !1 };return (e[s].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports);
	    }var o = {};return (t.m = e, t.c = o, t.p = "", t(0));
	  })([function (e, t, o) {
	    "use strict";var s = function s(e) {
	      return e && e.__esModule ? e : { "default": e };
	    };t.__esModule = !0;var r = o(1),
	        i = s(r),
	        n = o(2),
	        u = s(n);t["default"] = u["default"].createClass({ displayName: "index", mixins: [i["default"]], propTypes: { active: u["default"].PropTypes.boolean, onExit: u["default"].PropTypes.func.isRequired, role: u["default"].PropTypes.string.isRequired }, getDefaultProps: function getDefaultProps() {
	        return { active: !0, role: "dialog" };
	      }, render: function render() {
	        var e = this.props,
	            t = e.active,
	            o = e.role;return t ? u["default"].createElement("div", { className: "focus-trap", tabIndex: "0", role: o, onKeyUp: this._onKeyUp }, u["default"].createElement("div", { className: "focus-trap-backdrop", "aria-hidden": !0, onClick: this.props.onExit }), u["default"].createElement("section", { className: "focus-trap-inner" }, this.props.children)) : null;
	      }, _onKeyUp: function _onKeyUp(e) {
	        "Escape" === e.key && this.props.onExit();
	      } }), e.exports = t["default"];
	  }, function (e, t, o) {
	    "use strict";t.__esModule = !0, t["default"] = { _pushFocus: function _pushFocus() {
	        this.setState({ previousFocus: document.activeElement }), this.getDOMNode().focus();
	      }, _popFocus: function _popFocus() {
	        this.state.previousFocus && (this.state.previousFocus.focus(), this._clearTrap());
	      }, _focus: function _focus() {
	        this.getDOMNode().focus();
	      }, _trapFocus: function _trapFocus() {
	        this._focusTimer = setTimeout(this._focus, 10);
	      }, _clearTrap: function _clearTrap() {
	        clearTimeout(this._focusTimer);
	      }, componentDidMount: function componentDidMount() {
	        var e = this.getDOMNode();e.addEventListener("focusin", this._clearTrap), e.addEventListener("focusout", this._trapFocus), this._pushFocus();
	      }, componentWillUnmount: function componentWillUnmount() {
	        var e = this.getDOMNode();this._popFocus(), e.removeEventListener("focusin", this._clearTrap), e.removeEventListener("focusout", this._trapFocus);
	      } }, e.exports = t["default"];
	  }, function (t, o, s) {
	    t.exports = e;
	  }]);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=example.build.js.map