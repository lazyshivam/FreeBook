import React from 'react'
import {Link} from 'react-router-dom';
import image from '../image/open-book.png';

const Header = () => {
  return (
    <nav className="navbar  navbar-expand-lg bg-light bg-opacity-30 text-color-light" >
    <div className="container-fluid">
      <Link className="navbar-brand" to='/' style={{fontWeight:'bold'}}><img src={image} alt="" style={{width:'50px',height:'35px',paddingBottom:'2px'}} />{" "} FreeBook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
          </li>
        </ul>
        <div className="d-flex" >
        <Link to='/login'> <button className="btn btn-primary" >Logout</button></Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header
