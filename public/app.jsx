
// create react component
var Greeter = React.createClass({

  //provide default property value if not specified in the HTML markup
  getDefaultProps: function() {
    return {
        name: 'React',
        message: 'This is the default message'
    };
  },
  /*
  propTypes: {
    // validate the props
    name: this.PropTypes.string,
    number: this.PropTypes.number,
    requiredString: this.PropTypes.string.isRequired

  },
  */
  onButtonClick: function(e) {   //e mean event
    /* In this video, we use e.preventDefault()
       to prevent the form from executing its default behavior.
       By default a from will refresh the browser window and
       post all the form data via query strings
    */
    e.preventDefault();
    /* Use refs because the object stores all our references,
       not just a single reference.
    */
    var name = this.refs.name.value;   //get the value of name from the form
    alert(name);
  },
  render: function () {
    var name = this.props.name;   //pass parameter to props
    var message = this.props.message;

    return (
      <div>
       <h1>Hello {name}!</h1>
       <div>{message + '!!'}</div>

       <form onSubmit={this.onButtonClick}>
        <input type ="text" ref="name" />
        <button>Set Name</button>
       </form>
      </div>
    );
  }
});

var firstName = 'Matthew'

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  //<Greeter name="Matthew"/>,
  document.getElementById('app')
);
/*
ReactDOM.render(
  <h1>Hello React1</h1>,
  document.getElementById('app')
)
*/
