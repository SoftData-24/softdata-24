import React from 'react'

export default function About() {
  return (
    <main id="about-top">
      <section className="section-hero section">
        <div className="container grid grid-two-col">
          <div className="section-hero-data">
            {/* <p className="hero-top-data">SD24</p> */}
            <h1 className="hero-">About Us</h1>
            <p className="hero-para">
              With a team of experienced professionals, we provide innovative solutions to meet the ever-evolving technological needs of businesses. Our expertise lies in developing cutting-edge software, implementing robust IT infrastructure, and delivering reliable IT support services. We are committed to delivering exceptional results and ensuring the success of our clients by leveraging the power of technology.
            </p>
            <div>
              <a href="https://www.linkedin.com/company/softdata24/about/?viewAsMember=true" target="_blank" className="btn hireme-btn">Learn More</a>
              <a href="https://docs.google.com/document/d/1iEks-0eAJpcKjph45d-TXTbLI244G9Z8-Gi4DeqPsxU/edit?usp=sharing" target="_blank" className="btn hireme-btn">See Our Service</a>
            </div>
          </div>

          <div className="section-hero-image">
            <img src='/assets/images/hero7.jpg' alt="hero image" className="hero-img" />
          </div>
        </div>
      </section>
    </main>
  )
}
