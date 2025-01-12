// import React from 'react'
import Footer from "../Components/Footer";
import Logo_Slide_info from "../Components/Logo_Slide_info";
import Navbar from "../Components/Navbar"
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";
const Contact = () => {
    const [state, handleSubmit] = useForm("xeojeopv");
    if (state.succeeded) {
        return <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. I appreciate you taking the time to reach out. I&lsquo;ll get back to you as soon as possible.
          </p>
          <Link to="/" className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>;
    }
    return (
    <div className="site_contain">
        {/* <!-- ====================================== Main Menu ===================================== --> */}
        <Navbar/>
        {/* <!-- ====================================== Main Menu End===================================== --> */}
        {/* <!-- ====================================== Contact Section One ===================================== --> */}
        <section className="Contact-main contact-section-main overflow-hidden" id="section-main-id">
            <div className="container">
                <p className="main-text my-services aos-init aos-animate fadeInDownBig" 
                // data-aos="fade-down"
                >CONTACT ME</p>
                <h1 className="ui-ux aos-init aos-animate fadeInDownBig" 
                // data-aos="fade-down"
                >Let&apos;s make something awesome together!</h1>
            </div>
        </section>
        {/* <!-- ====================================== Contact Section One End===================================== --> */}
        {/* <!-- ====================================== Contact Section two ===================================== --> */}
        <section className="section-two-my-services Contact-main pb-24">
            <div  className="container" id="form-conatiner">
                <div className=" sm:flex sm:flex-wrap mr-3    block" id="form">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 ">
                        <form className="form-main" onSubmit={handleSubmit}>
                            <div className="form-main-sub">
                                <div className="input-main-form">
                                    <p className="name">Name:</p>
                                    <input type="text" 
                                    name="name" 
                                    id="name"
                                    placeholder="Your name" 
                                    autoComplete="off" 
                                    data-has-listeners="true"/>
                                    <ValidationError  className=" text-red-500"
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="input-main-form">
                                    <p className="name">Email:</p>
                                    <input id="email"
                                    type="email" 
                                    name="email"
                                    placeholder="Your email" 
                                    autoComplete="off" 
                                    data-has-listeners="true"/>
                                    <ValidationError  className=" text-red-500"
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className="form-main-sub">
                                <div className="input-main-form">
                                    <p className="name">Phone:</p>
                                    <input type="text" 
                                    id="number"
                                    name="number" 
                                    placeholder="Your phone" 
                                    autoComplete="off" 
                                    data-has-listeners="true"/>
                                    <ValidationError className="text-red-500"
                                        prefix="Number" 
                                        field="number"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="input-main-form">
                                    <p className="name">Subject:</p>
                                    <input type="text" 
                                    name="subject" 
                                    id="subject"
                                    placeholder="Your subject" 
                                    autoComplete="off" 
                                    data-has-listeners="true"/>
                                    <ValidationError  className=" text-red-500"
                                        prefix="Subject" 
                                        field="subject"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className="input-main-form">
                                <p className="name">Message:</p>
                                <textarea 
                                id="message"
                                name="message"
                                placeholder="Type your message..." 
                                data-has-listeners="true"></textarea>
                                <ValidationError  className=" text-red-500"
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                    />
                            </div>
                            <div className="form-submit-btn-main">
                                <button className="explore-btn hover-slide-right form-submit-btn" type="submit" disabled={state.submitting}>
                                    <span id="toggle">SUBMIT
                                        <svg className="expo-arrow2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <g>
                                                <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden sm:pl-5 pl-0 ">
                        <div className="get-touch-box-main">
                            <h2>Get In Touch</h2>
                            <p className="well">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequatur numquam blanditiis fugit beatae. Dicta!</p>
                            <div className="contact-footer contact-footer2">
                                <img src="/phone_svg.svg" alt="phone_svg"/>
                                <a href="tel:+2349076052317">+234 907 605 2317</a>
                            </div>
                            <div className="contact-footer contact-footer2">
                                <img src="/email_svg.svg" alt="email_svg"/>
                                <a href="mailto:Ogiriosajoshua@gmail.com">Ogiriosajoshua@gmail.com</a>
                            </div>
                            <div className="contact-footer contact-footer2">
                                <img src="/location_svg.svg" alt="location_svg"/>
                                <p>140, Obafemi Awolowo Way, Radio Bus Stop, Ikorodu, Lagos State, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== Contact Section Two End===================================== --> */}
        {/* <!-- ====================================== Logo slide  ===================================== --> */}
        <Logo_Slide_info/>
        {/* <!-- ====================================== Logo slide End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer/>
        {/* <!-- ====================================== Footer End ===================================== --> */}
    </div>
    )
}

export default Contact