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

  render() {
    return (
      <form className='inputText' onSubmit={this.handleSubmit}>
        <label>
          <input className='textArea' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className='sumbitButton' type="image" src= 'send.png' value="Submit" >
        </input>
      </form>
    );
  }
}

export default ChatWindow;