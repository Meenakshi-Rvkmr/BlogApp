import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { confirm } from "react-confirm-box";
import { Context } from "../../context/Context";

let SinglePost = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const postid = pathname[pathname.length - 1];

  const [post, setPost] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/posts/" + postid);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc)
    };
    getPost();
  }, [postid]);

  const deletePost = async () => {
    let confirmmsg = await confirm("Are you sure you want to delete this post??");
    if (confirmmsg) {
      let response = await axios.delete("/posts/" + postid);
      if (response) {
        alert(response.data);
        window.location.replace("/")
        console.log(response);
      }
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        title,
        desc,
      });
      setUpdateMode(false);
      alert("Blog updated successfully!");
      window.location.reload()
    } catch (err) {}
  };

  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo ? (
            <img src={post.photo} alt="" className="singlePostImg" />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/our_img1.jpg`}
              alt=""
              className="singlePostImg"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {post.title}
              {user?.role?.includes("admin")}
              { user?.user && user?.user?.roles?.includes("admin") &&  (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={deletePost}
                  ></i>
                </div>
              )}
            </h1>
          )}

          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{post.username}</b>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc"> {post.desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
