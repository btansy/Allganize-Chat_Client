import React, { Component } from 'react';
import MessageGroup from './MessageGroup.jsx';
import MessageText from './MessageText.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      talkingTo: this.props.talkingTo
    };
    this.helper = this.helper.bind(this);
  }

  helper(messages){
    var group = [];
    for (var i = 0; i < convo.length; i++){
      if (groups[0] == undefined){
        groups.push(messages); 
      } else if (group)
    }
    return <MessageText key={message.text} timestamp= conversation={message} user={this.props.data.userName} />
  }
    
    // return <MessageText key={messages.id} conversation={messages} user={this.props.data.userName} />
  }

  render() {
    return (
      <div className='Messages' >
        {this.props.data.conversation.map(this.helper)}
      </div>
    );
  }
};

export default Messages;