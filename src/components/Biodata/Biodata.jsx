import React from 'react'

export default function Biodata() {
  return (
    <section className="section-biodata section">
    <div className="container grid grid-two-col">
      <div className="bio-image">
        <img src="/assets/images/biodata.jpg" alt="bio data image" />
      </div>
      <div className="bio-data">
        <h2 className="common-heading">What We Do</h2>
        <p>
          We at SoftData24 have a firm belief in our data and software prowess in the future. So, for us, it's not a means of business but an effort to take it to one and all and regain the lost glory of our art culture, and science, at least some if not all.
        </p>
        <br />
        <p>
          Authentic, articulated, and expertly administered 'SoftData24' should be the ultimate destination for every software and data-curious person; this is what we dream of and work hard for.
        </p>

        <div className="bio-data-stats">
          <div className="bio-stats">
            <h3>Design</h3>
            <div className="bio-progress-bar">
              <span>80%</span>
            </div>
          </div>
          <div className="bio-stats">
            <h3>HTML</h3>
            <div className="bio-progress-bar bio-progress-2">
              <span>99%</span>
            </div>
          </div>
          <div className="bio-stats">
            <h3>CSS</h3>
            <div className="bio-progress-bar bio-progress-3">
              <span>90%</span>
            </div>
          </div>
          <div className="bio-stats">
            <h3>JavaScript</h3>
            <div className="bio-progress-bar bio-progress-4">
              <span>85%</span>
            </div>
          </div>
          <div className="bio-stats">
            <h3>MERN</h3>
            <div className="bio-progress-bar bio-progress-5">
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className="bio-data-btn">
          <a href="https://docs.google.com/document/d/15h4wv5kbOcoGciCRAWBUdynGEP6aOJALyVMkfQQ9Nr4/edit" className="btn" download> Downlaod Pdf </a>
        </div>
      </div>
    </div>
  </section>
  )
}
