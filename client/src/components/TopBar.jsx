import React, { Component } from 'react';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: this.props.dummyData
    };
  }
  render() {
    return (
      <div>
        {`this.props.name`}
      </div>
    );
  }
};

export default TopBar;