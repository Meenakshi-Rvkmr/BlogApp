import { useContext, useState } from "react";
import "./writePage.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { images } from "../../assets/images";

let WritePage = () => {
  const [myPost, setMyPost] = useState({});
  const { user } = useContext(Context);
  const [categories, setCategories] = useState([]);

  //function to get catgories selected
  const onChangeCatgory = (e) => {
    let options = categories;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the value of the checkbox to options array
      options.push(e.target.value);
    } else {
      // or remove the value of the unchecked checkbox from the array
      let index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    setCategories(options);
    console.log(categories);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: myPost.author ? myPost.author : user.username,
      title: myPost.title,
      desc: myPost.desc,
      categories: categories,
      photo: myPost.photo,
    };
    //console.log(newPost);
    const response = await axios.post("/posts", newPost);
    if (response.data) {
      alert("New Blog saved successfully!");
      window.location.replace("/post/" + response.data._id);
    }
  };
  return (
    <>
      <div className="write">
        {myPost.photo ? (
          <img className="writeImg" src={myPost.photo} alt="" />
        ) : (
          <img
            className="writeImg"
            src={process.env.PUBLIC_URL + "images/our_img1.jpg"}
            alt=""
          />
        )}

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#exampleModal"
              >
              <i className="writeIcon fas fa-plus"></i>
              </button>
            </label>
           
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setMyPost({ ...myPost, title: e.target.value })}
            />
          </div>
          <div className="writeFormGroup">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <label className="dropdown-item">
                  <input
                    className="dropdown-item form-check-input"
                    type="checkbox"
                    value="Music"
                    name="Category"
                    id="flexCheckDefault"
                    onChange={onChangeCatgory}
                  />
                  Music
                </label>
                <label className="dropdown-item">
                  <input
                    className="dropdown-item form-check-input"
                    type="checkbox"
                    value="Life"
                    name="Category"
                    id="flexCheckDefault"
                    onChange={onChangeCatgory}
                  />
                  Life
                </label>
                <label className="dropdown-item">
                  <input
                    className="dropdown-item form-check-input"
                    type="checkbox"
                    value="Travel"
                    name="Category"
                    id="flexCheckDefault"
                    onChange={onChangeCatgory}
                  />
                  Travel
                </label>
                <label className="dropdown-item">
                  <input
                    className="dropdown-item form-check-input"
                    type="checkbox"
                    value="Food"
                    name="Category"
                    id="flexCheckDefault"
                    onChange={onChangeCatgory}
                  />
                  Food
                </label>
              </div>
            </div>

            <div className="writeAuthor">
              <input
                type="text"
                placeholder="Author"
                className="writeInputAuthor"
                autoFocus={true}
                onChange={(e) =>
                  setMyPost({ ...myPost, author: e.target.value })
                }
              />
            </div>
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => setMyPost({ ...myPost, desc: e.target.value })}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="exampleModalLabel">
                  Choose Image for your article
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="displayImages">
                  {images.map((image) => (
                    <div className="form-check" key={image.id}>
                      <input
                        className="form-check-input"
                        value={image.src}
                        type="radio"
                        name="exampleRadios"
                        id={"exampleRadios" + image.id}
                        onChange={(e) =>
                          setMyPost({ ...myPost, photo: e.target.value })
                        }
                      />
                      <img className="modalImage" src={image.src} alt={image.id} key={image.id} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritePage;
