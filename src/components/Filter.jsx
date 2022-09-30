import React, { useState, useEffect } from "react";
import { getTopics } from "../api/requests";

import "./Filter.css";

const Filter = ({ setSelectedTopic }) => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTopics()
      .then(({ data }) => setTopics(data.topics))
      .catch((err) => {
        if (err) {
          setError("Problem fetching topics");
        }
      });
  }, []);

  return (
    <>
      <form className="filter-form">
        <label htmlFor="filter-topics">Topic </label>
        <select
          defaultValue=""
          onChange={(e) => setSelectedTopic(e.target.value)}
          name="filter-topics"
          id="filter-topics"
        >
          <option value="">All</option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        {Object.keys(error).length ? (
          <p style={{ color: "red", margin: 0 }}>{error}</p>
        ) : null}
      </form>
    </>
  );
};

export default Filter;
