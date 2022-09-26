import React, { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

import { getArticles } from "../api/requests";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(({ data }) => {
        setArticles(data.articles);
        console.log(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Welcome</h2>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
