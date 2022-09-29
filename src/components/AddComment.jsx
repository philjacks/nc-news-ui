import React, { useState } from "react";
import { postCommentByArticleId } from "../api/requests";
import { v4 as uuidv4 } from "uuid";

import "./AddComment.css";

const AddComment = ({ article_id, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const commentDisabled = isPending ? true : false;

  const postNewComment = (e) => {
    e.preventDefault();

    const newCommentUI = {
      body: comment,
      votes: 0,
      author: "weegembump",
      article_id: article_id,
      created_at: Date.now(),
      comment_id: uuidv4(),
    };

    setComments((currComments) => {
      return [...currComments, newCommentUI];
    });

    setMsg("Adding comment...");
    setIsPending(true);

    postCommentByArticleId(article_id, {
      username: "weegembump",
      body: comment,
    })
      .then((res) => {
        setMsgColor("green");
        setMsg("Comment added");
        setIsPending(false);
        setTimeout(() => {
          setMsg("");
          setMsgColor("");
        }, 3000);
      })
      .catch((err) => {
        if (err) {
          setMsgColor("red");
          setMsg("Sorry, something went wrong");
          setIsPending(false);
          setTimeout(() => {
            setMsg("");
            setMsgColor("");
          }, 3000);
          setComments((currComments) => {
            return currComments.map((comment, index) => {
              if (comment.comment_id === newCommentUI.comment_id) {
                currComments.splice(index, 1);
              }
              return comment;
            });
          });
        }
      });

    setComment("");
  };

  const clearComment = () => {
    setComment("");
  };

  return (
    <form onSubmit={postNewComment} className="add-comment">
      <textarea
        required
        onInput={(e) => {
          setComment(e.target.value);
        }}
        name="comment"
        id="comment"
        placeholder="Add a comment..."
        value={comment}
        disabled={commentDisabled}
      ></textarea>
      <div className="btns">
        <button type="reset" onClick={clearComment} className="cancel-btn">
          Cancel
        </button>
        <button className="submit-btn">Comment</button>
      </div>
      <p className={`${msgColor} msg`}>{msg}</p>
    </form>
  );
};

export default AddComment;
