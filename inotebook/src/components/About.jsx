import React, { useState, useContext } from 'react'
import alertContext from '../context/alerts/AlertContext';
import noteContext from '../context/notes/NoteContext';
// import image from '../image/Writing.jpg'

const About = () => {
  const alertcontext = useContext(alertContext);
  const { UpdateAlert } = alertcontext;
  const progresscontext = useContext(noteContext);
  const { setProgress } = progresscontext;
  const [customerDetails, setCustomerDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    aboutCustomer: ""
  })
  const onChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    setProgress(10);
    e.preventDefault();
    const response = await fetch("https://freebook-website.onrender.com/api/customers/addCustomer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    });
    // setProgress({ display: "", success: false, width: "50%" });
    // eslint-disable-next-line
    const json = await response.json();
    // setProgress({ display: "", success: false, width: "75%" });

    setCustomerDetails({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      aboutCustomer: ""
    });

    setProgress(100);
    UpdateAlert("success", "Your details submitted successfully!");
  }


  return (

    <div className="footer_get_touch_outer ">
      <div className="Welcome container mb-3" style={{ color: "white" }}>
        <h1>Your Welcome!</h1>
        <p className="Thanks">
          Thanks For Being Here..
        </p>
      </div>
      <div className="container">
        <div className="footer_get_touch_inner d-flex justify-content-center flex-wrap grid-70-30">
          <div className="colmun-70 get_form">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form name='myForm' onSubmit={handleOnSubmit}>
                <div className="grid-50-50">
                  <input type="text" name='firstname' minLength={3} required value={customerDetails.firstname} onChange={onChange} placeholder="First Name" />
                  <input type="text" name='lastname' value={customerDetails.lastname} onChange={onChange} placeholder="Last Name" />
                  <input type="email" name='email' required value={customerDetails.email} onChange={onChange} placeholder="Email" />
                  <input type="tel" name='phone' minLength={10} required value={customerDetails.phone} onChange={onChange} placeholder="Phone/Skype" />
                </div>
                <div className="grid-full">
                  <textarea placeholder="About You" name='aboutCustomer' required value={customerDetails.aboutCustomer} onChange={onChange} cols="30" rows="10"></textarea>
                  <input type="submit" value="Submit" />

                </div>
              </form>
            </div>
          </div>
          <div className="colmun-30 get_say_form">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:">shivamgoswami.ss.pp@gmail.com</a>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
                <a href="tel:">+91 6306289202</a>
              </li>
              <li>
                <i className="fa fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/shivam-goswami-ba1165214/">Linkedin Profile</a>
              </li>
            </ul>
            <ul className="get_say_social-icn">
              <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="AboutUs container my-5 " style={{ color: 'white' }}>
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="about-text">
          <p>Welcome to our website! We provide a secure and convenient platform for users to manage their notes. Our goal is to simplify the process of organizing and accessing your notes, making it easier for you to stay productive and focused.

            <br/><br/>With our easy-to-use interface, you can add, delete, and update your notes quickly and efficiently. We understand the importance of keeping your notes safe and private, which is why we use advanced security measures to protect your data.

           <br/>  Whether you're a student, professional, or just someone who likes to stay organized, our platform is designed to meet your needs. We believe that everyone deserves a tool that makes their lives easier, and we're committed to providing that service to our users.

            <br/><br/>Thank you for choosing our website as your note-taking solution. We hope that you find our platform to be useful and efficient, and we welcome any feedback or suggestions you may have.</p></div>

      </div>
    </div>

  )
}

export default About
