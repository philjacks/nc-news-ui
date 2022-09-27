import React from "react";

import "./CommentCard.css";

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card" key={comment.comment_id}>
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
};

export default CommentCard;
