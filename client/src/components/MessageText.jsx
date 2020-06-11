import React, { Component } from 'react';

class MessageText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
    this.fromUser = this.fromUser.bind(this);
  }

  fromUser(){
    var from;
    if (this.props.fromuser === true) {
      from = 'user';
    } else {
      from = 'notuser';
    }
    return from;
  }
  
  render() {
    return (
      <div >
        <div className={'message ' + this.fromUser()} >{this.props.conversation.text}</div>
      </div>
    );
  }
};

export default MessageText;