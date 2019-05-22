import React, { Component } from "react";
import "./user.css";
import b from "../../components/list/assets/b.jpg";
import Settings from "./assets/settingsSvg";
import Search from "./assets/searchSvg";
import Notification from "./assets/notification";
export default class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="user-wrapper">
          <div className="user-img-wrapper">
            <img src={b} alt="" />
          </div>{" "}
          <h3>Eddie</h3>
          <Settings width={30} height={30} fill={"#464B50"} />
        </div>

        <div className="settings">
          <div className="user-search">
            <Search width={30} height={30} fill={"#464B50"} />
            <p>SEARCH</p>
          </div>
          <div className="user-search">
            <Notification width={30} height={30} fill={"#464B50"} />
            <p>NOTIFICATIONS</p>
          </div>
        </div>

        <div className="user-files">
          <p>Attached files:</p>{" "}
        </div>
      </div>
    );
  }
}
