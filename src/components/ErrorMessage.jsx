import React from "react";
import { Link, useLocation } from "react-router-dom";
import errorIcon from "../img/error.png";

import "./ErrorMessage.css";

const ErrorMessage = ({ element, status, message }) => {
  const location = useLocation();

  return (
    <div style={{ color: "red" }}>
      <img className="error-icon" src={errorIcon} alt="Error icon" />
      <h2 className="status">{status}</h2>
      <p className="msg">
        {element} <strong>{message}</strong>
      </p>
      {location.pathname !== "/" ? (
        <Link to="/">
          <p className="back-home">Back to home</p>
        </Link>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
