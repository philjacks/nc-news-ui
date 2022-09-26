import React from "react";

import ArticleCard from "./ArticleCard";

import "./ArticleList.css";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
