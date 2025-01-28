import React, { useState } from "react";
import "./../css/index.css";

const sections = ["Home", "Projects", "Info", "Contact", "FAQ"];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`app-container ${darkTheme ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Light" : "Dark"} Mode
      </button>
      
      <div className="portfolio-container">
        <aside className="sidebar">
          <div className="title-container">
            <h1 className="title">Siddhartha Timalsina</h1>
            <p className="subtitle">Designer & Developer</p>
          </div>
          <ul className="menu">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => setActiveSection(activeSection === section ? null : section)}
                className={`menu-item ${activeSection === section ? "active" : ""}`}
              >
                • {section}
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          {activeSection === "Home" && (
            <div className="dropdown-content">
              <p>Passionate about building innovative solutions, I have a knack for solving complex problems using technology. I thrive in projects involving AI, web development, and automation.</p>
            </div>
          )}
          {activeSection === "Projects" && (
            <div className="dropdown-content">
              <p>Online Bus Ticketing</p>
              <p>Madhyabindhu.com</p>
              <p>SetuKhabar.com</p>
            </div>
          )}
          {activeSection === "Contact" && (
            <div className="dropdown-content">
              <p>Email:siddharthatimalsina@gmail.com</p>
              <p>LinkedIn: https://www.linkedin.com/in/siddhartha-timalsina-2390861b3/</p>
            </div>
          )}
          {activeSection === "Info" && (
            <div className="dropdown-content">
              <p>Experience


                        ONLINE BUS TICKETING ( personal project)
                        Create full Function Online Bus
                        ticketing app with react.js and
                        firebase as database
                        <br />
                        Sarbatra Inc. 
                        Worked as  a  front-end  developer 
                        at Sarbatra Inc., where I gained
                        experience, React( frontend
                        development.), API handling and
                        firebase.</p>
            </div>
          )}
          {activeSection === "FAQ" && (
            <div className="dropdown-content">
              <p>what do you want  to ask me  ?</p>
            </div>
          )}
        </main>
        
      </div> 
    </div>
  );
};

export default Portfolio;