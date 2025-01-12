// import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from "../Components/Navbar"
import Brands_Marquee from "../Components/Brands_Marquee";
import Branding_Marquee from "../Components/Branding_Marquee";
import Latest_Projects from "../Components/Latest_Projects";
import Logo_Slide_info from "../Components/Logo_Slide_info";
import Footer from "../Components/Footer";
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const Service = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
    const [activeSection, setActiveSection] = useState(null);

    // Function to handle section click
    const handleSectionClick = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

   return (
    <div className="site_contain">
        {/* <!-- ====================================== Main Menu ===================================== --> */}
        <Navbar/>
        {/* <!-- ====================================== Main Menu End===================================== --> */}
        {/* <!-- ====================================== Services Section One ===================================== --> */}
        <section className="section-main overflow-hidden" id="main">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <p className="main-text about-hello aos-init aos-animate " 
                        data-aos="fade-down"
                        >Experienced Freelancer</p>
                        <h1 className="JessicaBiogi aos-init aos-animate " 
                        data-aos="fade-down"
                        >My Services</h1>
                        <h2 className="d-none">hidden</h2>
                        <p className="Freelance about-freelance aos-init aos-animate " 
                        data-aos="fade-down"
                        >Metus montes facilisis nulla eros
                            nascetur accumsan nibh facilisi. Euismod amet amet pharetra turpis eleifend sed. Volutpat
                            turpis ut amet nec feugiat orci.</p>
                        <div className="about-main-buttons">
                            <Link to={'/Service'} className="explore-btn hover-slide-right explore-services">
                                <span>EXPLORE SERVICES
                                    <svg className="expo-arrow2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clipPath="url(#clip0_191_463)">
                                            <path d="M10.6667 21.3333L13.3334 13.3333L21.3334 10.6667L18.6667 18.6667L10.6667 21.3333Z" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M16 4V6.66667" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M16 25.3333V28" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M4 16H6.66667" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M25.3333 16H27.9999" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_191_463">
                                                <rect width="32" height="32" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                </span>
                            </Link>
                            <p className="explore-me about-contact-btn aos-init" 
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
                    <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
                        <img className="about-flower-img" src="/flower.png" alt="flower"/>
                        <img className="about-img-main aos-init aos-animate" src="/services-main-img.png" alt="services-main-img" 
                        data-aos="fade-left"
                        />
                        <img className="about-arrow-main service-about-arrow-main" id="arrow" src="/about-arrow-main.png" alt="about-arrow-main" />
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== Services Section One End===================================== --> */}
        {/* <!-- ====================================== User Brands Marquee Section ===================================== --> */}
        <Brands_Marquee/>
        {/* <!-- ====================================== User Brands Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Services Section Two ===================================== --> */}
        <section className="section-three overflow-hidden">
            <div className="container">
                <div className="row services-section">
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <p className="our-services aos-init fadeInUpBig">PERSONAL INFO</p>
                        <h2 className="our-solution aos-init fadeInUpBig">Explore Me.</h2>
                        <p className="uran odio aos-init fadeInUpBig">
                            Urna neque sollicitudin odio tempus eleifend est. Vestibulum dictum turpis diam arcu rutrum interdum aliquet iaculis.
                        </p>
                        <div className="services-circle-main">
                            <div className="view-work-circle btn btn1 aos-init zoomInRight" id="circle1">
                                <Link to={'/Portfolio'} className="a1">VIEW MY WORK</Link>
                            </div>
                            <div className="contact-circle aos-init zoomInLeft">
                                <div className="view-work-circle btn btn2">
                                    <Link to={'/Contact'}>CONTACT ME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                        <div id="faq-sec" className="position-relative">
                            {[
                                { id: 'section1', title: 'UI/UX Experience', imgSrc: '/hover-img1.png', content: 'Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique.' },
                                { id: 'section2', title: 'Web Development', imgSrc: '/hover-img2.png', content: 'Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique.' },
                                { id: 'section3', title: 'Digital Marketing', imgSrc: '/hover-img3.png', content: 'Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst.' },
                                { id: 'section4', title: 'Product Design', imgSrc: '/hover-img4.png', content: 'Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst.' },
                                { id: 'section5', title: 'Branding & Illustration', imgSrc: '/hover-img5.png', content: 'Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique.' },
                                { id: 'section6', title: 'Mobile Solutions', imgSrc: '/hover-img6.png', content: 'Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst.' }
                            ].map(section => (
                                <div key={section.id} className="beautician-service__area-item has_fade_anim">
                                    <div className={`nested-accordion aos-init fadeInUpBig ${activeSection === section.id ? 'active' : ''}`}>
                                        <h3
                                            className={`boder-top ${activeSection === section.id ? 'active' : ''}`}
                                            onClick={() => handleSectionClick(section.id)}
                                        >
                                            {section.title}
                                        </h3>
                                        <div style={{ display: activeSection === section.id ? 'block' : 'none' }} className="comment">
                                            {section.content}
                                        </div>
                                        <img className="artist__exhibition-thumb" src={section.imgSrc} alt={section.title}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== Services Section Two End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <Branding_Marquee/>
        {/* <!-- ====================================== User Branding Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Latest Projects ===================================== --> */}
        <Latest_Projects/>
        {/* <!-- ====================================== Latest Projects End ===================================== --> */}
        {/* <!-- ====================================== Logo slide  ===================================== --> */}
        <Logo_Slide_info/>
        {/* <!-- ====================================== Logo slide End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer/>
        {/* <!-- ====================================== Footer End ===================================== --> */}
    </div>
    )
}

export default Service