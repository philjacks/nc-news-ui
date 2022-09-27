import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api/requests";
import CommentCard from "./CommentCard";

import "./ArticleComments.css";

const ArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then(({ data }) => setComments(data.comments))
      .catch((err) => console.log(err));
  }, [article_id]);
  return (
    <section className="comments-list">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default ArticleComments;
