import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          readOnly
          checked
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          All
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          readOnly
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Active
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          readOnly
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Done
        </label>
      </div>
    );
  }
}
