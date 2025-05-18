

import React from 'react'

export default function NewsItem(props) {

  return (
    <div>
      <div className='my-3' style={{ borderRadius: "100px" }}>

        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={!(props.imageurl) ? "https://image.cnbcfm.com/api/v1/image/108139101-17460484622025-04-30t212516z_84445875_rc2g8eai3u72_rtrmadp_0_usa-trump.jpeg?v=1746048525&w=1920&h=1080" : props.imageurl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.heading}</p>
           <p className="card-text">
  <small className="text-body-secondary">
    By {props.author} at {new Date(props.publishedate).toLocaleDateString("en-GB")}
  </small>
</p>
            <a href={props.url} className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  )
}
