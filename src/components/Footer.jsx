import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="w-100">Created and designed by Juan Eduardo Ross Barbá</h3>
      <aside className="iconsContainerFooter">
        <a rel="noreferrer" target="_blank" href="https://github.com/EduRossB">
          <FaGithub className="iconsFooter" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/eduardo-ross-barb%C3%A1-1b1784152/"
        >
          <FaLinkedin className="iconsFooter" />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:edu_barba@outlook.com">
          <FaEnvelope className="iconsFooter" />
        </a>
      </aside>
    </div>
  );
}
