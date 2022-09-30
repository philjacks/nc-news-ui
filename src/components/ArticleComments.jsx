import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api/requests";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import ErrorMessage from "./ErrorMessage";

import "./ArticleComments.css";

const ArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then(({ data }) => {
        setComments(data.comments);
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

  if (isLoading) return <p>Loading comments...</p>;
  if (Object.keys(error).length)
    return (
      <ErrorMessage
        element="Comments"
        status={error.status}
        message="Problem fetching comments"
      />
    );

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
