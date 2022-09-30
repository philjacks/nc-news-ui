import React from "react";
import { Link } from "react-router-dom";
import { convertUnixToDate } from "../helpers/dateConverters";
import { generateIcon } from "../helpers/generateIcon";

import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Link to={`/articles/${article.article_id}`}>
        <li className="card" key={article.article_id}>
          <h3 className="card-title">{article.title}</h3>
          <img
            className="icon"
            src={generateIcon(article.topic)}
            alt="Topic icon"
          />
          <div className="mid">
            <i>{article.author}</i>
          </div>
          <div className="bottom">
            <p>Votes: {article.votes}</p>
            <p className="created">{convertUnixToDate(article.created_at)}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ArticleCard;
