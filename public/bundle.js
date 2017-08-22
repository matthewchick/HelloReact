/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GreeterMessage component
var GreeterMessage = React.createClass({
  displayName: 'GreeterMessage',

  render: function render() {

    var name = this.props.NewName;
    var message = this.props.message;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello ',
        name,
        '!'
      ),
      React.createElement(
        'p',
        null,
        message
      )
    );
  }
});

// GreeterForm component
var GreeterForm = React.createClass({
  displayName: 'GreeterForm',

  onFormSubmit: function onFormSubmit(e) {
    e.preventDefault();
    var updates = {}; // create an object
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
    // alert(name);
  },
  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.onFormSubmit },
      React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text', ref: 'name', placeholder: 'Enter name' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('textarea', { ref: 'message', placeholder: 'Enter message' })
      ),
      React.createElement(
        'button',
        null,
        'Submit'
      )
    );
  }
});

// create react component
var Greeter = React.createClass({
  displayName: 'Greeter',


  //provide default property value if not specified in the HTML markup
  getDefaultProps: function getDefaultProps() {
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  getInitialState: function getInitialState() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  HandleNewData: function HandleNewData(updates) {
    //e mean event
    this.setState(updates);
    console.log('name is ' + updates.name);
  },
  render: function render() {
    /*
       anytime this.state.message changes we will see that change reflected in the
       browser because React will rerender our component
       At the first time, this.state.name stores the value from initState
       At the second time, this.sate.name stores the value from onButtonClick
    */
    var name = this.state.name;
    //var name = this.props.name;   //pass parameter to props
    var message = this.state.message;

    return React.createElement(
      'div',
      null,
      React.createElement(GreeterMessage, { NewName: name, message: message }),
      React.createElement(GreeterForm, { onNewData: this.HandleNewData })
    );
  }
});

var firstName = 'Matthew';

ReactDOM.render(React.createElement(Greeter, { name: firstName }),
//<Greeter name="Matthew"/>,
document.getElementById('app'));

/* 1st Edition
var Greeter = React.createClass({

  //provide default property value if not specified in the HTML markup
  getDefaultProps: function() {
    return {
        name: 'React',
        message: 'This is the default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  /*
  propTypes: {
    // validate the props
    name: this.PropTypes.string,
    number: this.PropTypes.number,
    requiredString: this.PropTypes.string.isRequired

  },

  onButtonClick: function(e) {   //e mean event
    /* In this video, we use e.preventDefault()
       to prevent the form from executing its default behavior.
       By default a from will refresh the browser window and
       post all the form data via query strings

    e.preventDefault();
    /* Use refs because the object stores all our references,
       not just a single reference.

    var nameRef = this.refs.name
    var name = nameRef.value;   //get the value of name from the form
    nameRef.value = '';         //clear text field
    if (typeof name === 'string' && name.length > 0) {
    /*
       The this.setState() method is added to our React component by React and
       it will update the component's state with the properties that are defined
       in the JSON object that is passed in, and then rerender the component using the new state.

      this.setState({
        name: name
      });
    }
    // alert(name);
  },
  render: function () {
     anytime this.state.message changes we will see that change reflected in the
     browser because React will rerender our component
     At the first time, this.state.name stores the value from initState
     At the second time, this.sate.name stores the value from onButtonClick

  var name = this.state.name;
  //var name = this.props.name;   //pass parameter to props
  var message = this.props.message;

  return (
    <div>
     <h1>Hello {name}!</h1>
     <div>{message + '!!'}</div>

     <GreeterMessage/>

     <form onSubmit={this.onButtonClick}>
      <input type ="text" ref="name" />
      <button>Set Name</button>
     </form>
    </div>
  );
}

ReactDOM.render(
  <h1>Hello React1</h1>,
  document.getElementById('app')
)

*/

/***/ })
/******/ ]);