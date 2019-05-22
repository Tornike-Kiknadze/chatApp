import React, { Component } from "react";
import "./list.css";
import Users from "./components/users";
import ListHeader from "./components/header/listHeader";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <ListHeader />
        <div className="list-users-wrapper">
          <Users />
        </div>
      </div>
    );
  }
}
