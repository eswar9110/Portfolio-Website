import React from 'react';

import '../../../styles/About/Route/Experience.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xtra
                            - curricular</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            {/* New extracurricular section */}
                            <div className="experience__box">
                                <h2>Experience at Financial</h2>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>I appeared for the SEBI (Securities and Exchange Board of India) examination.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Gaining valuable exposure to regulatory frameworks, financial markets, and compliance practices. Preparing for the exam enhanced my understanding of key concepts in securities law, financial regulations, and corporate governance. This experience sharpened my analytical and problem-solving skills while deepening my knowledge of the regulatory ecosystem governing India’s financial markets.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="experience__box">
                                <h2>ACIC CBIT Ideathon 2023</h2>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Proposed an idea for an intermediate platform to foster sustainable development.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Underwent a 3-month incubation process to transform the concept into a viable reality.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>45-Day Training Program with SheThePeople</h2>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Gained skills in writing articles, web pages, and other content.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Learned directly from leading editors, enhancing editorial and content creation abilities.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Hackathons</h2>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Participated in hackathons such as Myntra WeForShe and Hacktoberfest.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Gained insights into collaborative problem-solving and innovative thinking.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Entrepreneurship Development Cell (EDC) Club</h2>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Marketing lead responsible for promoting club initiatives and events.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Created marketing strategies, designed promotional materials, and engaged with the college community.</span>
                                    </li>
                                </ul>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
 	