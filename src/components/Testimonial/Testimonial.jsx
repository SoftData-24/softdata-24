import React from 'react'

export default function Testimonial(props) {
  return (
    <div>
      {console.log(props)}
      <p>
        Hello Everyone!!
      </p>
    </div>
    // <div className="swiper-slide">
    //   <div className="swiper-client-msg">
    //     <p>{props.data.text}</p>
    //   </div>
    //   <div className="swiper-client-data grid grid-two-col ">
    //     <figure>
    //     <img loading="lazy" src={props.data.image} alt="" />
    //     </figure>
    //     <div className="client-data-details">
    //       <p>SoftData24</p>
    //       <p>Software Developer</p>
    //     </div>
    //   </div>
    // </div>
  )
}
