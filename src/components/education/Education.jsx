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
                    {/* Start with the most recent position */}
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaLaptopCode />}
                        date='2023 - Present'
                        style={{ opacity: isVisible(100) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Software and Data Engineer</h3>
                        <h5> Space Park Leicester,University of Leicester</h5>
                        <h5> Leicester, United Kingdom</h5>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className='vertical-timeline-element--education'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaGraduationCap />}
                        date='2020 - 2022'
                        style={{ opacity: isVisible(500) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">MSc in Advanced Computer Science</h3>
                        <h5>University of Leicester, Leicester, United Kingdom</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2015 - 2020'
                        style={{ opacity: isVisible(900) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Senior Software Developer</h3>
                        <h5>XYZ Technologies, City, Country</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaBriefcase />}
                        date='2012 - 2015'
                        style={{ opacity: isVisible(1300) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
                        <h5>ABC Corporation, City, Country</h5>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className='vertical-timeline-element--education'
                        iconStyle={{ background: '#000', color: '#fff' }}
                        icon={<FaGraduationCap />}
                        date='2008 - 2012'
                        style={{ opacity: isVisible(1700) ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Engineering</h3>
                        <h5>University of XYZ, City, Country</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Education;