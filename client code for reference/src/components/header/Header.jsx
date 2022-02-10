import { Link } from "react-router-dom";
import "./header.css";

let Header = () => {
    return (
        <>
            <section className="banner_main">
                <div className="container">
                    <div className="row d_flex">
                        <div className=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                            <div className="text-bg">
                                <h1>
                                    Welcome!
                                    <br /> 
                                </h1>
                                <h2 className="white1">Publish Your Passions, <br/>Your Way</h2>
                                <p>
                                    Missing out on the latest posts?
                                    Join our Community and get the weekly newsletters.
                                    Read about the latest trends. Click below to sign up.                                   
                                </p>
                                <Link to="/register" className="nav-link" >Register</Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-12-3">
                            <div className="text-img">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "images/box_img.png"} alt="#" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;