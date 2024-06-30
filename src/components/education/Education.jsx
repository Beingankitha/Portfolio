import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaLaptopCode} from 'react-icons/fa';
import './education.css';

const Education = () => {
    return (
        <section id="education">
            {
                <div className='education'>
                    <VerticalTimeline lineColor='#000'>
                        <VerticalTimelineElement className='vertical-timeline-element--work' 
                        iconStyle={{background:'#000', color:'#fff'}}
                        icon={<FaLaptopCode/>}
                        date= 'May 2023 - Present'>
                            <h3 className="vertical-timeline-element-title">Software and Data Engineer</h3><br/>
                            <h5>University of Leicester, Leicester, United Kingdom</h5>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement className='vertical-timeline-element--education' 
                        iconStyle={{background:'#000', color:'#fff'}}
                        icon={<FaGraduationCap/>}
                        date= 'Jan 2020 - July 2022'>
                            <h3 className="vertical-timeline-element-title">MSc in Advanced Computer Science</h3><br/>
                            <h5>University of Leicester, Leicester, United Kingdom</h5>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            }
        </section>
    );
}

export default Education