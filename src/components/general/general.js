import React, { Component } from "react";
import "./general.css";
import Input from "./componenets/input/input";
import Content from "./componenets/content/content";
import Header from "./componenets/header/header";

export default class General extends Component {
  render() {
    return (
      <div className="general">
        <Header />
        <Content />
        <Input />
      </div>
    );
  }
}
