import React from "react";
import { convertDateToUnix } from "../helpers/dateConverters";
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
      {comments
        .sort((a, b) => {
          return (
            convertDateToUnix(b.created_at) - convertDateToUnix(a.created_at)
          );
        })
        .map((comment) => {
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
