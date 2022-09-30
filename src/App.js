import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";
import ArticlePage from "./components/ArticlePage";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route
          path="*"
          element={
            <ErrorMessage element="Page" status={404} message="Not Found" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
