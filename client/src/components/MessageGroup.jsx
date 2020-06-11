import React, { Component } from 'react';
import MessageText from './MessageText.jsx';

class MessageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
    this.textHelper = this.textHelper.bind(this);
    this.timeHelper = this.timeHelper.bind(this);
    this.fromUser = this.fromUser.bind(this);
    this.setClass = this.setClass.bind(this);
    this.imageHelper = this.imageHelper.bind(this);
  }

  textHelper(message){
    return <MessageText key={message.timestamp} conversation={message} fromuser={this.fromUser()} />
  }

  timeHelper(ms){
    var msgDate = new Date(ms);
    var msgDateStr = msgDate.toDateString();
    var now = new Date(Date.now());
    var nowStr = now.toDateString();
    if (msgDateStr === nowStr) {
      var result = msgDate.toTimeString();
      result = result.split(':');
      result = result[0] + ':' + result[1];
      return result;
    } else {
      var result = msgDate.toString();
      result = result.split(' ');
      var date = result[1] + ' ' + result[2] + ' ' + result[3];
      var time = result[4].split(':');
      time = time[0] + ':' + time[1];
      result = date + ' ' + time;
      return result;
    }
  }

  fromUser(){
    if (this.props.user === this.props.conversation[0].from) {
      return true
    } else {
      return false
    }
  }

  setClass(){
    if (this.fromUser() === true) {
      return 'fromuser';
    } else {
      return 'notfromuser';
    }
  }

  imageHelper() {
    if (this.fromUser() === true) {
      return 'profile.png';
    } else {
      return 'avatar.png';
    }
  }

  render() {
    return (
      <div className={'MessageGroup ' + this.setClass()}>
        <div className='sideBar'>
          <img src={this.imageHelper()} />
        </div>
        <div className='body'>
          {this.props.conversation.map(this.textHelper)}
          <div className='time'>{this.timeHelper(this.props.conversation[this.props.conversation.length-1].timestamp)}</div>
        </div>
      </div>
    );
  }
};

export default MessageGroup;