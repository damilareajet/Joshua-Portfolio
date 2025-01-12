import { useState } from 'react';
import { Link } from "react-router-dom";
import  { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
const Latest_Projects = () => {
    useEffect(()=> {
        Aos.init();
    }, [])
    // State to manage the active tab ID
    const [activeTab, setActiveTab] = useState('tab1');

    // Function to handle tab button click
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            {/* ====================================== Latest Projects ===================================== */}
            <section className="section-five overflow-hidden">
                <div className="container">
                    <p className="our-services discover-our-cases aos-init" data-aos="fade-up" >
                        DISCOVER OUR CASES
                    </p>
                    <div className="tab-header">
                        <div>
                            <h2 className="our-solution latest_project aos-init" data-aos="fade-up">
                                Latest Projects.
                            </h2>
                        </div>
                        <div className="tab-bar aos-init" data-aos="fade-up">
                            <button 
                                className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`} 
                                data-tab="tab1"
                                onClick={() => handleTabClick('tab1')}
                            >
                                <span>8</span>ALL
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`} 
                                data-tab="tab2"
                                onClick={() => handleTabClick('tab2')}
                            >
                                <span>2</span>CONTENT
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`} 
                                data-tab="tab3"
                                onClick={() => handleTabClick('tab3')}
                            >
                                <span>2</span>GALLERY
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab4' ? 'active' : ''}`} 
                                data-tab="tab4"
                                onClick={() => handleTabClick('tab4')}
                            >
                                <span>1</span>HTML VIDEO
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab5' ? 'active' : ''}`} 
                                data-tab="tab5"
                                onClick={() => handleTabClick('tab5')}
                            >
                                <span>1</span>YT VIDEO
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab6' ? 'active' : ''}`} 
                                data-tab="tab6"
                                onClick={() => handleTabClick('tab6')}
                            >
                                <span>1</span>VIMEO VIDEO
                            </button>
                            <button 
                                className={`tab-button ${activeTab === 'tab7' ? 'active' : ''}`} 
                                data-tab="tab7"
                                onClick={() => handleTabClick('tab7')}
                            >
                                <span>1</span>SOUND CLOUD
                            </button>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab1" className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''} aos-init zoomIn`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/tab-content-img.jpg" alt="tab-content-img"/>
                                            <p className="tab-content-text">CONTENT</p>
                                            <h2 className="tab-product-design">Unique Product Design</h2>
                                        </div>
                                    </Link>
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/html-video-img.jpg" alt="html-video-img"/>
                                            <p className="tab-content-text">HTML VIDEO</p>
                                            <h2 className="tab-product-design">Ecommerce Website UI</h2>
                                        </div>
                                    </Link>
                                    <button 
                                        className="explore-btn hover-slide-right see-more-btn" 
                                        onClick={() => window.location.href='portfolio.html'}
                                    >
                                        <span>SEE MORE WORKS
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
                                <div className="tab1sub grid" id="pop">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/gallery-tab-img.jpg" alt="gallery-tab-img"/>
                                            <p className="tab-content-text">GALLERY</p>
                                            <h2 className="tab-product-design">Mobile App for Car Rental</h2>
                                        </div>
                                    </Link>
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/yt-video-img.jpg" alt="yt-video-img"/>
                                            <p className="tab-content-text">YT VIDEO</p>
                                            <h2 className="tab-product-design">Product Development</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab2" className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <Link to={'/Portfolio'}>
                                    <div className="tab1sub grid">
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/tab-content-img.jpg" alt="tab-content-img"/>
                                            <p className="tab-content-text">CONTENT</p>
                                            <h2 className="tab-product-design p-0">Unique Product Design</h2>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={'/Portfolio'}>
                                    <div className="tab1sub grid">
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/tab-content-img2.jpg" alt="tab-content-img2"/>
                                            <p className="tab-content-text">CONTENT</p>
                                            <h2 className="tab-product-design p-0">Ecommerce Website UI</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div id="tab3" className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/tab-content-img2.jpg" alt="tab-content-img"/>
                                            <p className="tab-content-text">GALLERY</p>
                                            <h2 className="tab-product-design p-0">Unique Product Design</h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/html-video-img.jpg" alt="html-video-img"/>
                                            <p className="tab-content-text">GALLERY</p>
                                            <h2 className="tab-product-design p-0">Ecommerce Website UI</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab4" className={`tab-pane ${activeTab === 'tab4' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/html-video-img.jpg" alt="html-video-img"/>
                                            <p className="tab-content-text">HTML VIDEO</p>
                                            <h2 className="tab-product-design p-0">Ecommerce Website UI</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab5" className={`tab-pane ${activeTab === 'tab5' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/yt-video-img.jpg" alt="yt-video-img"/>
                                            <p className="tab-content-text">YT VIDEO</p>
                                            <h2 className="tab-product-design p-0">Product Development</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab6" className={`tab-pane ${activeTab === 'tab6' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/vimeo-video.jpg" alt="vimeo-video"/>
                                            <p className="tab-content-text">VIMEO VIDEO</p>
                                            <h2 className="tab-product-design p-0">Product Development</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab7" className={`tab-pane ${activeTab === 'tab7' ? 'active' : ''} tab-pane2`}>
                            <div className="tab-imgs-main">
                                <div className="tab1sub grid">
                                    <Link to={'/Portfolio'}>
                                        <div className="effect-milo">
                                            <img className="tab-imgs" src="/sound-cloud-img.jpg" alt="sound-cloud-img"/>
                                            <p className="tab-content-text">SOUND CLOUD</p>
                                            <h2 className="tab-product-design p-0">Product Development</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====================================== Latest Projects End ===================================== */}
        </div>
    );
};

export default Latest_Projects;
