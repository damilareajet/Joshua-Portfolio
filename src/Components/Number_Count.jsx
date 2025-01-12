    // import React from 'react'
    // eslint-disable-next-line no-unused-vars
    import React, { useState, useEffect } from 'react';
    import Aos from "aos";
    import 'aos/dist/aos.css'
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

    return <h3 className="counter-digit count ">{count}</h3>;
    };
    const Number_Count = () => {
        useEffect(()=> {
            Aos.init();
        }, [])
    return (
        <div>
                    <section className="section-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col aos-init  " 
                        data-aos="zoom-in"
                        >
                            <div className=' flex justify-center text-center'>
                            < Counter start={0} end={150}/><h3 className="counter-digit count about-count" ></h3>
                            </div>
                                {/* < Counter start={0} end={700}/> */}
                            <p className="counter-work">PROJECT COMPLETED</p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col aos-init  "
                         data-aos="zoom-in"
                        >
                            < Counter start={0} end={4}/>
                            <p className="counter-work">AWARDS</p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col2 aos-init " 
                         data-aos="zoom-in"
                        ><div className=' flex justify-center text-center'>
                            < Counter start={0} end={5}/><h3 className="counter-digit count about-count" ></h3>
                            </div>
                            <p className="counter-work">YEARS EXPERIENCE</p>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter aos-init " 
                         data-aos="zoom-in"
                        ><div className=' flex justify-center text-center'>
                            < Counter start={0} end={100}/><h3 className="counter-digit count about-count" ></h3>
                            </div>
                            <p className="counter-work">HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    }

    export default Number_Count


