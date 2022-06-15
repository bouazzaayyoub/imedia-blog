import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./pages/ListPosts";
import Post from "./pages/Post";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
