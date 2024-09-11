import React from "react";

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { toggleComplete } = this.props;
    return (
      <div onClick={(evt) => toggleComplete(id)}>
        {name} {completed && " ✔️"}
      </div>
    );
  }
}
