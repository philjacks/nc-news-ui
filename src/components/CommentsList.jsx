import React from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({
  msg,
  setMsg,
  msgColor,
  setMsgColor,
  setComments,
  comments,
}) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <CommentCard
            msg={msg}
            msgColor={msgColor}
            setMsgColor={setMsgColor}
            setMsg={setMsg}
            setComments={setComments}
            key={comment.comment_id}
            comment={comment}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
