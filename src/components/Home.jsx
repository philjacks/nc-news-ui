import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import ArticleList from "./ArticleList";

import { getArticles } from "../api/requests";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(({ data }) => {
        setArticles(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newFilteredArticles = articles.filter((article) => {
      return article.topic.includes(selectedTopic);
    });

    setFilteredArticles(newFilteredArticles);
  }, [selectedTopic]);

  return (
    <div>
      <h2>Welcome</h2>

      <Filter setSelectedTopic={setSelectedTopic} />
      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} />
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;
