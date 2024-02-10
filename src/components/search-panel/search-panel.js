import React from "react";
import ItemStatusFilter from "../../item-status-filter";

const SearchPanel = () => {
  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control"
        placeholder="search..."
        aria-label="search panel"
      />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
