import React, { Component } from "react";
import './search-panel.css';


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
        <input
          type="text"
          className="search-panel form-control"
          placeholder="search..."
          aria-label="search panel"
          value={this.state.term}
          onChange={this.onSearchChange}

        />
    );
  }
}
