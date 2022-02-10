import { Link } from "react-router-dom";
import "./post.css";

let Post = ({post}) => {
  return (
    <>
      <div className="post">        
        <img
          // src={process.env.PUBLIC_URL + "images/our_img1.jpg"}
          src={post.photo}
          alt=""
          className="postImg"
        />
      
        <div className="postInfo">
          <div className="postCats">
            { post.categories && post.categories.map((cat,index) => (
              <span className="postCat" key={index}>{cat}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle"> {post.title}</span>
          </Link>
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    </>
  );
};

export default Post;
