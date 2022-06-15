import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Posts from "./pages/ListPosts";
import Post from "./pages/Post";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

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
