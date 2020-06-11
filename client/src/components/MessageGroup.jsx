import React, { Component } from 'react';

class MessageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
    this.helper = this.helper.bind(this);
  }

  helper(message){
    return <MessageText key={message.text} conversation={message} user={this.props.data.userName} />
  }

  render() {
    return (
      <div className='Messages' >
        {this.props.data.conversation.map(this.helper)}
      </div>
    );
  }
};

export default MessageGroup;