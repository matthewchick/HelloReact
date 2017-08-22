
// GreeterMessage component
var GreeterMessage = React.createClass({
  render: function() {

    var name = this.props.NewName;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

// GreeterForm component
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var updates = {};     // create an object
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0){
      this.refs.name.value='';
      updates.name = name;
    }
    if (message.length > 0){
      this.refs.message.value='';
      updates.message = message;
    }
    this.props.onNewData(updates);
    // alert(name);
  },
  render: function() {
    return (
        <form onSubmit={this.onFormSubmit}>
         <div><input type ="text" ref="name" placeholder="Enter name"/></div>
         <div><textarea ref="message" placeholder="Enter message"></textarea></div>
         <button>Submit</button>
        </form>
    );
  }
});

// create react component
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
      name: this.props.name,
      message: this.props.message
    };
  },
  HandleNewData: function(updates) {   //e mean event
      this.setState(updates);
      console.log('name is ' + updates.name);
  },
  render: function () {
    /*
       anytime this.state.message changes we will see that change reflected in the
       browser because React will rerender our component
       At the first time, this.state.name stores the value from initState
       At the second time, this.sate.name stores the value from onButtonClick
    */
    var name = this.state.name;
    //var name = this.props.name;   //pass parameter to props
    var message = this.state.message;

    return (
      <div>
       <GreeterMessage NewName={name} message={message}/>
       <GreeterForm onNewData={this.HandleNewData}/>
      </div>
    );
  }
});

var firstName = 'Matthew'

ReactDOM.render(
  <Greeter name={firstName} />,
  //<Greeter name="Matthew"/>,
  document.getElementById('app')
);

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
