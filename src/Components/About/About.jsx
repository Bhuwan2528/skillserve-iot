import React, { useEffect, useState } from 'react'
import './About.css'
import cncImg from '../../assets/iot.jpg'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  // fallback content
  const defaultAbout = {
    heading:
      "Step Into High-Paying Automation Careers with <span> Real Skills </span> ",

    description:
      "Our PLC, Industrial Automation & Industry 4.0 course is designed to make you a high-demand professional in today’s smart manufacturing world. You don’t just learn concepts, you earn a recognized NCRF/NSQF Level certification while working on live projects and real industrial automation systems.     <br><br>         From PLC programming and control systems to sensors, IIoT, smart maintenance, and automation processes, you gain hands-on experience that directly matches what modern industries require. What truly sets this course apart is its strong focus on best manufacturing practices like Lean, 5S, and Kaizen, so you don’t just operate systems, you learn how to improve efficiency, reduce downtime, and optimize entire production processes.    <br><br>                 As industries rapidly shift towards automation and connected technologies, skilled professionals like you are in high demand, and this course prepares you to step in with confidence, capability, and real-world experience. ",
  };

  const aboutData = data || defaultAbout;

  const shortText = aboutData.description.slice(0, 700);

  return (
    <>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className='about'>

        {/* LEFT */}
        <div className="about-left">

          <span className='about-container'>
            <span className='icon'><TiStar /></span> About Us
          </span>

          <img src={cncImg} alt="CNC Machine" className="about-img" />

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html:aboutData.description
            }}
          />

          {/* <button
            className='btn'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show Less" : aboutData.buttonText}</span>
            <FaArrowRightLong className='btn-icon' />
          </button> */}

        </div>

      </div>
    </>
  )
}

export default About