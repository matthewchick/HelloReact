
var React = require('react');

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

module.exports = GreeterForm;
