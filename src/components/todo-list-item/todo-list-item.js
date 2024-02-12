import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    let classNames =
      "todo-list-item shadow-sm p-3 rounded d-flex justify-content-between";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="bi bi-trash"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={onToggleImportant}
          >
            <i className="bi bi-exclamation-circle"></i>
          </button>
        </div>
      </div>
    );
  }
}
