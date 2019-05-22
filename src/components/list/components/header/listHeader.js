import React, { Component } from "react";
import "./listHeader.css";
import Logo from "../../assets/logo";
export default class ListHeader extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <Logo fill={"#337D7B"} width={55} height={55} />
        <a href="/" className="brand">
          Pine Chat
        </a>
      </div>
    );
  }
}
