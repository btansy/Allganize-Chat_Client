import React, { Component } from 'react';
import MessageGroup from './MessageGroup.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      talkingTo: this.props.talkingTo
    };
    this.helper = this.helper.bind(this);
  }

  helper(messages){
    return <MessageGroup key={messages[0].id + messages[messages.length - 1].id} conversation={messages} user={this.props.user} />
  }

  render() {
    return (
      <div className='Messages' >
        {this.props.groupedMessages.map(this.helper)}
      </div>
    );
  }
};

export default Messages;