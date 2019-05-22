import React, { Component } from "react";
import "./users.css";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.JPG";
import e from "../assets/e.JPG";
import f from "../assets/f.JPG";
import g from "../assets/g.JPG";

class Users extends Component {
  render() {
    return (
      <div>
        <div className="users-wrapper margin">
          <div className="users">
            <img src={b} alt="" />
          </div>
          <div className="users-wrapper-text">
            <h4>Eddie</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={c} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Sally</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={d} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Richie</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={d} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Richie</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={d} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Richie</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={e} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Alexa</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={f} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Olivia</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={g} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Tom</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={g} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Tom</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={g} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Tom</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users">
            <img src={g} alt="" />
          </div>{" "}
          <div className="users-wrapper-text">
            <h4>Tom</h4>
            <p>Hey whats new... </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
