import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  useEffect(() => {
    AOS.init()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title" data-aos="fade-up">
                <h2>Get In Touch</h2>
                <p>
                  Berikut alamat sekolah SDIT Nurul Islam yang dimana perpustakaannya berada di dalam sekolah.
                </p>
              </div>
              
          <div id="map">
                <div className="mapouter" data-aos="zoom-in">
                  <div className="gmap_canvas">
                    <iframe width="100%" height="422" id="gmap_canvas" src="https://maps.google.com/maps?q=sdit%20nurul%20islam%20tengaran&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <a href="https://fmovies-online.net"></a>
                    {/* <br />
                      <a href="https://www.embedgooglemap.net">embed google map in webpage</a> */}
                  </div>
              </div>
          </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info" data-aos="fade-down">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                Kaligandu, Butuh, Kec. Tengaran, Kabupaten Semarang, Jawa Tengah 50775
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +62 851 8313 6782
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                yayuksrahayu@gmail.com
              </p>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 LMS SDIT Nuris. Design by{" "}
            <a href="http://www.haunansite.com" rel="nofollow">
              Haunan Dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
