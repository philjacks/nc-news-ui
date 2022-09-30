import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import SortBy from "./SortBy";
import ArticleList from "./ArticleList";
import { getArticles } from "../api/requests";
import { generateQueries } from "../helpers/generateQueries";
import ErrorMessage from "./ErrorMessage";

import "./Home.css";
import OrderBy from "./OrderBy";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrderBy, setSelectedOrderBy] = useState("DESC");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const queries = generateQueries(
      selectedTopic,
      selectedSortBy,
      selectedOrderBy
    );

    setIsLoading(true);
    getArticles(queries)
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
          setError((currError) => {
            return {
              ...currError,
              status: err.response.status,
              message: err.response.statusText,
            };
          });
        }
      });

    navigate(queries.url);
  }, [selectedTopic, navigate, selectedSortBy, selectedOrderBy]);

  if (Object.keys(error).length)
    return (
      <ErrorMessage
        element="Articles"
        status={error.status}
        message="Problem fetching articles"
      />
    );

  return (
    <div>
      <div className="filters">
        <Filter setSelectedTopic={setSelectedTopic} />
        <SortBy setSelectedSortBy={setSelectedSortBy} />
        <OrderBy setSelectedOrderBy={setSelectedOrderBy} />
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
