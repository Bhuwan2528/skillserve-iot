import React from 'react'
import './Modules.css'
import {
  FaCogs,
  FaTools,
  FaDraftingCompass,
  FaMicrochip,
  FaIndustry,
  FaRulerCombined,
  FaClipboardCheck,
  FaWrench,
  FaLaptopCode,
  FaProjectDiagram,
  FaShieldAlt,
  FaBolt,
  FaRobot,
  FaNetworkWired
} from "react-icons/fa";

const modules = [
  { icon: <FaCogs />, name: "Introduction to Industrial Automation" },
  { icon: <FaIndustry />, name: "Automation Systems & Applications" },
  { icon: <FaTools />, name: "Sensors & Actuators Basics" },
  { icon: <FaRulerCombined />, name: "Electrical & Control Drawings" },
  { icon: <FaDraftingCompass />, name: "Measurement & Instrumentation" },
  { icon: <FaClipboardCheck />, name: "Industrial Safety Practices" },

  { icon: <FaLaptopCode />, name: "Basics of PLC Programming" },
  { icon: <FaMicrochip />, name: "PLC Hardware & Architecture" },
  { icon: <FaProjectDiagram />, name: "Ladder Logic Programming" },
  { icon: <FaCogs />, name: "Timers, Counters & Logic Functions" },
  { icon: <FaWrench />, name: "Input/Output Wiring & Configuration" },
  { icon: <FaIndustry />, name: "Panel Designing & Installation" },

  { icon: <FaRobot />, name: "Introduction to Robotics" },
  { icon: <FaCogs />, name: "Robot Components & Working" },
  { icon: <FaTools />, name: "Robot Programming Basics" },
  { icon: <FaProjectDiagram />, name: "Automation System Integration" },
  { icon: <FaClipboardCheck />, name: "Quality & Process Control" },
  { icon: <FaRulerCombined />, name: "Industrial Standards & Protocols" },

  { icon: <FaNetworkWired />, name: "Introduction to IIoT" },
  { icon: <FaLaptopCode />, name: "Smart Sensors & Data Monitoring" },
  { icon: <FaIndustry />, name: "Industrial Communication (Modbus, etc.)" },
  { icon: <FaShieldAlt />, name: "Maintenance & Troubleshooting" },
  { icon: <FaProjectDiagram />, name: "Live Industrial Automation Projects" },
  { icon: <FaClipboardCheck />, name: "Interview Preparation & Job Readiness" }
];

const AutomationModules = () => {
  return (
    <div automation-modules>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Industrial Automation (PLC, Robotics & IIoT) Modules
          </h2>

          <p className="modules-desc">
            Our Industrial Automation training program is designed to make you
            job-ready with hands-on experience in PLC programming, robotics, and
            smart industrial systems. From basic automation concepts to advanced
            control systems and live projects, every module focuses on practical
            learning and real industry exposure.
          </p>

          <div className="modules-grid">

            {modules.map((module, index) => (
              <div className="module-card" key={index}>
                <div className="module-icon">{module.icon}</div>
                <p className="module-name">{module.name}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default AutomationModules