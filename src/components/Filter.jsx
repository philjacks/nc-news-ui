import React, { useState, useEffect } from "react";
import { getTopics } from "../api/requests";

const Filter = ({ setSelectedTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then(({ data }) => setTopics(data.topics))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <label htmlFor="filter-topics">Filter by </label>
      <select
        defaultValue=""
        onChange={(e) => setSelectedTopic(e.target.value)}
        name="filter-topics"
        id="filter-topics"
      >
        <option value="All">All</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
