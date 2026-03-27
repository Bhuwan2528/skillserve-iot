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
      "We prepare you with practical skills to succeed and get <span>hired by leading companies</span>",

    description:
      "Our Industrial Automation (PLC, Robotics & IIoT) course is designed to make you a truly job-ready automation technician. You don’t just learn—you gain a recognized NSQF Level certification (Digilocker Verified) while working on real industrial systems and practical projects. The training covers what actually matters in the automation industry, including PLC programming, robotics fundamentals, sensors & actuators, control systems, industrial wiring, and troubleshooting techniques. <br>     As you progress, you build hands-on expertise in panel designing, machine automation, fault finding, system integration, and maintenance—skills that are in high demand across manufacturing industries and automation companies. What makes this course stand out is the integration of modern industrial practices like IIoT (Industrial Internet of Things), smart monitoring, safety standards, and efficient workflows, helping you work with precision and a professional mindset. <br> If you want real skills, real industrial exposure, and strong career growth—this is the perfect place to start.",

    buttonText: "Read More"
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