import React, { Component } from 'react';
import Data from '../Data.jsx';
import TopBar from './TopBar.jsx';
import Messages from './Messages.jsx';
import ChatWindow from './ChatWindow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: Data
    };
  }

  componentDidMount(){
    
  }
  render() {
    return (
      <div className='app'>
        <TopBar talkingTo={this.state.data.talkingTo} />
        <Messages id='Messages' data={this.state.data} />
        <ChatWindow />
      </div>
    );
  }
};

export default App;