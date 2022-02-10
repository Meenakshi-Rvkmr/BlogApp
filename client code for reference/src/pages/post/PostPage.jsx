import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./postPage.css";

let PostPage = ()=>{
    return(
        <>
        <div className="viewPost">
            <SinglePost />
            <SideBar />
        </div>
        </>
    )
}

export default PostPage;