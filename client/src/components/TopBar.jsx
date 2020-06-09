import React, { Component } from 'react';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      talkingTo: this.props.talkingTo
    };
  }
  render() {
    return (
      <div className='headline' >
        {this.props.talkingTo }
      </div>
    );
  }
};

export default TopBar;