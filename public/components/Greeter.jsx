
var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter;
