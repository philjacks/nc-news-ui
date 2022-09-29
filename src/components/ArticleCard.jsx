import React from "react";
import { Link } from "react-router-dom";
import { convertUnixToDate } from "../helpers/dateConverters";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <li key={article.article_id}>
          <h3>{article.title}</h3>
          <p>{article.topic}</p>
          <p>{article.author}</p>
          <p>Votes: {article.votes}</p>
          <p>{convertUnixToDate(article.created_at)}</p>
        </li>
      </Link>
    </>
  );
};

export default ArticleCard;
