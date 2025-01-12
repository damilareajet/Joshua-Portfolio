// import React from 'react'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import  { useRef } from 'react';
import Scroll_Top from "./Scroll_Top";
import {  BsGithub, BsInstagram, BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import Branding_Marquee from "./Branding_Marquee";
import Testimonial from "./Testimonial";
import Brands_Marquee from "./Brands_Marquee";
import Latest_Projects from "./Latest_Projects";
import  { useState, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

// Counter
// eslint-disable-next-line react/prop-types
const Counter = ({ start, end }) => {
const [count, setCount] = useState(start);

useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const step = Math.ceil((end - start) / (duration / 16)); // Number of steps

    const timer = setInterval(() => {
    const newCount = count + step;
    if (newCount < end) {
        setCount(newCount);
    } else {
        setCount(end);
        clearInterval(timer);
    }
    }, 16); // 60 frames per second

    return () => clearInterval(timer);
}, [count, end, start]);

return <h3 className="count count2">{count}</h3>;
};
// ToggleAccordion
// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    
return (
    <div className={`nested-accordion ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
    <h3 className={`boder-top ${isOpen ? 'selected' : ''}`}>{title}</h3>
    {isOpen && <div className="comment">{children}</div>}
    </div>
);
};
const Header = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
    const sectionRef = useRef(null);

    const scrollToBottom = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
};
    return (
        <div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-main overflow-hidden" id="main">
            <div className="section-main-sub position-relative">
                <div className="media-main">
                    <img src="/media-line-top.svg" alt="media-line-top" />
                    <div>
                        <Link to={'https://Github.com'}>
                            <BsGithub className="icon" width="20" height="20" fill="white" />
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://Whatsapp.com'}>
                            <BsWhatsapp className="icon" width="20" height="20" fill="white" />
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://Instagram.com'}>
                            <BsInstagram className="icon" width="20" height="20" fill="white" />
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://Telegram.com'}>
                            <BsTelegram className="icon" width="20" height="20" fill="white" />
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://Youtube.com'}>
                            <BsYoutube className="icon" width="20" height="20" fill="white" />
                        </Link>
                    </div>
                    <img src="/media-line-bottom.svg" alt="media-line-bottom" />
                </div>
                <div className="container2 position-relative overflow-hidden">
                    <p className="main-text aos-init aos-animat" data-aos="fade-down">Hello, I am <span>👋</span></p>
                    <h1><mark>Web</mark> Developer.</h1>
                    <div className="home-girl-img-main">
                        <div className="position-relative">
                            <div className="JessicaBiogi-main aos-init aos-animate " data-aos="fade-down">
                                <div className="position-relative positive_translate" id="JessicaBiogi_main">
                                    <img className="JessicaBiogi-svg" src="/Polygon-arrow.svg" alt="Polygon-arrow" />
                                    <p className="jessica-biogi">Joshua</p>
                                </div>
                            </div>
                            <img className="home-girl-img aos-init aos-animate" src="/girl.png" alt="boy" data-aos="fade-up" />
                            <img className="arrow-main" id="arrow" src="/arrow-main.png" alt="arrow-main" />
                            <div id="worked_box worked_box_translate">
                                <div className="worked-box aos-init"
                                    data-aos="fade-right"
                                >
                                    <p className="worked-more">Worked with more than 20 people</p>
                                    <div className="client-img-main position-relative">
                                        <img className="client-img client-img1" src="\clients-img1.jpg" alt="clients-img1" />
                                        <img className="client-img client-img2" src="\clients-img2.jpg" alt="clients-img2" />
                                        <img className="client-img client-img3" src="\clients-img3.jpg" alt="clients-img3" />
                                        <img className="client-img client-img4" src="\clients-img4.jpg" alt="clients-img4" />
                                        <p className="worked-more worked-more2">20+ Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-main-right-contain overflow-hidden">
                    <div className="section-main-right-contain-sub aos-init aos-animate " data-aos="fade-left">
                        <h2 className="total-project">50+</h2>
                        <p className="project-complted">PROJECT COMPLETED</p>
                    </div>
                    <div className="flower-box aos-init aos-animate " data-aos="fade-left">
                        <img className="flower" src="/flower.png" alt="flower" />
                        <h2 className="Freelance">A <span>Web and App Developer based in Nigeria.</span> I
                            strives to build immersive and beautiful web and App applications through carefully crafted
                            used-centric design.</h2>
                    </div>
                    <div className="mouse-scroll-box">
                        <div className="mouse-main" onClick={scrollToBottom}>
                            <div className="mouse">
                                <svg className="mouse-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 40" fill="none">
                                    <g clipPath="url(#clip0_37_162)">
                                        <path d="M12 5L12 35" stroke="#FFDB59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M16 31L12 35" stroke="#FFDB59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8 31L12 35" stroke="#FFDB59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_37_162">
                                            <rect width="24" height="40" fill="white"></rect>
                                        </clippath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className="scroll-down">SCROLL DOWN</h2>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* <!-- ====================================== Section One End ===================================== --> */}
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section className="section-two overflow-hidden" id="section-two">
                <div className="container">
                    <div className="row section-two-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative section-two-col-one aos-init" data-aos="fade-up" >
                            <img className="girl-img2 aos-init " src="\girl-img2.png" alt="girl-img2" data-aos="fade-left" />
                            <div className="hwlo">
                                <img className="years-img" src="\years-img.png" alt="years-img"/>
                                <div className="digit">5</div>
                                <div className="circle-text">YEARS OF<br/> WORKING EXPERICE</div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="award-circle-main aos-init " data-aos="zoom-in" > 
                                <div className="award-circle">
                                    <img src="\trophy.png" alt="trophy"/>
                                </div>
                                <div className="">
                                    <h3 className="independent">Independent Of The Year</h3>
                                    <p className="annual">Annual Awards 2024</p>
                                </div>
                            </div>
                                <h3 className="self-taught aos-init"  data-aos="fade-up">
                                    Hello! I’m <span>Joshua</span> a self-taught &amp;
                                    award-winning<span> Web &amp; App Developer</span> with over <span>Five years of work
                                        experience</span>. I started in my children’s room and got pro at renowned <span>Ren
                                        Tech</span> Agencies.
                                    </h3>
                                <p className="odio aos-init "
                                data-aos="fade-up"
                                >Urna neque sollicitudin odio tempus eleifend est. Vestibulum
                                    dictum turpis diam arcu rutrum interdum aliquet iaculis.
                                </p>
                            <p className="explore-me aos-init " 
                            data-aos="fade-right"
                            >
                            <Link  to={'/About'}>EXPLORE ME
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
            </section>
            {/* <!-- ====================================== Section Two End ===================================== --> */}
            {/* <!-- ====================================== Brands Marquee Section ===================================== --> */}
            <Brands_Marquee/>
            {/* <!-- =============================== Brands Marquee Section End =============================== --> */}
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three overflow-hidden">
                <div className="container">
                    <div className="row services-section">
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <p className="our-services">OUR SERVICES</p>
                        <h2 className="our-solution">Solution We Provide.</h2>
                        <p className="uran odio">Urna neque sollicitudin odio tempus eleifend est. Vestibulum dictum turpis diam arcu rutrum interdum aliquet iaculis.</p>
                        <div className="services-circle-main">
                        <div className="view-work-circle btn btn1">
                            <Link to={'/Portfolio'} className="a1">VIEW MY WORK</Link>
                        </div>
                        <div className="contact-circle">
                            <div className="view-work-circle btn btn2">
                            <Link to={'/Contact'}>CONTACT ME</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                        <div id="faq-sec">
                        <AccordionItem title="Visual Design">
                            <p>Project systematization is something I place a lot of emphasis on. My passion Design Systems.</p>
                            <ul className="accor-list">
                            <li>Interface Design</li>
                            <li>Creating Design Systems</li>
                            <li>UI Kits</li>
                            <li>User Experience Development</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="Design Systems">
                            <p>Project systematization is something I place a lot of emphasis on. My passion Design Systems.</p>
                            <ul className="accor-list">
                            <li>Interface Design</li>
                            <li>Creating Design Systems</li>
                            <li>UI Kits</li>
                            <li>User Experience Development</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="Web & App Development">
                            <p>Project systematization is something I place a lot of emphasis on. My passion Design Systems.</p>
                            <ul className="accor-list">
                            <li>Interface Design</li>
                            <li>Creating Design Systems</li>
                            <li>UI Kits</li>
                            <li>User Experience Development</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="More Design Systems">
                            <p>Project systematization is something I place a lot of emphasis on. My passion Design Systems.</p>
                            <ul className="accor-list">
                            <li>Interface Design</li>
                            <li>Creating Design Systems</li>
                            <li>UI Kits</li>
                            <li>User Experience Development</li>
                            </ul>
                        </AccordionItem>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Three End===================================== --> */}
            {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
            <Branding_Marquee/>
            {/* <!-- ====================================== User Branding Marquee Section End ===================================== --> */}
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four overflow-hidden">
                <div className="container">
                    <p className="our-services my_skills aos-init" 
                    data-aos="fade-up"
                    >MY SKILLS</p>
                    <h2 className="our-solution my-expertise aos-init"
                        data-aos="fade-down"
                        >My Expertise.</h2>
                    <div className="skill-type-main">
                        <div className="skills-box-main aos-init" 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="wordpress.png" alt="wordpress"/>
                            <div className="counter">
                                < Counter start={0} end={98}/>
                                <p>WORDPRESS</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init"
                            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            >
                            <img src="/html-logo.png" alt="html-logo"/>
                            <div className="counter">
                                < Counter start={0} end={95}/>
                                <p>HTML5</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init " 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="/js-logo.png" alt="js-logo"/>
                            <div className="counter">
                                < Counter start={0} end={89}/>
                                <p>JAVASCRIPT</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init"
                            data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                            >
                                {/* <FaReact className=" w-14"/> */}
                            <img src="\elementor.png" alt="Elementor"/>
                            <div className="counter">
                                < Counter start={0} end={97}/>
                                <p>Elementor</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init" 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="/figma.png" alt="figma"/>
                            <div className="counter">
                                < Counter start={0} end={96}/>
                                <p>FIGMA</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init" 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="/diamond.png" alt="diamond"/>
                            <div className="counter">
                                < Counter start={0} end={87}/>
                                <p>SKETCH</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init" 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="/photoshop.png" alt="photoshop"/>
                            <div className="counter">
                                < Counter start={0} end={85}/>
                                <p>PHOTOSHOP</p>
                            </div>
                        </div>
                        <div className="skills-box-main aos-init" 
                        data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        >
                            <img src="/illustrator.png" alt="illustrator"/>
                            <div className="counter">
                                < Counter start={0} end={93}/>
                                <p>ILLUSTRATOR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Four End ===================================== --> */}
            {/* <!-- ====================================== Latest Projects ===================================== --> */}
            <Latest_Projects/>
            {/* <!-- ====================================== Latest Projects End ===================================== --> */}
            {/* <!-- ====================================== Testimonial End  ===================================== --> */}
            <Testimonial/>
            {/* <!-- ======================================= Testimonial End ================================== --> */}
            {/* <!-- ======================================= Section Seven ================================== --> */}
            <section className="section-seven overflow-hidden " >
                <div className="container">
                    <p className="our-services aos-init" 
                    data-aos="fade-up"
                    >NEWS &amp; LATEST UPDATES</p>
                    <div className="news-header">
                        <div>
                            <h2 className="our-solution latest_project aos-init" 
                            data-aos="fade-down"
                            >Check Inside Story.</h2>
                        </div>
                        <div>
                            <button className="explore-btn hover-slide-right see-more-btn" onClick="window.location.href=&#39;blog.html&#39;;">
                                <span>SEE MORE NEWS
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
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main aos-init"
                            data-aos="fade-up"
                            >
                            <img className="news-img" src="/news-img1.jpg" alt="news-img1" onClick="window.location.href=&#39;blog.html&#39;"/>
                            <p className=" date-dev">July 15th, 2024 _ DEVELOPMENT</p>
                            <h2 className="need-blog" onClick="window.location.href=&#39;blog.html&#39;;">Does My Website Need a Blog?
                            </h2>
                            <p className="explore-me read-more-btn">
                                <Link to={'/Blog'}>READ MORE
                                    <svg className="expo-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g>
                                            <path d="M6.66669 16H25.3334" stroke="#F
                                            FDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M20 21.3333L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M20 10.6666L25.3333 16" stroke="#FFDB59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                </Link>
                            </p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main aos-init" 
                        data-aos="fade-down"
                        >
                            <img className="news-img" src="/news-img2.jpg" alt="news-img2" onClick="window.location.href=&#39;blog.html&#39;;"/>
                            <p className="date-dev">July 16th, 2024 _ DESIGN</p>
                            <h2 className="need-blog" onClick="window.location.href=&#39;blog.html&#39;;">Best 10 App for Digital
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
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main aos-init"
                            data-aos="fade-up"
                            >
                            <img className="news-img" src="/news-img3.jpg" alt="news-img3" onClick="window.location.href=&#39;blog.html&#39;;"/>
                            <p className="date-dev">July 17th, 2024 _ MARKETING</p>
                            <h2 className="need-blog" onClick="window.location.href=&#39;blog.html&#39;;">A Simple Social Media
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
                <div className="header_full_sec" id="contact-ticker">
                    <div className="position-relative">
                        <img className="client-bounce-img client-bounce-img1" src="/client-bounce-img1.jpg" alt="client-bounce-img1"/>
                        <img className="client-bounce-img client-bounce-img2" src="/client-bounce-img2.jpg" alt="client-bounce-img2"/>
                        <img className="client-bounce-img client-bounce-img3" src="/client-bounce-img3.jpg" alt="client-bounce-img3"/>
                        <img className="client-bounce-img client-bounce-img4" src="/client-bounce-img4.jpg" alt="client-bounce-img4"/>
                        <div className="logos">
                            <div className="logos-slide">
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                            </div>
                        <div className="logos-slide">
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                                <div className="ticker__item">
                                    <Link to={'mailto:biogi@gmail.com'}>Ogiriosajoshua@gmail.com</Link>
                                </div>
                                <div className="ticker__item ticker__item_dark">
                                    <Link to={'tel:+2349076052317'}>+234 907 605 23178</Link>
                                </div>
                            </div></div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Seven End ===================================== --> */}
            {/* <!-- ====================================== Footer ===================================== --> */}
            <div  ref={sectionRef}>
            <Footer/>
            </div>
            {/* <!-- ====================================== Footer End ===================================== --> */}
            {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
            <Scroll_Top/>
            {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
        </div>
    )
}

export default Header