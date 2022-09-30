import React from "react";
import { Link, useLocation } from "react-router-dom";

const ErrorMessage = ({ element, status, message }) => {
  const location = useLocation();

  return (
    <div style={{ color: "red" }}>
      <h2>{status}</h2>
      <p>
        {element} <strong>{message}</strong>
      </p>
      {location.pathname !== "/" ? <Link to="/">Back to home</Link> : null}
    </div>
  );
};

export default ErrorMessage;
