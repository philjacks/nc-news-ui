import React, { useEffect, useState } from "react";
import {
  patchDownvoteByArticleId,
  patchUpvoteByArticleId,
} from "../api/requests";

import "./ArticleVote.css";

const ArticleVote = ({ article }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState("");

  useEffect(() => {
    setVotes(article.votes);
  }, [article.votes]);

  const handleUpvote = (id) => {
    setVotes((currVotes) => currVotes + 1);

    patchUpvoteByArticleId(id)
      .then(({ data }) => {})
      .catch((err) => {
        if (err) {
          setVotes((currVotes) => currVotes - 1);
          setErr("Sorry, something went wrong");
        }
      });
  };

  const handleDownvote = (id) => {
    setVotes((currVotes) => currVotes - 1);

    patchDownvoteByArticleId(id)
      .then(({ data }) => {})
      .catch((err) => {
        if (err) {
          setVotes((currVotes) => currVotes + 1);
          setErr("Sorry, something went wrong");
        }
      });
  };

  return (
    <div className="vote-body">
      <button onClick={() => handleUpvote(article.article_id)}>&#8593;</button>
      <button onClick={() => handleDownvote(article.article_id)}>
        &#8595;
      </button>
      <p>Votes: {votes}</p>
      <p style={{ color: "red" }}>{err}</p>
    </div>
  );
};

export default ArticleVote;
