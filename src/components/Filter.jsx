import React, { useState, useEffect } from "react";
import { getTopics } from "../api/requests";

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
      <form style={{ margin: "1rem 1rem 0 1rem" }}>
        <label htmlFor="filter-topics">Filter by </label>
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
