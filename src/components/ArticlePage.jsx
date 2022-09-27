import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/requests";

import "./ArticlePage.css";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
        console.log(data.article);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="article-section">
      <h2>{article.title}</h2>
      <p>{`Author: ${article.author}`}</p>
      <p>{article.body}</p>
    </section>
  );
};

export default ArticlePage;
