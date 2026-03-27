import React from 'react'
import './Modules.css'
import {
  FaDraftingCompass,
  FaTools,
  FaCube,
  FaCogs,
  FaMicrochip,
  FaLaptopCode,
  FaProjectDiagram,
  FaIndustry,
  FaWrench,
  FaLayerGroup,
  FaPrint,
  FaClipboardCheck
} from "react-icons/fa";

const modules = [
  { icon: <FaDraftingCompass />, name: "Introduction to CAD, CAM & 3D Printing" },
  { icon: <FaLayerGroup />, name: "2D Drafting Fundamentals" },
  { icon: <FaCube />, name: "3D Modeling Basics" },
  { icon: <FaTools />, name: "Design Tools & Interface" },
  { icon: <FaRulerCombined />, name: "Engineering Drawing & Dimensions" },
  { icon: <FaClipboardCheck />, name: "Design Standards & Safety" },

  { icon: <FaLaptopCode />, name: "Advanced 3D Modeling" },
  { icon: <FaCogs />, name: "Assembly Design & Constraints" },
  { icon: <FaProjectDiagram />, name: "Product Design Workflow" },
  { icon: <FaWrench />, name: "Editing & Optimization Techniques" },
  { icon: <FaIndustry />, name: "Real-world Design Applications" },
  { icon: <FaClipboardCheck />, name: "Design Validation Basics" },

  { icon: <FaMicrochip />, name: "Introduction to CAM" },
  { icon: <FaCogs />, name: "Toolpath Generation" },
  { icon: <FaTools />, name: "Machining Simulation" },
  { icon: <FaProjectDiagram />, name: "CNC Integration Basics" },
  { icon: <FaClipboardCheck />, name: "Quality & Precision Control" },
  { icon: <FaRulerCombined />, name: "Tolerance & Finishing" },

  { icon: <FaPrint />, name: "Introduction to 3D Printing" },
  { icon: <FaCube />, name: "3D Printing Materials & Methods" },
  { icon: <FaIndustry />, name: "Prototype Development" },
  { icon: <FaWrench />, name: "Printer Setup & Calibration" },
  { icon: <FaProjectDiagram />, name: "Live Design Projects" },
  { icon: <FaClipboardCheck />, name: "Portfolio & Job Readiness" }
];

const DesignModules = () => {
  return (
    <div className="cnc-modules">

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 140, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Design & Development (CAD, CAM & 3D Printing) Modules
          </h2>

          <p className="modules-desc">
            Our Design & Development training program focuses on practical learning,
            covering CAD designing, CAM processes, and 3D printing technologies.
            Each module is designed to build hands-on skills and make you job-ready
            for product design and manufacturing industries.
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

export default DesignModules