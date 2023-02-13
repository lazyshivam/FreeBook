import React, { useState, useContext } from 'react'
import alertContext from '../context/alerts/AlertContext';
// import image from '../image/Writing.jpg'

const About = () => {
  const alertcontext = useContext(alertContext);
  const { UpdateAlert } = alertcontext;
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
    e.preventDefault();
    const response = await fetch("https://freebook-website.onrender.com/api/customers/addCustomer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    });
    const json = await response.json();
    UpdateAlert("success", "Your details submitted successfully!");
    // ref.current.click();
    setCustomerDetails({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      aboutCustomer: ""
    })
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
                  <input type="text" name='firstname' minLength={3}  required value={customerDetails.firstname} onChange={onChange} placeholder="First Name" />
                  <input type="text" name='lastname'  value={customerDetails.lastname} onChange={onChange} placeholder="Last Name" />
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
              <li><a href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="AboutUs container my-5 " style={{ color: 'white' }}>
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui laboriosam dicta fugiat animi magnam dolorem tempora corporis quae accusantium illum earum facilis quod minus accusamus ipsum, error perferendis voluptate provident!
            Impedit illum expedita optio eum! Beatae aperiam dicta nihil iste! Earum facilis, perspiciatis in rerum temporibus repellendus repudiandae quisquam saepe officiis velit sed consequuntur sapiente illum optio praesentium officia dicta?
            Ea, pariatur. Possimus quis velit aut ab voluptas, id aperiam incidunt non nostrum placeat cumque deserunt iusto fugiat itaque alias corrupti hic enim doloremque eius autem voluptatum dolorem. Temporibus, veniam!
            Consequatur nemo ut quis itaque qui fugiat nisi iusto dignissimos a modi. Veniam, fugiat laudantium maiores voluptas dolorem debitis minus corporis necessitatibus incidunt tempora, possimus quam optio temporibus nam architecto.</p>
        </div>

      </div>
    </div>

  )
}

export default About
