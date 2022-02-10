import Post from "../post/Post";
import "./posts.css";

let Posts = ({posts}) => {
  return (
    <>
      <div className="blog_main">
        <div className="titlepage">
          <h2>Our Blogs</h2>
        </div>
        
        <div className="posts">
          {posts.map(post=>(
            <Post post={post} key={post.title}></Post>
          ))}
        
        </div>        
      </div>
    </>
  );
};

export default Posts;
