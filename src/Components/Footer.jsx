// import React from 'react'
import { Link } from "react-router-dom";
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=> {
        Aos.init();
    }, [])

    return (
        <div>
            {/* <!-- ====================================== Footer ===================================== --> */}
            <footer>
                <div className="mobile-itemright-footer aos-init aos-animate" 
                data-aos="fade-down"
                >
                    <div className="footer-box-right">
                        <p className="mind-project ">Have a project in your mind?</p>
                        <div className="view-work-circle btn btn1">
                        <Link to={'/Contact'} className="a1">CONTACT ME</Link>
                        </div>
                        <div>
                            <p className="contact_time">09 : 00 AM - 10 : 30 PM</p>
                            <p className="monday">Monday to Saturday</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bg">
                    <div className="container footer-containe">
                        <div className="hekl">
                            <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-5">
                                    <div className="back-btn ">
                                        <Link to={'/'} className=" flex justify-center text-center">
                                            <img className=" w-14 rounded-full" src="\logo.jpg" alt="logo"/>
                                            <h1 className=" text-3xl sm:text-4xl text-white pl-5 font-semibold font-playpen  flex justify-center text-center ">Joshua</h1>
                                        </Link>
                                    </div>
                                    <p className="work_well">When do they work well, and when do they on us and finally,
                                        when do we actually need how can we avoid them.</p>
                                    <div className="contact-footer">
                                        <img src="/phone_svg.svg" alt="phone_svg"/>
                                        <a href="tel:+2349076052317">+234 907 605 2317</a>
                                    </div>
                                    <div className="contact-footer">
                                        <img src="/email_svg.svg" alt="email_svg"/>
                                        <a href="mailto:Ogiriosajoshua@mail.com">Ogiriosajoshua@gmail.com</a>
                                    </div>
                                    <div className="contact-footer">
                                        <img src="/location_svg.svg" alt="location_svg"/>
                                        <p>Ikorodu, Lagos State, Nigeria</p>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3">
                                    <p className="useful-link">USEFUL LINKS</p>
                                    <div className="contact-footer">
                                        <Link to={'/About'}>About</Link>
                                    </div>
                                    <div className="contact-footer">
                                        <Link to={'/Service'}>Services</Link>
                                    </div>
                                    <div className="contact-footer">
                                        <Link to={'/Portfolio'}>Portfolio</Link>
                                    </div>
                                    <div className="contact-footer">
                                        <Link to={'/Blog'}>Blog</Link>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-4 col-lg-4">
                                    <p className="useful-link">USEFUL LINKS</p>
                                    <div className="contact-footer">
                                        <Link to={'/Contact'}>Contact</Link>
                                    </div>
                                    <div className="contact-footer">
                                        <Link to={'/Privacy_Policy'}>Privacy Policy</Link>
                                    </div>
                                    <div className="contact-footer">
                                        <Link to={'/Terms_Conditions'}>Terms &amp; Conditions</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright_main">
                                <p className="copyright">© 2024 | All rights reserved by
                                    <a href="#" className=" pl-2">J Tech</a>
                                </p>
                                <div className="input-main">
                                    <input type="text" name="text" placeholder="Enter your email" autoComplete="off" data-has-listeners="true"/>
                                    <svg className="send-svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_147_85)">
                                            <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M21 3L14.5 21C14.4561 21.0957 14.3857 21.1769 14.2971 21.2338C14.2084 21.2906 14.1053 21.3209 14 21.3209C13.8947 21.3209 13.7916 21.2906 13.703 21.2338C13.6143 21.1769 13.5439 21.0957 13.5 21L10 14L3.00001 10.5C2.90427 10.4561 2.82314 10.3857 2.76626 10.2971C2.70938 10.2084 2.67914 10.1053 2.67914 10C2.67914 9.89468 2.70938 9.79158 2.76626 9.70295C2.82314 9.61431 2.90427 9.54387 3.00001 9.5L21 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_147_85">
                                                <rect width="24" height="24" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="desktop-itemright-footer">
                            <div className="footer-box-right">
                                <p className="mind-project">Have a project in your mind?</p>
                                <div className="view-work-circle btn btn1">
                                    <Link className="a1" to={'/Contact'}>CONTACT ME</Link>
                                </div>
                                <div>
                                    <p className="contact_time">09 : 00 AM - 10 : 30 PM</p>
                                    <p className="monday">Monday to Saturday</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <p className="Designed">Designed by
                    <a href="http://Wa.me//+2349068518858" className=" pl-2">Damilare Ajet</a>
                </p>
                
            </footer>
            {/* <!-- ====================================== Footer End ===================================== --> */}
        </div>
    )
}

export default Footer