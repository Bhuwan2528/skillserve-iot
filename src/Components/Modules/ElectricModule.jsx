import React from 'react'
import './Modules.css'
import {
  FaBolt,
  FaBatteryFull,
  FaChargingStation,
  FaTools,
  FaMicrochip,
  FaCogs,
  FaCar,
  FaIndustry,
  FaWrench,
  FaProjectDiagram,
  FaShieldAlt,
  FaClipboardCheck
} from "react-icons/fa";

const modules = [
  { icon: <FaBolt />, name: "Introduction to Electric Vehicles" },
  { icon: <FaCar />, name: "Types of EVs (2, 3 & 4 Wheeler)" },
  { icon: <FaIndustry />, name: "EV Components & Architecture" },
  { icon: <FaBatteryFull />, name: "Battery Technology Basics" },
  { icon: <FaChargingStation />, name: "Charging Systems & Infrastructure" },
  { icon: <FaShieldAlt />, name: "EV Safety Practices" },

  { icon: <FaMicrochip />, name: "Motor & Controller Working" },
  { icon: <FaCogs />, name: "Powertrain & Transmission System" },
  { icon: <FaTools />, name: "Wiring & Electrical Systems" },
  { icon: <FaWrench />, name: "Battery Management System (BMS)" },
  { icon: <FaProjectDiagram />, name: "System Diagnostics & Fault Finding" },
  { icon: <FaClipboardCheck />, name: "Maintenance & Servicing Basics" },

  { icon: <FaTools />, name: "EV Assembly & Disassembly" },
  { icon: <FaCogs />, name: "Testing & Performance Analysis" },
  { icon: <FaBatteryFull />, name: "Battery Charging & Swapping" },
  { icon: <FaProjectDiagram />, name: "Live Practical Sessions" },
  { icon: <FaIndustry />, name: "Workshop Practices" },
  { icon: <FaClipboardCheck />, name: "Quality & Safety Checks" },

  { icon: <FaWrench />, name: "Troubleshooting Techniques" },
  { icon: <FaMicrochip />, name: "Controller Programming Basics" },
  { icon: <FaShieldAlt />, name: "Advanced Safety Standards" },
  { icon: <FaProjectDiagram />, name: "Live EV Projects" },
  { icon: <FaClipboardCheck />, name: "Interview Preparation" },
  { icon: <FaCar />, name: "Job Readiness & Industry Exposure" }
];

const ElectricModule = () => {
  return (
    <div className="cnc-modules">

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 200, 150)" />
            <stop offset="100%" stopColor="rgb(0, 120, 255)" />
          </linearGradient>
        </defs>
      </svg>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Electric Vehicle (02, 03 & 04 Wheeler) Modules
          </h2>

          <p className="modules-desc">
            Our Electric Vehicle training program focuses on practical learning,
            covering batteries, motors, controllers, and real workshop
            practices. Each module is designed to build hands-on skills and make
            you job-ready for the EV industry.
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

export default ElectricModule  