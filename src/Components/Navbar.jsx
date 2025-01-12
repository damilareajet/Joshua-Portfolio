// import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div>
      {/* <div className="cursor" style="top: 3px; left: 1255px;"></div> */}
        {/* <!-- ====================================== Cursor End ===================================== --> */}
        {/* <!-- ====================================== Preloader ===================================== --> */}
        {/* <div className="page-loader" style="display: none;">
            <div className="loader"></div>
            <div className="shadow"></div>
        </div> */}
        {/* <!-- ====================================== Preloader End ===================================== --> */}
         {/* ====================================== Main Menu ===================================== -- */}
        <header id="top-navbar" className="top-navbar">
            <div className="container">
                <div className="top-navbar_full">
                    <div className="back-btn ">
                        <Link to={'/'} className=" flex justify-center text-center">
                            <img className=" w-14 rounded-full" src="\logo.jpg" alt="logo"/>
                            <h1 className=" text-3xl sm:text-4xl text-white pl-5 font-semibold font-playpen  flex justify-center text-center ">Joshua</h1>
                        </Link>
                    </div>
                    <div className="hell">
                        <ul className="top-navbar-title">
                            <li className="menu-active"><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/About'}>About</Link></li>
                            <li ><Link to={'/Service'}>Service</Link></li> 
                            <li><Link to={'/Portfolio'}>Portfolio</Link></li>
                            <li ><Link to={'/Blog'}>Blog</Link></li>
                            <li><Link to={'/Contact'}>Contact</Link></li>
                        </ul>
                        <a href="\File\MyCv.docx">
                            <div className="cv-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_25_74)">
                                        <path d="M12 3V15" stroke="#0F141C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M16 11L12 15L8 11" stroke="#0F141C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12" stroke="#0F141C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <div className="outer-menu">
                            <input className="checkbox-toggle" type="checkbox" name="checkbox" data-has-listeners="true"/>
                            <div className="hamburger">
                                <div></div>
                            </div>
                            {/* <!-- ====================================== Side Menu ===================================== --> */}
                            <div className="menu">
                                <div>
                                    <nav>
                                        <div className="container">
                                            <div className="row sidemenu-main">
                                                <div className="col-lg-2">
                                                    <div className="menu-text">
                                                        <div className="side-menu-text">
                                                            <p>MENU</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 ">
                                                    <div className="heading2"><Link to={'/'}>Home</Link></div>
                                                    <div className="heading2"><Link to={'/About'}>About</Link></div>
                                                    <div className="heading2"><Link to={'/Portfolio'}>Portfolio</Link></div>
                                                    <div className="heading2"><Link to={'/Service'}>Service</Link></div>
                                                    <div className="heading2"><Link to={'/Blog'}>Blog</Link></div>
                                                    <div className="heading2"><Link to={'/Contact'}>Contact</Link></div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="cont-info pl-9">
                                                        <div className="item">
                                                            <p className="sub-title-address">Address</p>
                                                            <p className="geek-alto">140, Obafemi Awolowo Way,Radio Bus Stop, <br />Ikorodu, <br />Lagos State,<br /> Nigeria</p>
                                                        </div>
                                                        <div className="item">
                                                            <p className="sub-title-address">Contact Us</p>
                                                            <p><a href="mailto:Ogiriosajoshua@gmail.com">Ogiriosajoshua@gmail.com</a></p>
                                                            <p className="underline">
                                                                <a href="tel:+2349076052317">+234 907 605 2317</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* <!-- ====================================== Side Menu End===================================== --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}

export default Navbar