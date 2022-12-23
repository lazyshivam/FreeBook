import React from "react";
import {Link} from "react-router-dom";
import image from '../image/open-book.png';

const Login = () => {
  return (
    <div className="bg-image">
    <div style={{ backgroundColor: "whitesmoke",maxWidth:'500px',position:"relative",top:'70px',padding:'20px',opacity:'1'}} className='container loginform '>
        <div className="icon d-flex justify-content-center p-4" style={{fontWeight:'bolder',fontSize:'30px'}}>
            <img src={image} alt="" style={{width:'60px',marginRight:'15px'}}/>
            <span style={{marginTop:"6px"}}> FreeBook</span>
        </div>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
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
            className="form-control"
            id="exampleInputPassword1"
          />
        </div >
         <div className="position-relative  "style={{left:'50px',top:'10px'}}>
        <button type="submit" className="btn btn-primary w-75   " >
          Login
        </button>
        </div>
      </form>
      <div className="d-flex justify-content-center p-5" >
        <Link to='/newuser'>Create Your Account</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
