import React, { useEffect, useState } from "react";
import { deleteCommentById } from "../api/requests";

import "./CommentCard.css";

const CommentCard = ({
  msg,
  msgColor,
  setMsgColor,
  setMsg,
  setComments,
  comment,
}) => {
  const [isPending, setIsPending] = useState(false);

  const deleteDisabled = isPending ? true : false;

  useEffect(() => {}, [isPending]);

  const handleDelete = (id) => {
    setIsPending(true);
    setMsg("Deleting comment...");

    deleteCommentById(id)
      .then((res) => {
        setMsgColor("green");
        setMsg("Comment deleted");
        setTimeout(() => {
          setIsPending(false);
          setMsgColor("");
          setMsg("");
          setComments((currComments) => {
            return currComments.filter((originalComment) => {
              return originalComment.comment_id !== comment.comment_id;
            });
          });
        }, 2000);
      })
      .catch((err) => {
        if (err) {
          setMsgColor("red");
          setMsg("Sorry, something went wrong");

          setTimeout(() => {
            setIsPending(false);
            setMsgColor("");
            setMsg("");
          }, 2000);
        }
      });
  };

  return (
    <>
      {isPending ? (
        <div className="message-card">
          <p className={msgColor}>{msg}</p>
        </div>
      ) : (
        <li className="comment-card" key={comment.comment_id}>
          <h4 className="card-title">{comment.author}</h4>
          <p className="comment-body">{comment.body}</p>
          <div className="card-bottom">
            <p>Votes: {comment.votes}</p>

            <button
              disabled={deleteDisabled}
              className="delete-btn"
              onClick={() => handleDelete(comment.comment_id)}
            >
              X
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default CommentCard;
