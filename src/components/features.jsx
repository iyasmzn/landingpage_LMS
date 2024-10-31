import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

// import api
import $_api from "../utils/service"

import AOS from "aos";
import "aos/dist/aos.css";

// swiper
function SwiperComponent({data}) {
  return (<Swiper
    modules={[Pagination, Navigation, Autoplay]}
    spaceBetween={10}
    slidesPerView={4}
    breakpoints={{
    0: {
      // width: 768,
      slidesPerView: 2,
    },
    768: {
      // width: 768,
      slidesPerView: 3,
    },
      1024: {
      slidesPerView: 4,
    },
  }}
    autoplay
    pagination={{ clickable: true, dynamicBullets: true }}
    navigation={true}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className="my-swiper"
  >
    <div>
      {data
        ? data.map((d, i) => (
            <SwiperSlide key={`${d.title}-${i}`} className="swiper-card">
              <SwiperImage data={d.book_photos} />
              <div className="swiper-badge">
                <i className="fa fa-bookmark"></i>
                <b>{d.borrowed_record}</b>X
              </div>
              <h3>{d.title}</h3>
              <p>{d.book_publisher ? d.book_publisher.name :''}</p>
            </SwiperSlide>
          ))
        : "Loading..."}
    </div>
    </Swiper>)
}

// swiper image
function SwiperImage({ data }) {
  if (!data.length) {
    return (
      <div className="swiper-image-wrapper">
        <i className="no-image fa fa-book"></i>
      </div>
    )
  } else if (data.length) {
    return (
      <div className="swiper-image-wrapper">
        <img className="swiper-image" src={data[0].file.url} alt={'Foto Buku'} />
      </div>
    )
  }
}


export const Features = (props) => {
  const [data, setData] = useState([]);
  // call api when mounted
  useEffect(() => {
    AOS.init();
    // call api here
    $_api.get('public/featured-books', {
      limit: 20
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log('get Featured Books error', err)
      })
  }, []);
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="mb-5" data-aos="fade-up">Popular Books</h2>
          <div className="my-swiper-wrapper" data-aos="fade-up">

          {data.length
            ? 
            <SwiperComponent data={data} />
            : "No Data Featured Book"}
          </div>
        </div>
      </div>
    </div>
  );
};
