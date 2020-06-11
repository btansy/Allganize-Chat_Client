import React, { Component } from 'react';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
//    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // componentDidMount() {
  //   var helper = function() {
  //     var newWidth = window.innerWidth - 24;
  //     document.getElementById('textArea').style.width = newWidth;
  //   }
  //   helper();
  //   window.addEventListener('resize', helper);
  // }

  render() {
    return (
      <form className='inputText' onSubmit={this.handleSubmit}>
        <input id='textArea' placeholder='Enter message' className='textArea' type="text" value={this.state.value} onChange={this.handleChange} />
        <input className='sumbitButton' type="image" src= 'send.png' value="Submit" />
      </form>
    );
  }
}

export default ChatWindow;