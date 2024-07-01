import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import './education.css';

const Education = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to determine if the element should be visible
    const isVisible = (threshold) => {
        const windowHeight = window.innerHeight;
        return scrollPosition + windowHeight > threshold;
    }

    return (
        <section id="education">
            <div className='education'>
                <VerticalTimeline lineColor='#000'>
                    {/* Most recent position */}
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaLaptopCode />}
                        date='2023 - Present'
                        style={{ opacity: isVisible(100) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Software and Data Engineer</h3>
                        <h5>Space Park Leicester, University of Leicester</h5>
                        <h5>Leicester, United Kingdom</h5>
                    </VerticalTimelineElement>

                    {/* Previous positions */}
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2021 - 2022'
                        style={{ opacity: isVisible(500) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                        <h5>Kartum Infotech</h5>
                        <h5>India</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--education'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaGraduationCap />}
                        date='2020 - 2022'
                        style={{ opacity: isVisible(900) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">MSc in Advanced Computer Science</h3>
                        <h5>University of Leicester</h5>
                        <h5>Leicester, United Kingdom</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2018 - 2019'
                        style={{ opacity: isVisible(1300) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">E-Commerce Business Development Manager</h3>
                        <h5>Amar Enterprise</h5>
                        <h5>India</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2016 - 2017'
                        style={{ opacity: isVisible(1700) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">B2B Export Executive</h3>
                        <h5>Jani Import-Export</h5>
                        <h5>India</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2013 - 2016'
                        style={{ opacity: isVisible(2100) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">B2B Business Sales Executive</h3>
                        <h5>Fashion Plus Lace</h5>
                        <h5>India</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2011 - 2013'
                        style={{ opacity: isVisible(2500) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Client Relationship Manager</h3>
                        <h5>D.V. Das Manpower</h5>
                        <h5>India</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--education'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaGraduationCap />}
                        date='2007 - 2011'
                        style={{ opacity: isVisible(2900) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Engineering</h3>
                        <h5>Veer Narmad South Gujarat University</h5>
                        <h5>Surat, India</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;
