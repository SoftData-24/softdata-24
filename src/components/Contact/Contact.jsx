import React from 'react'

export default function Contact() {
  return (
    <section className="section section-contact ">
    <div className="container" id="contact-top">
      <h2 className="common-heading">contact us</h2>
    </div>

    <div className="section-contact-main contact-container">
      <form action="https://formspree.io/f/mleyjylq" method="POST">
        <div className="grid grid-two-col">
          <input type="text" name="username" id="" required placeholder="Name" />
          <input type="email" name="email" required placeholder="Email" autoComplete="false" />
        </div>
        <div>
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div>
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <div>
          <input type="submit" value="send message" className="btn" />
        </div>
      </form>
    </div>
  </section>
  )
}
