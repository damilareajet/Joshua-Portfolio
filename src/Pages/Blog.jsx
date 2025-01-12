// import React from 'react'

import Brands_Marquee from "../Components/Brands_Marquee";
import Footer from "../Components/Footer";
import Logo_Slide_info from "../Components/Logo_Slide_info";
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
import Scroll_Top from "../Components/Scroll_Top";
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const Blog = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
    return (
        <div className="site_contain">
        {/* <!-- ====================================== Main Menu ===================================== --> */}
        <Navbar/>
        {/* <!-- ====================================== Main Menu End===================================== --> */}
        {/* <!-- ====================================== Blog Section One ===================================== --> */}
        <section className="section-main overflow-hidden" id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="main-text about-hello aos-init aos-animate" 
                             data-aos="fade-down"
                            >NEWS</p>
                            <h1 className="JessicaBiogi aos-init aos-animate" 
                             data-aos="fade-down"
                            >Latest Blog</h1>
                            <p className="Freelance about-freelance aos-init aos-animate " 
                             data-aos="fade-down"
                            >Metus montes facilisis nulla eros
                                nascetur accumsan nibh facilisi. Euismod amet amet pharetra turpis eleifend sed. Volutpat
                                turpis ut amet nec feugiat orci.</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
                            <img className=" blog-flower-img" src="/flower.png" alt="flower"/>
                            <img className="about-img-main aos-init aos-animate" src="/blog-main-img.png" alt="blog-main-img" 
                             data-aos="fade-left"
                            />
                            <img className="about-arrow-main" id="arrow" src="/about-arrow-main.png" alt="about-arrow-main"/>
                        </div>
                    </div>
                </div>
        </section>
        {/* <!-- ====================================== Blog Section One End ===================================== --> */}
        {/* <!-- ======================================= Blog Section Two ================================== --> */}
        <section className="section-seven overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init" 
                    data-aos="fade-up"
                    >   
                        <img className="news-img" src="/news-img1.jpg" alt="news-img1"/>
                        <p className="date-dev">APRIL 25, 2024 _ DEVELOPMENT</p>
                        <h2 className="need-blog">Does My Website Need a
                            Blog?</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init" 
                     data-aos="fade-down"
                    >
                        <img className="news-img" src="/news-img2.jpg" alt="news-img2" />
                        <p className="date-dev">APRIL 26, 2024 _ DESIGN</p>
                        <h2 className="need-blog" >Best 10 App for Digital
                            Transformation</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init " 
                 data-aos="fade-up"
                    >
                        <img className="news-img" src="/news-img3.jpg" alt="news-img3" />
                        <p className="date-dev">APRIL 28, 2024 _ MARKETING</p>
                        <h2 className="need-blog" >A Simple Social Media
                            Checklist</h2>
                        <p className="explore-me read-more-btn">
                        <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init " 
                    data-aos="fade-up"
                    >
                        <img className="news-img" src="/seo-implemnts.jpg" alt="seo-implemnts" />
                        <p className="date-dev">APRIL 25, 2024 _ DEVELOPMENT</p>
                        <h2 className="need-blog">SEO implements
                            in website</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init" 
                    data-aos="fade-down"
                    id="new-img-box-main-margin">
                        <img className="news-img" src="/digital-tools-img.jpg" alt="digital-tools-img" />
                        <p className="date-dev">APRIL 26, 2024 _ DESIGN</p>
                        <h2 className="need-blog" >You&apos;re Still Not Using
                            Digital Tools?</h2>
                        <p className="explore-me read-more-btn">
                        <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main3 aos-init fadeInUpBig" 
                    // data-aos="fade-up"
                    >
                        <img className="news-img" src="/digital-marketing-img.jpg" alt="digital-marketing-img" />
                        <p className="date-dev">APRIL 28, 2024 _ MARKETING</p>
                        <h2 className="need-blog">Digital Marketing for
                            Online Business</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog aos-init fadeInUpBig" 
                    // data-aos="fade-up"
                    >
                        <img className="news-img" src="/transforming-img.jpg" alt="transforming-img" />
                        <p className="date-dev">APRIL 25, 2024 _ DEVELOPMENT</p>
                        <h2 className="need-blog">Transforming Challenges
                            into Opportunities</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main-blog new-img-box-main5 aos-init fadeInDownBig" 
                    // data-aos="fade-down"
                    >
                        <img className="news-img" src="/effective-img.jpg" alt="effective-img" />
                        <p className="date-dev">APRIL 26, 2024 _ DESIGN</p>
                        <h2 className="need-blog" >8 Effective Inbound
                            Marketing Examples</h2>
                        <p className="explore-me read-more-btn">
                        <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main4 new-img-box-main-blog new-img-box-main5 aos-init " 
                     data-aos="fade-up"
                    >
                        <img className="news-img" src="/web-design-tool-img.jpg" alt="web-design-tool-img" />
                        <p className="date-dev">APRIL 28, 2024 _ MARKETING</p>
                        <h2 className="need-blog" >5 Web Design Tools &amp;
                            Software Apps</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 text new-img-box-main-blog new-img-box-main5 aos-init aos-animate " 
                    data-aos="fade-up"
                    >
                        <img className="news-img" src="/news-img1.jpg" alt="news-img1"/>
                        <p className="date-dev">APRIL 25, 2024 _ DEVELOPMENT</p>
                        <h2 className="need-blog">Does My Website Need a
                            Blog?</h2>
                        <p className="explore-me read-more-btn">
                        <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 text new-img-box-main-blog new-img-box-main5 aos-init aos-animate" 
                     data-aos="fade-down"
                    >
                        <img className="news-img" src="/news-img2.jpg" alt="news-img2" />
                        <p className="date-dev">APRIL 26, 2024 _ DESIGN</p>
                        <h2 className="need-blog">Best 10 App for Digital
                            Transformation</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                       <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 text new-img-box-main-blog new-img-box-main5 aos-init aos-animate" 
                    data-aos="fade-up"
                    >
                        <img className="news-img" src="/news-img3.jpg" alt="news-img3"/>
                        <p className="date-dev">APRIL 28, 2024 _ MARKETING</p>
                        <h2 className="need-blog">A Simple Social Media
                            Checklist</h2>
                        <p className="explore-me read-more-btn">
                            <Link to={'/Blog'}>READ MORE
                                <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <g>
                                        <path d="M6.66669 16H25.3334" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="load-more-btn-main" id="blog-load-more-btn">
                <button className="explore-btn hover-slide-right load-more-btn">
                    <span id="toggle">LOAD MORE
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
        </section>
        {/* <!-- ======================================= Blog Section Two End ================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section ===================================== --> */}
        <Brands_Marquee/>
        {/* <!-- =============================== Brands Marquee Section End =============================== --> */}
        {/* <!-- ====================================== Logo slide  ===================================== --> */}
        <Logo_Slide_info/>
        {/* <!-- ====================================== Logo slide End ===================================== --> */}
            {/* <!-- ====================================== Section Seven End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer/>
        {/* <!-- ====================================== Footer End ===================================== --> */}
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <Scroll_Top/>
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
    </div>
    )
}

export default Blog