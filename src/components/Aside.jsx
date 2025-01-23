import React from 'react'
import { GiCalendar, GiClawSlashes, GiPhone } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box'>
                    <img src="/images/me.png" alt="" width="80" />
                </figure>
                <div className='info-content'>
                    <h1 className='name'>Prabin Dangol</h1>
                    <p className='title'>Graphics Designer and Web-developer</p>
                </div>
                <button className='info_more-btn'>
                    <span>Show Contacts</span>
                    <GiClawSlashes />
                </button>
            </div>
            {/* contact info */}
            <div className='sidebar-info_more'>
                <hr className='separator2'/>
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <GiMailbox />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Email</p>
                            <a href="mailto:dprabin23@gmail.com" className='contact-link'>dprabin23@gmail.com <br />info@dangolprabin.com.np</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <GiPhone />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Contact no.</p>
                            <a href="tel:+9779808083620" className='contact-link'>9808083620 <br /> 9765726294</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <GiCalendar />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Birthday</p>
                            <time dateTime='1996-02-19' className='contact-link'>Feb 19 1994 </time>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                        <FaLocationDot />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Address</p>
                            <address className='contact-link'>Godawari Municipality-5, lalitpur</address>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside