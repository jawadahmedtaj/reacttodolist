import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button>X</button>
      </div>
    );
  }
}
