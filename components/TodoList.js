import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    showItems: true,
  };

  toggleShowItems = (evt) => {
    this.setState({
      ...this.state,
      showItems: !this.state.showItems,
    });
  };

  render() {
    const { todos, toggleComplete } = this.props;
    const filterItems = todos.filter(
      (td) => !td.completed || this.state.showItems
    );
    return (
      <div>
        {filterItems.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
        <button onClick={this.toggleShowItems}>
          {this.state.showItems ? "Hide Completed Todos" : "Show Items"}
        </button>
      </div>
    );
  }
}
