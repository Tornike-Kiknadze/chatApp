import React, { Component } from "react";
import "./messages.css";
export default class Message extends Component {
  render() {
    let message = this.props.text.input;
    let green = this.props.klass;
    if (green) {
      return <div className="message-green"> {message}</div>;
    } else return <div className=" message"> {message}</div>;
  }
}
