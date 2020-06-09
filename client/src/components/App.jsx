import React, { Component } from 'react';
import Data from '../Data.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: Data
    };
  }
  render() {
    return (
      <div>
        <TopBar name={this.state.data.talkingTo} />
      </div>
    );
  }
};

export default App;