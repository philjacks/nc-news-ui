import React from "react";

const SortBy = ({ setSelectedSortBy }) => {
  return (
    <form style={{ margin: "1rem 1rem 0 1rem" }}>
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
