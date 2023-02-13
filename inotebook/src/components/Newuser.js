import React,{useContext,useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import alertContext from "../context/alerts/AlertContext";
import image from "../image/open-book.png";



const Newuser = (props) => {

  const alertcontext=useContext(alertContext);
  const {UpdateAlert}=alertcontext;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });
 const nevigate=useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (event) => {
   
    event.preventDefault();
    const host =  "https://freebook-website.onrender.com";
    const response=await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),
    });

  
    const json=await response.json();

    //save the authtoken and redirect
    if(json.success){
      localStorage.setItem('token',json.authtoken);
      nevigate('/');
      UpdateAlert("success","Wohoo!, Account created successfully.")
     
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
            value={credentials.name}
            onChange={onChange}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
           required

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
            minLength={5}
            required
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
