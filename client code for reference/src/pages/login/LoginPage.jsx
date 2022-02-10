import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./loginPage.css";
import { Context } from "../../context/Context";
import validation from "./validation";

let LoginPage = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  //manage form errors
  const [formErrors, setFormErrors] = useState({});
  //manage submit click
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      username : userRef.current.value,
      password : passwordRef.current.value
    }
    setFormErrors(validation(data));
    setIsSubmit(true);   
  };

  useEffect(async() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        alert("Login Successful!");
        window.location.replace("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    }
  }, [formErrors]);

  console.log(user);
  return (
    <>
      <div className="login">
        <div className="registerDiv">
          <h3>Not a registered user? Click to Sign Up Now!!</h3>
          <button className="loginRegisterButton">
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </div>

        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
            ref={userRef}
          />
           <p className="formError">{formErrors.username}</p>
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <p className="formError">{formErrors.password}</p>
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
