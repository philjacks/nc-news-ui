import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import ArticleList from "./ArticleList";

import { getArticles } from "../api/requests";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();

  const query = selectedTopic ? `?topic=${selectedTopic}` : "";

  useEffect(() => {
    getArticles(selectedTopic)
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((err) => console.log(err));

    navigate(query);
  }, [selectedTopic]);

  return (
    <div>
      <h2>Welcome</h2>

      <Filter setSelectedTopic={setSelectedTopic} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
