import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onButtonClick = () => {
    console.log("tyk");
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
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
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
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
            onClick={this.onButtonClick}
          >
            <i className="bi bi-exclamation-circle"></i>
          </button>
        </div>
      </div>
    );
  }
}
