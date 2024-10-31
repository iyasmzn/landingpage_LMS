import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import $_api from "./utils/service"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [lpData, setLpData] = useState(null)
  useEffect(() => {
    initData();
  }, []);

  async function initData() {
    try {
      setLandingPageData(JsonData)
      const res = await $_api.get('/public/landing-page')
      console.log('res', res)
      if (res) {
        if (res.data && res.data.custom) {
          setLpData(res.data.custom)
        } else {
          setLpData(res.data.default)
        }
      }
      setLandingPageData({
        ...JsonData,
        Header: {
          title: res && res.data.custom ? (res.data.custom.title_1 + res.data.custom.title_2 + ' ' + res.data.custom.title_3) : 'Nuris'
        },
        Api: res ? res.data : {}
      });
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div>
      <Navigation data={landingPageData.Header} apiData={landingPageData.Api} />
      {
        lpData ?
        <Header data={landingPageData.Header} apiData={landingPageData.Api} lpData={lpData} />
          : null
      }
      <Features data={landingPageData.Features} apiData={landingPageData.Api} />
      <About data={landingPageData.About} apiData={landingPageData.Api} />
      <Services data={landingPageData.Services} apiData={landingPageData.Api} />
      {/* <Gallery data={landingPageData.Gallery} apiData={landingPageData.Api} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} apiData={landingPageData.Api} /> */}
      {/* <Team data={landingPageData.Team} apiData={landingPageData.Api} /> */}
      <Contact data={landingPageData.Contact} apiData={landingPageData.Api} />
    </div>
  );
};

export default App;
