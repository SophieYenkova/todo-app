import React, { Component } from "react";
import "./add-list-item.css";

export default class AddListItem extends Component {
  state = {
    label: "",
  };

  onAddButtonClick = () => {
    console.log("added!");
    this.setState(({ added }) => {
      return {
        added: !added,
      };
    });
  };

  onLabelChange = (evt) => {
    this.setState({ label: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdded(this.state.label);
  }

  render() {
    const { onAdded } = this.props;
    return (
      <form className="add-list-item input-group mb-3 add-list-item" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Write a task"
          aria-label="Recipient's username"
          onChange={this.onLabelChange}
        />
        <button
          className="btn btn-outline-primary add-list-item-btn"
          type="button"
          id="button-addon2"
          onClick={() => onAdded(this.state.label)}
        >
          Add
        </button>
      </form>
    );
  }
}
