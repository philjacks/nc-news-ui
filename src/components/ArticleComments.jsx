import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api/requests";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

import "./ArticleComments.css";

const ArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <section className="comments-list">
      <h3>Comments</h3>
      <AddComment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />

      <CommentsList
        msg={msg}
        setMsg={setMsg}
        msgColor={msgColor}
        setMsgColor={setMsgColor}
        setComments={setComments}
        comments={comments}
      />
    </section>
  );
};

export default ArticleComments;
