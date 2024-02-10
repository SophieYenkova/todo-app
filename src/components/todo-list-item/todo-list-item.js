import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
    this.setState({
      done: true
    })
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let classNames =
      "todo-list-item shadow-sm p-3 rounded d-flex justify-content-between";
    if (done) {
      classNames =
        "todo-list-item shadow-sm p-3 rounded d-flex justify-content-between done";
    }
    const style = {
      color: important ? "tomato" : "black",
      fontSize: important ? "23px" : "20px",
    };
    return (
      <div className={classNames}>
        <span
          className="todo-list-item"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-trash"></i>
          </button>
          <button type="button" className="btn btn-outline-success">
            <i className="bi bi-check-circle"></i>
          </button>
        </div>
      </div>
    );
  }
}
