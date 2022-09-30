import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/requests";
import ArticleVote from "./ArticleVote";
import ArticleComments from "./ArticleComments";
import { convertUnixToDate } from "../helpers/dateConverters";
import { generateIcon } from "../helpers/generateIcon";
import backArrow from "../img/back-arrow.png";
import { useNavigate } from "react-router-dom";

import "./ArticlePage.css";
import ErrorMessage from "./ErrorMessage";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  const navigate = useNavigate();

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

  const toArticles = () => {
    navigate("/");
  };

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
        <div onClick={toArticles} className="back">
          <img
            className="back-arrow"
            src={backArrow}
            alt="Back to last page arrow"
          />
          <p className="back-text">Back to articles</p>
        </div>
        <h2 className="article-title">{article.title}</h2>
        <div className="underline"></div>
        <img
          className="article-icon"
          src={generateIcon(article.topic)}
          alt="Topic icon"
        />
        <i className="author">{`Author: ${article.author}`}</i>
        <p className="created">{convertUnixToDate(article.created_at)}</p>

        <p className="article-body">{article.body}</p>
        <div className="small-underline"></div>
        <ArticleVote article={article} />
      </div>
      <ArticleComments article_id={article_id} />
    </section>
  );
};

export default ArticlePage;
