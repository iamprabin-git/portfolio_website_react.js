import React from 'react'
import { FaBookReader, FaRegBookmark } from 'react-icons/fa';
import TimelineItem from './TimelineItem';
import SkillItem from './Skillitem';

const Resume = () => {
    return (
      <section>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
  
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            <TimelineItem
              title="Bachleor Level"
              date="2017 — 2019 AD"
              description="Tribhuwan University From Namuna Machhindra Campus,lagankhel, Lalitpur"
            />
            <TimelineItem
              title="Higher Secondary Level"
              date="2011 — 2012 AD"
              description="Higher secondary Examination Board From Shree Bajrabarahi Higher Secondary School,Chapagaon, Lalitpur"
            />
            <TimelineItem
              title="School Level"
              date="2010 AD"
              description="Government of Nepal from Shree Saraswati Higher Secondary School,lele, Lalitpur"
            />
          </ol>
        </div>
  
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaRegBookmark />
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            <TimelineItem
              title="Company Registration and renew"
              date="2022 — Present"
              description="Registration and Renew the private limited company in OCR and IRD."
            />
            <TimelineItem
              title="Graphics Designing"
              date="2023 — present"
              description="Design Brochure, flyer, logo and other print media"
            />
            <TimelineItem
              title="Web designer"
              date="2023 — present"
              description="Develop websites by using Wordpress, MERN and Python."
            />
          </ol>
        </div>
  
        <div className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <SkillItem title="Web design" value={80} />
            <SkillItem title="Graphic design" value={80} />
            <SkillItem title="Branding" value={90} />
            <SkillItem title="WordPress" value={90} />
          </ul>
        </div>
      </section>
    );
  };
  
  export default Resume;