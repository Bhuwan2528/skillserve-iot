import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";

/* fallback content */

const fallbackChoose = [
  {
    image: "https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=612x612&w=0&k=20&c=zWAqp6FGH-zm6b0Os_CssxubtrgKh1MyFeMgelFZbOg=",
    title: "Learn What Industries Actually Hire For",
    description:
      "At SkillServe, this course is designed around real industrial automation requirements, not just theory. You learn PLC programming, sensors & actuators, control systems, industrial wiring, and troubleshooting exactly the way manufacturing industries and automation companies expect. The focus is on building strong practical knowledge so you become job-ready from day one with skills that are directly used on the shop floor and in real industrial environments.",
  },
  {
    image: "https://img.freepik.com/free-photo/ai-robot-interacting-with-futuristic-data-interface_23-2152005489.jpg?semt=ais_incoming&w=740&q=80",
    title: "Work on Real Automation Systems, Not Just Theory",
    description:
      "SkillServe follows a practical-first approach where you learn by working on real PLC panels, industrial components, and automation setups. From ladder logic programming and panel wiring to system integration and fault finding, you gain hands-on experience through live practice and real-world simulations. This helps you build confidence and prepares you to handle actual industrial machines, production lines, and automation systems efficiently.",
  },
  {
    image: "https://institute.careerguide.com/wp-content/uploads/2023/09/1577829_NSQF-1.png",
    title: "Get Certified, Skilled & Industry-Ready Faster",
    description:
      "With NSQF-aligned training, you gain both practical skills and a recognized certification that adds real value to your career in automation. Along with hands-on projects, exposure to robotics and IIoT concepts, and industry-relevant workflows, you become ready to work in manufacturing plants, automation companies, and industrial setups. This course helps you move faster from learning to earning with confidence and professional-level skills.",
  }
];

const Choose = ({ data }) => {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    AOS.init({
      offset: isMobile ? 50 : 300,
      duration: 1000,
      once: false
    });

  }, []);

  /* agar server data nahi hai to fallback use hoga */

  const chooseData = data && data.length ? data : fallbackChoose;

  return (

    <div className='choose'>

      <h4>Why Choose Us</h4>

{chooseData.map((item, index) => (

  <div
    className="choose-card"
    key={index}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-anchor-placement="top-bottom"
  >

    <div className="card-left">
      <img src={item.image || individual} alt={item.title || "choose"} />
    </div>

    <div className="card-right">
      <h3>{item.title || "Default Title"}</h3>

      <p
        dangerouslySetInnerHTML={{
          __html: item?.description || "Default description"
        }}
      ></p>

    </div>

  </div>

))}

    </div>
  )
}

export default Choose