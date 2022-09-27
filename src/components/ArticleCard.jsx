import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <li key={article.article_id}>
          <h3>{article.title}</h3>
          <p>{article.topic}</p>
          <p>{article.author}</p>
          <p>{article.votes}</p>
        </li>
      </Link>
    </>
  );
};

export default ArticleCard;
