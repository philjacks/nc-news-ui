import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/requests";
import ArticleVote from "./ArticleVote";
import ArticleComments from "./ArticleComments";

import "./ArticlePage.css";
import ErrorMessage from "./ErrorMessage";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
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
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (Object.keys(error).length)
    return (
      <ErrorMessage
        element="Article"
        status={error.status}
        message={error.message}
      />
    );

  return (
    <section>
      <div className="article-section">
        <h2>{article.title}</h2>
        <p>{`Author: ${article.author}`}</p>
        <p>{article.body}</p>
        <ArticleVote article={article} />
      </div>
      <ArticleComments article_id={article_id} />
    </section>
  );
};

export default ArticlePage;
