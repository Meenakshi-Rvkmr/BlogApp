import { useEffect, useState } from "react";
import axios from "axios";
import "./registerPage.css";
import validation from "./validation";

let RegisterPage = () => {
  //manage form values
  const [user, setUser] = useState({});
  //manage api errors
  const [error, setError] = useState(false);
  //manage form errors
  const [formErrors, setFormErrors] = useState({});
  //manage submit click
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {        
      e.preventDefault();
      setFormErrors(validation(user));
      console.log(formErrors);
      setIsSubmit(true);   
  };

  //Successful form validation
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //alert("Registration Successful!");
      setError(false);
      const savePost = async () => {
        try {
          const response = await axios.post("/auth/register",user);
          if (response.data) {
            alert("Registration Successful!");
            window.location.replace("/login");
          }
        } catch (error) {
          setError(true);
        }
      };
      savePost();
    }
  }, [formErrors]);
  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username..."
          />
          <p className="formError">{formErrors.username}</p>
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email..."
          />
          <p className="formError">{formErrors.email}</p>
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password..."
          />
          <p className="formError">{formErrors.password}</p>
          <button className="registerButton" type="submit">
            {" "}
            Register{" "}
          </button>
        </form>        
        {error && <div className="formError">Something went wrong!!</div>}
        
      </div>
    </>
  );
};

export default RegisterPage;
