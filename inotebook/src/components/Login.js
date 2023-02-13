import React, { useState } from "react";
import { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import alertContext from "../context/alerts/AlertContext";
import userContext from "../context/users/UserContext";
import image from "../image/open-book.png";

const Login = () => {
  const alertcontext=useContext(alertContext);
  const usercontext=useContext(userContext);
  const {GetUserDetails}=usercontext;
  const {UpdateAlert}=alertcontext;
  const host = "https://freebook-website.onrender.com";
  const navigate=useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      GetUserDetails();
      UpdateAlert("success","You are successfully longged in.")
      // alert("Wohoo!, Account created successfully.");
    }
    else{
      navigate('/login')
     alert("Invalid Credentials")
    }
  };
  return (
    <div className="bg-image">
      <div
        style={{
          backgroundColor: "whitesmoke",
          maxWidth: "500px",
          position: "relative",
          top: "70px",
          padding: "20px",
          opacity: "1",
        }}
        className="container loginform "
      >
        <div
          className="icon d-flex justify-content-center p-4"
          style={{ fontWeight: "bolder", fontSize: "30px" }}
        >
          <img
            src={image}
            alt=""
            style={{ width: "60px", marginRight: "15px" }}
          />
          <span style={{ marginTop: "6px" }}> FreeBook</span>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div
            className="position-relative  "
            style={{ left: "50px", top: "10px" }}
          >
            <button type="submit" className="btn btn-primary w-75   ">
              Login
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center p-5">
          <Link to="/newuser">Create Your Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
