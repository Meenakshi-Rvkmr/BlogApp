import "./footer.css";

let Footer = () => {
    return (
        <>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="cont">
                  <h3>
                    {" "}
                    <strong className="multi"> Contact Us!</strong>
                    <br />
                    </h3>
                    <h4>myblogsite@gmail.com</h4>
                    <br />
                  
                </div>
              </div>
              <div className="col-md-12">
                <ul className="social_icon">                  
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2019 All Rights Reserved. 
                    {/* Design by{" "}
                    <a href="https://html.design/"> Free Html Templates</a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
 ;
};


export default Footer;