import React, { useEffect, useState } from "react";
import $_api  from '../utils/service'

export const Testimonials = (props) => {
  // dataApi
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Peminjam Buku Terbanyak</h2>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      {d.photo ? 
                        <img src={d.photo.url} alt="Photo" />
                        :
                        <div className="testimonial-avatar">
                          <i className="fa fa-user"></i>
                        </div>
                      }
                      {" "}
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-name">{d.name}</p>
                      <p className="testimonial-nis">NIS: <b>{d.nis}</b></p>
                      <p><b>{d.total}</b>x peminjaman buku</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
