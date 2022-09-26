import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <li key={article.article_id}>
      <h3>{article.title}</h3>
      <p>{article.topic}</p>
      <p>{article.author}</p>
    </li>
  );
};

export default ArticleCard;
