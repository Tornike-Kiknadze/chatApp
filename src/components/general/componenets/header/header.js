import React, { Component } from "react";
import "./header.css";
import b from "../../../../components/list/assets/b.jpg";
import Camera from "./assets/camera";
import Call from "./assets/call";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="profile-wrapper">
          <div className="header-img-wrapper">
            <img src={b} alt="" />
          </div>{" "}
          <p className="header-user-name">Eddie</p>
        </div>
        <div className="svg">
          <Call width={28} height={28} fill={"#337d7b"} />
          <Camera width={40} height={40} fill={"#337d7b"} />
        </div>
      </div>
    );
  }
}

export default Header;
