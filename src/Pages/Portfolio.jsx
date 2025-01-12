// import React from 'react'
import Navbar from "../Components/Navbar"
import Brands_Marquee from "../Components/Brands_Marquee"
import Footer from "../Components/Footer"
import Scroll_Top from "../Components/Scroll_Top"
import Logo_Slide_info from "../Components/Logo_Slide_info"
import Latest_Projects from "../Components/Latest_Projects"
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const Portfolio = () => {
  useEffect(()=> {
    Aos.init();
}, [])
  return (
    <div className="site_contain">
      {/* <!-- ====================================== Main Menu ===================================== --> */}
        <Navbar/>
      {/* <!-- ====================================== Main Menu End===================================== --> */}
      {/* <!-- ====================================== Portfolio Section One ===================================== --> */}
        <section className="section-main overflow-hidden" id="main">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <p className="main-text about-hello aos-init aos-animate" 
                        data-aos="fade-down"
                        >My Portfolio</p>
                        <h1 className="JessicaBiogi aos-init aos-animate" 
                        data-aos="fade-down"
                        >Selected Work</h1>
                        <p className="Freelance about-freelance aos-init aos-animate" 
                        data-aos="fade-down"
                        >Metus montes facilisis nulla eros
                            nascetur accumsan nibh facilisi. Euismod amet amet pharetra turpis eleifend sed. Volutpat
                            turpis ut amet nec feugiat orci.</p>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
                        <img className="about-flower-img" src="/flower.png" alt="flower"/>
                        <img className="about-img-main aos-init aos-animate" src="/portfolio-main-img.png" alt="portfolio-main-img" data-aos="fade-left"/>
                        <img className="about-arrow-main about-arrow-main-transform" id="arrow" src="/arrow-main.png" alt="about-arrow-main"/>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====================================== Portfolio Section One End ===================================== --> */}
        {/* <!-- ================== Portfolio Section Two ===============================--> */}
        <section className="section-five section-five-portfolio overflow-hidden">
         <Latest_Projects/>
        </section>
        {/* <!-- ================== Portfolio Section Two End ===============================--> */}
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

export default Portfolio