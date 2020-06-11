import React, { Component } from 'react';

class MessageText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      talkingTo: this.props.talkingTo
    };
  }

  render() {
    var from;
    if (this.props.conversation.from === this.props.user) {
      from = 'user';
    } else {
      from = 'notuser';
    }
    return (
      <div className={'message ' + from} >
        {this.props.conversation.text}
      </div>
    );
  }
};

export default MessageText;