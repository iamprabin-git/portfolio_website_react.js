import React from 'react'
const Contact = () => {
    return (
      <section className="contact" data-page="contact">
  
        <header>
          <h2 className="h2 article-title">Contact </h2>
        </header>
  
        <section className="mapbox" data-mapbox>
          <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56594.0501516355!2d85.29001853136087!3d27.558533524367455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb14212a8436db%3A0x9e0805ab0f1be891!2sLele%2044700!5e0!3m2!1sen!2snp!4v1737595435015!5m2!1sen!2snp" width="600" height="450" loading="lazy" title="Google Map"></iframe>
          </figure>
        </section>
  
        <section className="contact-form">
  
          <h3 className="h3 form-title">Contact Form</h3>
  
          <form action="#" className="form" data-form>
  
            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
  
              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>
  
            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
  
            <button className="form-btn" type="submit" data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
  
          </form>
  
        </section>
  
      </section>
    );
  };
  
  export default Contact;