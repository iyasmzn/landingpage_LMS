import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const About = (props) => {
  const [apiData, setApiData] = useState({})
  
  useEffect(() => {
    AOS.init();

    if (props.apiData) {
      if (props.apiData.custom) setApiData(props.apiData.custom)
      else setApiData(props.apiData.default)
    }
  })
  
  return (
    <div id="about">
      {/* 1 */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img data-aos="fade-left" src={apiData.section_2_sub_photo_1} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6" data-aos="fade-right">
            <div className="about-text">
              <h2>{apiData.section_2_sub_title_1}</h2>
              <p>{apiData ? apiData.section_2_sub_description_1 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img data-aos="fade-right" src={apiData.section_2_sub_photo_2} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text"  data-aos="fade-left">
              <h2>{apiData.section_2_sub_title_2}</h2>
              <p>{apiData ? apiData.section_2_sub_description_2 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img  data-aos="fade-left" src={apiData.section_2_sub_photo_3} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text" data-aos="fade-right">
              <h2>{apiData.section_2_sub_title_3}</h2>
              <p>{apiData ? apiData.section_2_sub_description_3 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
