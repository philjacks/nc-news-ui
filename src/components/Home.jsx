import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import ArticleList from "./ArticleList";

import { getArticles } from "../api/requests";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const query = selectedTopic ? `?topic=${selectedTopic}` : "";

  useEffect(() => {
    setIsLoading(true);
    getArticles(selectedTopic)
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    navigate(query);
  }, [selectedTopic, navigate, query, setArticles]);

  return (
    <div>
      <h2>Welcome</h2>

      <Filter setSelectedTopic={setSelectedTopic} />

      {isLoading ? (
        <p>Loading {selectedTopic} articles.....</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;
