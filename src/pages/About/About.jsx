
import { useEffect, useState } from 'react';
import Service from './service'
import Testimonial from './Testimonial'
const servicesData = [
  {
    "title": "Website development",
    "icon": "/images/web.png",
    "description": "The most modern and high-quality design made at a professional level."
  },

  {
    "title": "Graphics Designing",
    "icon": "/images/graphic.svg",
    "description": "I make high-quality photos and print media of any category at a professional level."
  },
  {
    "title": "Mobile apps",
    "icon": "/images/app.jpg",
    "description": "Professional development of applications for iOS and Android."
  },
  {
    "title": "Company Renew and Registration",
    "icon": "/images/app.jpg",
    "description": "Work Related to the office of Company Registar(OCR) and IRD."
  },
]

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className='about active'>
      <header>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p>
          I'm Creative Director and UI/UX Designer from lalitpur, Nepal, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>
      {/* services */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>

      {/* <!-- - testimonials--> */}

      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section>

      {/* <!--- clients --> */}

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="images/lele logo real.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/lele-krishi.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/sport logo.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/tnmpl logo.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/venture logo.png" alt="client logo" />
            </a>
          </li>

          </ul>

      </section>


    </article>
  )
}

export default About
