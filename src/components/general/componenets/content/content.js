import React, { Component } from "react";
import "./content.css";
import Message from "../messages/messages";
import { connect } from "react-redux";

class Content extends Component {
  render() {
    const input = this.props.input;

    return (
      <div className="general-content">
        {input.map((input, index) => {
          if (input.input === " ") return null;
          else if (index % 2 === 0) {
            return <Message key={index} text={input} klass={"green"} />;
          }
          return <Message key={index} text={input} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.inputReducer
  };
}

export default connect(
  mapStateToProps,
  null
)(Content);
