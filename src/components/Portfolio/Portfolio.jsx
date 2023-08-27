import React from 'react'

export default function Portfolio() {
  return (
    <section className="section-portfolio section" id="portfolio-section">
      <div className="container">
        <h2 className="common-heading">Why Choose Us</h2>
        <p>
          Our team's deep tech knowledge and expertise in empathetic user experience bring the best of both worlds to our customers business and their users.
        </p>
      </div>

      <div className="p-btns">
        <button className="btn p-btn " data-btn-num="1" >Websites</button>
        <button className="btn p-btn " data-btn-num="2" >Software </button>
        <button className="btn p-btn " data-btn-num="3" >Custom Application</button>
      </div>
      
      <div className="container grid grid-three-col portfolio-images">
        <div className="img-ovelay p-btn--1" >
          <img src="/assets/images/folio/1.jpg" loading="lazy" alt="portfolio images "  />
          <div className="overlay">
            <a href="http://charcounter.thapaonlineclass.com/" target="_blank"  className="common-heading">Project 1</a>
          </div>
        </div>

        <div className="img-ovelay p-btn--3">
          <img src="/assets/images/folio/4.jpg" loading="lazy" alt="portfolio images " />
          <div className="overlay">
            <a href="https://www.linkedin.com/company/softdata24/about/?viewAsMember=true" target="_blank"  className="common-heading">Project 2</a>
          </div>
        </div>

        <div className="img-ovelay p-btn--1">
          <img src="/assets/images/folio/3.jpg" loading="lazy" alt="portfolio images "  />
          <div className="overlay">
            <a href="" target="_blank"  className="common-heading">Project 3</a>
          </div>
        </div>
        <div className="img-ovelay p-btn--1 p-btn--2">
          <img src="/assets/images/folio/4.jpg" loading="lazy" alt="portfolio images "  />
          <div className="overlay">
            <a href="" target="_blank"  className="common-heading">Project 4</a>
          </div>
        </div>
        <div className="img-ovelay p-btn--2">
          <img src="/assets/images/folio/5.jpg" loading="lazy" alt="portfolio images "  />
          <div className="overlay">
            <a href="" target="_blank"  className="common-heading">Project 5</a>
          </div>
        </div>
        <div className="img-ovelay p-btn--1">
          <img src="/assets/images/folio/1.jpg" loading="lazy" alt="portfolio images "  />
          <div className="overlay">
            <a href="" target="_blank"  className="common-heading">Project 6</a>
          </div>
        </div>
      </div>
    </section>
  )
}
