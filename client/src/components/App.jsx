import React, { Component } from 'react';
import Data from '../Data.jsx';
import TopBar from './TopBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: Data
    };
  }
  render() {
    return (
      <div className='app'>
        <TopBar talkingTo={this.state.data.talkingTo} />
      </div>
    );
  }
};

export default App;