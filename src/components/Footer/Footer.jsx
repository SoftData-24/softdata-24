// export default function Footer() {
//   return (
//     <div className={classes["container"]}>Footer</div>
//   )
// }
import React from 'react'
// import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="section section-footer " >
    <div className="container grid grid-four-col">
      <div className="f-about">
        <h3>About</h3>
        <p>We at SoftData24 have a firm belief in our data and software prowess in the future. So, for us, it's not a means of business but an effort to take it to one and all and regain the lost glory of our art culture, and science, at least some if not all..</p>
      </div>

      <div className="f-links">
        <h3>Links</h3>
        <ul>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">home</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">about</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">services</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">Why Choose Us</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">contact</a></li>
        </ul>
      </div>

      <div className="f-services">
          <h3>Services</h3>
        <ul>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">Data-Driven Decision with top Data Scientists</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">Custom Application Development</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">Outsourced Product Development</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/">AI & Machine Learning Development</a></li>
          <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="/"> User Experience Design Services</a></li>
        </ul>
      </div>

      <div className="f-address"> 
        <h3>Have a Questions?</h3>
        <address>
          <div>
            <p>  <span><ion-icon name="location-outline"></ion-icon></span> Greater Noida (Uttar Pradesh) , India </p>
          </div>

          <div>
            <p>  <span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91123456789"> +91 8630684627 </a></p>
          </div>

          <div>
            <p>  <span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:test@thapa.com"> SoftData24@gmail.com</a> </p>
          </div>
        </address>
      </div>
    </div>

    <div className="container">
      <div className="f-social-icons">
        <a href="https://www.instagram.com/softdata24/" target="_blank">
          <ion-icon className="icons" name="logo-instagram"></ion-icon>
        </a>

          <a href="https://www.linkedin.com/company/softdata24/about/?viewAsMember=true" target="_blank">
          <ion-icon className="icons" name="logo-linkedin"></ion-icon>
        </a>

          <a href="https://www.facebook.com/profile.php?id=100095089817913" target="_blank">
          <ion-icon className="icons" name="logo-facebook"></ion-icon>
        </a>
      </div>

      <div className="f-credits">
        <p>Copyright ©2023 - SoftData24</p>
      </div>
    </div>

  </footer>
  )
}
