import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import SortBy from "./SortBy";
import ArticleList from "./ArticleList";
import { getArticles } from "../api/requests";
import { generateQueries } from "../helpers/generateQueries";

import "./Home.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const queries = generateQueries(selectedTopic, selectedSortBy);

    setIsLoading(true);
    getArticles(queries)
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    navigate(queries.url);
  }, [selectedTopic, navigate, selectedSortBy]);

  return (
    <div>
      <h2>Welcome</h2>

      <div className="filters">
        <Filter setSelectedTopic={setSelectedTopic} />
        <SortBy setSelectedSortBy={setSelectedSortBy} />
      </div>
      {isLoading ? (
        <p>Loading {selectedTopic} articles.....</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;
