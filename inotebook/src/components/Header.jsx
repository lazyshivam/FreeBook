import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import alertContext from '../context/alerts/AlertContext';
import noteContext from '../context/notes/NoteContext';
import image from '../image/open-book.png';
import UserDetails from './UserDetails';


const Header = () => {
  const token = localStorage.getItem("token");
  const alertcontext = useContext(alertContext);
  const { UpdateAlert } = alertcontext;
  
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const progresscontext=useContext(noteContext);
  const {setProgress}=progresscontext;
  useEffect(() => {
    if (token) setShow(true);
    else
      setShow(false)
  }, [token])
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setProgress(100);
    UpdateAlert("success", "You are successfully logged out!.");
  }


  return (
    <>
     
      <nav className="navbar  navbar-expand-lg bg-light bg-opacity-30 text-color-light sticky-top" >
        <div className="container-fluid">
          <Link className="navbar-brand"  onClick={()=>setProgress(100) } to='/' style={{ fontWeight: 'bold', color: "#1b5859", marginTop: "4px" }}><img src={image} alt="" style={{ width: '50px', height: '35px', paddingBottom: '2px' }} />{" "} FreeBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold"  onClick={()=>setProgress(100) } to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold"  onClick={()=>setProgress(100) } to='/about'>About</Link>
              </li>
            </ul>
            <div className="d-flex mx-2" >
              <div>
                {show && <UserDetails />}
              </div>
              {show && <Link to='/login'> <button className="btn btn-primary mx-2" onClick={handleLogout}>Logout</button></Link>}
              {!show && <Link to='/login'> <button className="btn btn-primary mx-2" onClick={()=>setProgress(100)} >Login</button></Link>}
              {!show && <Link to='/newuser'> <button className="btn btn-primary mx-2"  onClick={()=>setProgress(100)} >SignUp</button></Link>}

            </div>
          </div>
          
        </div>
       
      </nav>
      
    </>
  )
}

export default Header
