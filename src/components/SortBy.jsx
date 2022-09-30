import React from "react";

import "./SortBy.css";

const SortBy = ({ setSelectedSortBy }) => {
  return (
    <form className="sort-by">
      <label htmlFor="sort-by">Sort by </label>
      <select
        onChange={(e) => setSelectedSortBy(e.target.value)}
        name="sort-by"
        id="sort-by"
        defaultValue="created_at"
      >
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
      </select>
    </form>
  );
};

export default SortBy;
