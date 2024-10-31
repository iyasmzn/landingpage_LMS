import React, { useEffect, useState } from "react";
import $_api  from '../utils/service'

import AOS from "aos";
import "aos/dist/aos.css";

export const Services = (props) => {
  // dataApi
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init()

    setLoading(true)
    // date now format YYYY-MM-DD
    const dateNow = new Date().toISOString().slice(0, 10);
    $_api.get('/public/tops', {
      type: 'book_borrowings',
      start_date: '2022-01-01',
      end_date: dateNow,
      limit: 6
    }).then(res => {
      if (res.students) setData(res.students)
    }).finally(() => {
      setLoading(false)
    })
    
  }, [])
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Peminjam Terbanyak</h2>
          <p>
            Daftar siswa / siswi peminjam buku terbanyak. 
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" data-aos="zoom-in" data-aos-delay={100 * i}>
                {" "}
                {
                  d.photo && d.photo.url ? 
                  <img src={d.photo.url} alt="Photo" />
                    : 
                  <i className="fa fa-user"></i>
                }
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p className="service-desc-nis">NIS: <b>{d.nis}</b></p>
                    <p><b>{d.total}</b> buku</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
