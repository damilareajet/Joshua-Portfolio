// import React from 'react'
import { Link } from "react-router-dom";
import  { useState } from 'react';
import Navbar from "../Components/Navbar"
import Branding_Marquee from "../Components/Branding_Marquee";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Scroll_Top from "../Components/Scroll_Top";
import Logo_Slide_info from "../Components/Logo_Slide_info";
import Number_Count from "../Components/Number_Count";
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const About = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
    const [selectedSection, setSelectedSection] = useState(null);

    const handleClick = (section) => {
      setSelectedSection(selectedSection === section ? null : section);
    };
  
  return (
    <div className="site_contain">
        {/* <!-- ====================================== Main Menu ===================================== --> */}
        <Navbar/>
        {/* <!-- ====================================== Main Menu End===================================== --> */}
        {/* <!-- ====================================== About Section One ===================================== --> */}
        <section className="section-main overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <p className="main-text about-hello aos-init aos-animate" 
                        data-aos="fade-down"
                        >Hello, I am <span>👋</span></p>
                        <h1 className="JessicaBiogi aos-init aos-animate " 
                        data-aos="fade-down"
                        >Ogiriosa Joshua</h1>
                        <p className="Freelance about-freelance aos-init aos-animate" 
                        data-aos="fade-down"
                        >A <span>Web and App Developer based in Nigeria</span>. I strives to build immersive and beautiful web
                            applications through carefully crafted used-centric design.</p>
                        <div className="c">
                            <a href="\File\MyCv.docx" className="explore-btn hover-slide-right download-cv-about">
                                <span>DOWNLOAD CV
                                    <svg className="expo-arrow2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clipPath="url(#clip0_158_583)">
                                            <path d="M5.33337 22.6667V25.3333C5.33337 26.0406 5.61433 26.7189 6.11442 27.219C6.61452 27.7191 7.2928 28 8.00004 28H24C24.7073 28 25.3856 27.7191 25.8857 27.219C26.3858 26.7189 26.6667 26.0406 26.6667 25.3333V22.6667" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M9.33337 14.6667L16 21.3333L22.6667 14.6667" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M16 5.33333V21.3333" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_158_583">
                                                <rect width="32" height="32" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                </span>
                            </a>
                            <p className="explore-me about-contact-btn aos-init aos-animate"
                               data-aos="fade-right"
                              >
                                <Link to={'/Contact'}>CONTACT ME
                                    <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g>
                                            <path d="M6.66669 16H25.3334" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M20 21.3333L25.3333 16" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M20 10.6666L25.3333 16" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec" id="main">
                        <img className="about-flower-img" src="/flower.png" alt="flower"/>
                        <img className="about-img-main aos-init aos-animate" src="/about-img-main.png" alt="about-img-main " 
                        data-aos="fade-left"
                        />
                        <img className="about-arrow-main" id="arrow" src="/about-arrow-main.png" alt="about-arrow-main"/>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== About Section OnEnd====================================--> */}
        {/* <!-- ====================================== About Section Two ===================================== --> */}
        <section className="about-section-two overflow-hidden">
            <div className="container">
                <div className="award-circle-main aos-init" 
                 data-aos="zoom-in"
                >
                    <div className="award-circle">
                        <img src="/trophy.png" alt="trophy"/>
                    </div>
                    <div>
                        <h2 className="independent">Independent Of The Year</h2>
                        <p className="annual">Annual Awards 2024</p>
                    </div>
                </div>
                <h3 className="self-taught aos-init"
                 data-aos="fade-up"
                    >
                    <span>I&apos;m Joshua</span> - a self though &amp; self learned developer <span>based in NIGERIA</span>. I started
                    as a financial planner &amp; social media marketer, but now I do mix of everything from <span>Product
                        Design, Photography, Web Design </span>&amp; <span>Graphic Design.</span>
                </h3>
                <p className="odio aos-init "
                  data-aos="fade-up"
                    >Award-winning design director and design expert
                    with 6 years of experience in design and management. I am a mom to a beautiful 2 y.o. daughter who
                    already loves attending business meetings with me. Also, a big part of my life is Netrix - a design
                    creator behind this blog, artistic aesthetics into her healthy meals and making her recipes into
                    artwork. She has always nurtured an interest in healthy eating and loves creating meals that are
                    good for her body while being creative with simple ingredients. The creator behind this blog, enjoys
                    incorporating her and making her recipes into artwork. She has always nurtured an interest in
                    healthy eating and loves creating meals.
                </p>
            </div>
        </section>
        {/* <!-- ====================================== About Section Two End ===================================== --> */}
        {/* <!-- ====================================== About Section Counter ===================================== --> */}
        <Number_Count/>
        {/* <!-- ====================================== About Section Counter End ===================================== --> */}
        {/* <!-- ====================================== About Section Three ===================================== --> */}
        <section className="section-three overflow-hidden" id="explore-me">
      <div className="container">
        <div className="row services-section">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <p className="our-services aos-init" data-aos="fade-right">PERSONAL INFO</p>
            <h2 className="our-solution aos-init " data-aos="fade-right">Explore Me.</h2>
            <p className="uran odio aos-init " data-aos="fade-right">
              Urna neque sollicitudin odio tempus eleifend est.
              Vestibulum dictum turpis diam arcu rutrum interdum aliquet iaculis.
            </p>
            <div className="services-circle-main" data-aos="fade-right">
              <div className="view-work-circle btn btn1 aos-init" id="circle1">
                <Link to={'/Portfolio'} className="a1">VIEW MY WORK</Link>
              </div>
              <div className="contact-circle aos-init " data-aos="fade-left"> 
                <div className="view-work-circle btn btn2">
                  <Link to={'/Contact'}>CONTACT ME</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div id="faq-sec">
              {['Education', 'Experience', 'My Expertise', 'Design Systems'].map((section, index) => (
                <div
                  key={index}
                  className={`nested-accordion aos-init  ${selectedSection === section ? 'selected' : ''}`}
                  onClick={() => handleClick(section)}
                   data-aos="fade-up"
                >
                  <h3 className={`boder-top ${selectedSection === section ? 'open' : ''}`}>{section}</h3>
                  {selectedSection === section && (
                    <div className="comment">
                      Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque.
                      <div className="education position-relative">
                        <div className="side_circle_ring">
                          <div className="small_yellow_border">
                            <div className="small_yellow_circle"></div>
                          </div>
                        </div>
                        <div className="small_yellow_border_main">
                          <p className="bachelor">Bachelor of Science in Information Technology</p>
                          <p className="university">Cambridge University / 2010 - 2014</p>
                          <p className="cursus">Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor, laoreet varius et. Sed ut egestas vitae dolor nulla non Ullamcorper amet nibh.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* <!-- ====================================== About Section Three End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <Branding_Marquee/>
        {/* <!-- ====================================== User Branding Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== About Section Four ===================================== --> */}
        <section className="section-awards overflow-hidden">
            <div className="container">
                <p className="our-services about-awards aos-init" 
                data-aos="fade-up"
                >AWARDS</p>
                <h2 className="our-solution award-achievement aos-init " 
                data-aos="fade-up"
                >Achievement.</h2>
                <div className="row awards-row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box-item aos-init" 
                        data-aos="flip-up"
                        >
                            <div className="flip-box">
                                <div className="flip-box-front">
                                    <div className="inner">
                                        <p className="award-yer">2025</p>
                                        <img className="winner-award" src="/winner-award.png" alt="winner-award4"/>
                                        <p className="award-interior">Awwwards Interior</p>
                                        <p className="award-winner-text">Winner</p>
                                    </div>
                                </div>
                                <div className="flip-box-back">
                                    <div className="inner">
                                        <p className="flip-back-text">Lorem ipsum dolor sit amet consectetur, adipisicing
                                            elit. Sit, perferendis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box-item aos-init" 
                         data-aos="flip-up"
                        >
                            <div className="flip-box">
                                <div className="flip-box-front">
                                    <div className="inner">
                                        <p className="award-yer">2024</p>
                                        <img className="winner-award" src="/winner-award2.png" alt="winner-award2"/>
                                        <p className="award-interior">The Webby Awards</p>
                                        <p className="award-winner-text">Nominee</p>
                                    </div>
                                </div>
                                <div className="flip-box-back">
                                    <div className="inner">
                                        <p className="flip-back-text">Lorem ipsum dolor sit amet consectetur, adipisicing
                                            elit. Sit, perferendis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box-item aos-init" 
                         data-aos="flip-up"
                        >
                            <div className="flip-box">
                                <div className="flip-box-front">
                                    <div className="inner">
                                        <p className="award-yer">2023</p>
                                        <img className="winner-award" src="/winner-award3.png" alt="winner-award3"/>
                                        <p className="award-interior">EWA Design</p>
                                        <p className="award-winner-text">Winner</p>
                                    </div>
                                </div>
                                <div className="flip-box-back">
                                    <div className="inner">
                                        <p className="flip-back-text">Lorem ipsum dolor sit amet consectetur, adipisicing
                                            elit. Sit, perferendis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="box-item aos-init" 
                         data-aos="flip-up"
                        >
                            <div className="flip-box">
                                <div className="flip-box-front">
                                    <div className="inner">
                                        <p className="award-yer">2022</p>
                                        <img className="winner-award" src="/winner-award4.png" alt="winner-award4"/>
                                        <p className="award-interior">BEST Star</p>
                                        <p className="award-winner-text">Winner</p>
                                    </div>
                                </div>
                                <div className="flip-box-back">
                                    <div className="inner">
                                        <p className="flip-back-text">Lorem ipsum dolor sit amet consectetur, adipisicing
                                            elit. Sit, perferendis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== About Section Four End ===================================== --> */}
        {/* <!-- ====================================== Testimonial End  ===================================== --> */}
        <Testimonial/>
        {/* <!-- ======================================= Testimonial End ================================== --> */}
        {/* <!-- ====================================== Logo slide  ===================================== --> */}
        <Logo_Slide_info/>
        {/* <!-- ====================================== Logo slide End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer/>
        {/* <!-- ====================================== Footer End ===================================== --> */}
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <Scroll_Top/>
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}

    </div>
  )
}

export default About