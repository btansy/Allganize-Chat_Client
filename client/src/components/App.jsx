import React, { Component } from 'react';
import Data from '../Data.jsx';
import TopBar from './TopBar.jsx';
import Messages from './Messages.jsx';
import ChatWindow from './ChatWindow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: Data,
      user: Data.userName,
      talkingTo: Data.talkingTo,
      groupedMessages: [],
    };
  }

  sortByTimestamp(data) {
    var result = [];
    var group = [];
    for (var i = 0; i < data.conversation.length; i++) {
      if (group[0] === undefined) { 
        group.push(data.conversation[i]);
      } else if (data.conversation[i].from === group[0].from) {
        group.push(data.conversation[i]);
      }
      if (group[0].from !== data.conversation[i].from){
        result.push(group);
        group = [];
        group.push(data.conversation[i])
      }
      if (i == data.conversation.length - 1) {
        result.push(group);
        return result;
      }
    }
  }

  componentDidMount(){
    var x = this.sortByTimestamp(this.state.data);
    this.setState({groupedMessages: x});
  }

  render() {
    return (
      <div className='app'>
        <TopBar talkingTo={this.state.data.talkingTo} />
        <Messages id='Messages' groupedMessages={this.state.groupedMessages} user={this.state.user} />
        <ChatWindow />
      </div>
    );
  }
};

export default App;