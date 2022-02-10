import "./homePage.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios"

let HomePage = () => { 

  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async()=>{
      let response = await axios.get("/posts",{
        headers:{"x-auth-token":localStorage.getItem("token")}
      })
      
      setPosts(response.data)
    }
    fetchPosts();
  },[])

  return (
    <>
      <div className="main-layout">
        <div className="head_top">         
          <Header></Header>
        </div>
        <div className="contents">
        <Posts posts={posts}></Posts>
        <SideBar />
        </div>
        
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
