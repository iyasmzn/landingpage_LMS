import React, { useRef, useEffect, useState } from "react";// React
import { TypeAnimation } from 'react-type-animation';
import AOS from "aos";
import "aos/dist/aos.css";


  
function HeaderVideo({ src }) {
  const ref = useRef(null);

  // useEffect(() => {
  //     ref.current.play();
  // }, []);

  return (
    <div className="header-video-wrapper">
      <video ref={ref}  autoPlay muted loop className="header-video">
          <source src={src} type="video/mp4" />
      </video>
    </div>
  )
} 

export const Header = (props) => {
useEffect(() => {
    AOS.init();
}, []);
  return (
    <header id="header">
      <div className="intro">
        {props.lpData.title_1 ?
          (<HeaderVideo src={props.lpData.bg_video} />)
          :
            <div className="header-video-wrapper"></div>
        }
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div data-aos="zoom-in" className="col-md-8 col-md-offset-2 intro-text">
                <img className="header-logo" src={props.apiData ? props.apiData.logo : null} alt="Nuris Logo" />
                  {props.lpData.title_1 ?
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        props.lpData.title_1 + props.lpData.title_2 + ' ' + props.lpData.title_3,
                        5000, // wait 1s before replacing "Mice" with "Hamsters"
                        props.lpData.section_2_sub_title_1,
                        1000,
                        props.lpData.section_2_sub_title_2,
                        1000,
                        props.lpData.section_2_sub_title_3,
                        1000,
                      ]}
                      wrapper="h1"
                      speed={50}
                      repeat={Infinity}
                    />
                     :
                    <h1>Loading</h1>
                  }
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
