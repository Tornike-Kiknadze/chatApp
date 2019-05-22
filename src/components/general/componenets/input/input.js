import React, { Component } from "react";
import "./input.css";
import { connect } from "react-redux";
import { addText } from "../../../../actions/index";
import Button from "./button/button";

class Input extends Component {
  state = {
    input: " ",
    show: true
  };

  setInputText = e => {
    this.setState({ input: e.target.value });
  };
  hideTooltip = () => {
    this.setState({ show: false });
  };
  onSubmiti = e => {
    e.preventDefault();
    this.props.addText(this.state);
    this.setState({ input: " " });
  };

  render() {
    return (
      <form className="general-input" onSubmit={e => this.onSubmiti(e)}>
        <input
          onChange={e => this.setInputText(e)}
          style={{ outline: "none" }}
          type="text"
          onFocus={this.hideTooltip}
          className="general-input-type"
          value={this.state.input}
        />{" "}
        {this.state.show && <span className="tooltip">Type Something</span>}
        <button className="sendbutton">
          <Button width={30} fill={"#B3BFB8"} height={30} opacity={0.7} />
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addText }
)(Input);
