import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
// import {useHistory}
import image from "../image/open-book.png";



const Newuser = (props) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: ""
  });
 const nevigate=useNavigate();
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (event) => {
    // console.log(formValue)
    event.preventDefault();
    // const postURL =  "http://localhost:4000/api/auth/createuser";
    const response=await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

  
    const json=await response.json();
    console.log(json);

    //save the authtoken and redirect
    if(json.authtoken){
      localStorage.setItem('token',json.authtoken);
      nevigate('/');
      alert("Wohoo!, Account created successfully.")
    }
    else{
      if(json.error)
      alert(json.error);
      else
      alert(json.errors[0].msg)
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
      className="container loginform"
    >
      <div
        className="icon d-flex justify-content-center py-2 "
        style={{ fontWeight: "bolder", fontSize: "30px" }}
      >
        <img
          src={image}
          alt=""
          style={{ width: "60px", marginRight: "15px" }}
        />
        <span style={{ marginTop: "6px" }}> FreeBook</span>
      </div>
      <form onSubmit={handleOnSubmit} method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={onChange}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={onChange}
            className="form-control"
            id="InputEmail"
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
            value={formValue.password}
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div
          className="position-relative  "
          style={{ left: "50px", top: "20px" }}
        >
          <button type="submit" className="btn btn-primary w-75   ">
            Create Your Account
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center p-3 my-4">
        <Link to="/login">Login</Link>
      </div>
    </div>
    </div>
  );
};

export default Newuser;
