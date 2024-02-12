import React, { Component } from "react";


export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          aria-label="search panel"
          value={this.state.term}
          onChange={this.onSearchChange}

        />
      </div>
    );
  }
}
