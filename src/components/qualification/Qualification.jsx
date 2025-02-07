import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification section" id='portifolio'>
        <h2 className="section__title">Qualification & Experiance</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex qualification__unactive"}
                onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex qualification__unactive"}
                onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experiance
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech. CSE (AI&DS)</h3>
                            <span className="qualification__subtitle">Graphic Era Deemed to be University, Dehradun</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">St. Marys's Convent Sr. Sec. School, Gajraula</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021
                            </div>
                        </div>

                        

                    </div>

                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">St. Marys's Convent Sr. Sec. School, Gajraula</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            
                        </div>

                    </div>
                </div> 

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Web Developer Intern</h3>
                            <span className="qualification__subtitle">EduChanger Solutions, Noida, India </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 25th July, 2024 - 25th October, 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification