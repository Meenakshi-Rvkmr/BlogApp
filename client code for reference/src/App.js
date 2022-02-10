import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import PostPage from "./pages/post/PostPage";
import WritePage from "./pages/write/WritePage";
import { useContext } from "react";
import { Context } from "./context/Context";
import {React} from "react"

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <TopBar></TopBar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post/:postId" element={user?.user ? <PostPage />:<LoginPage/>} />
          <Route path="/write" element={user?.user ? <WritePage />:<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
