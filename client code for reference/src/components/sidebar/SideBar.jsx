import { useEffect, useState } from "react";
import axios from "axios";
import "./sideBar.css";

let SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCategories = async()=>{
      const response = await axios.get("/categories");
      setCats(response.data);
    }
    getCategories();
  },[])
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
            alt=""
          />
          <p>
            Writing blogs are some of the best resources to become a better
            writer, which let’s be real, is the goal of all writers.It’s so
            difficult, in fact, that there are countless writing tips and
            resources online dedicated to helping you better understand and
            improve the craft.I believe blogging is the path to the freedom you
            want in your life. I can help you get there!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((cateory,index) => (
              <li className="sidebarListItem" key={index}>{cateory.name}</li>
            ))}           
          </ul>
        </div>
        {/* <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SideBar;
