// import React from 'react'
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

const Testimonial = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
  return (
    <div>
        {/* <!-- ====================================== Testimonial ===================================== --> */}
        <section className="section-six overflow-hidden">
            <div className="container">
                <p className="our-services aos-init c" 
                data-aos="fade-up"
                >TESTIMONIALS</p>
                <h2 className="our-solution latest_project aos-init" 
                data-aos="fade-down"
                >What Our Clients Say.</h2>
                <div className="testimonial_slider aos-init slick-initialized slick-slider" 
                data-aos="zoom-in-left"
                >
                <div className="slick-list draggable">
                    <div className="slick-track slick-track_transform  ">
                        <div className="slick-slide slick-cloned slick-cloned_slick_width "tabIndex="-1" data-slick-index="-2" id="" aria-hidden="true">
                        <div className="great-work-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                                <g>
                                    <path d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z" stroke="#FF7D61" strokeWidth="2"></path>
                                </g>
                            </svg>
                            <h3>Great Work!</h3>
                        </div>
                        <p className="posuere">Ultrices sed sed ut posuere at. Risus urna augue orci malesuada etiam diam
                            enim. Parturient habitasse massa feugiat posuere odio leo vitae feugiat. Scelerisque cras
                            viverra nunc ipsum et duis dui proin a. Urna rhoncus nullam odio sed vitae.
                        </p>
                        <svg className="slider-line" xmlns="http://www.w3.org/2000/svg" height="33" viewBox="0 0 630 33" fill="none">
                            <path d="M630 1H100L70 31V1H0" stroke="#909090"></path>
                        </svg>
                        <div className="client_details">
                            <img className="testimonial_client_img" src="/testimonial_client_img3.jpg" alt="testimonial_client_img3"/>
                            <div>
                                <h3 className="client-name">Andrew Lewis</h3>
                                <p className="studio">Oria Studio</p>
                            </div>
                        </div>
                    </div><div className="slick-slide slick-cloned slick-cloned_slick_width"  tabIndex="-1" data-slick-index="-1" id="" aria-hidden="true">
                        <div className="great-work-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                                <g>
                                    <path d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z" stroke="#FF7D61" strokeWidth="2"></path>
                                </g>
                            </svg>
                            <h3>Best Creative Agency!</h3>
                        </div>
                        <p className="posuere">Lectus quis sit diam aenean. Neque sed blandit sed at. Adipiscing eu aenean
                            viverra nunc. Lacus ornare massa scelerisque feugiat pretium diam massa purus. Ultrices
                            elementum mattis magna cras viverra nisl enim.
                        </p>
                        <svg className="slider-line" xmlns="http://www.w3.org/2000/svg" height="33" viewBox="0 0 630 33" fill="none">
                            <path d="M630 1H100L70 31V1H0" stroke="#909090"></path>
                        </svg>
                        <div className="client_details">
                            <img className="testimonial_client_img" src="/testimonial_client_img4.jpg" alt="testimonial_client_img4"/>
                            <div>
                                <h3 className="client-name">Mark Daly</h3>
                                <p className="studio">Square Agency</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
        </section>
        {/* <!-- ======================================= Testimonial End ================================== --> */}
    </div>
  )
}

export default Testimonial