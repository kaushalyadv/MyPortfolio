import React, { useState } from "react";
import "./Projects.scss";
import Header from "../Header/Header";
import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"
import bg4 from "../../assets/bg4.jpg"
import bg5 from "../../assets/bg5.jpg"

function Projects() {
  const [isToggledA, setToggledA] = useState(false);

  const handleToggleInHome = () => {
    setToggledA(!isToggledA);
  };

    const [hoverStates, setHoverStates] = useState({
      project1: false,
      project2: false,
      project3: false,
      project4: false, // Add more if needed
      project5: false, // Add more if needed
    });
  
    const handleHover = (projectId) => {
      setHoverStates({
        ...hoverStates,
        [projectId]: !hoverStates[projectId],
      });
    };

  return (
    <div className={`mainP ${isToggledA ? "mainLeftP" : "mainLeftW"}`}>
      <Header handleToggleInHome={handleToggleInHome} />
      <div className="mainP-c">
        <h1 className={isToggledA ? "textsW " : "textsB"}>PROJECTS <div className={`head-style ${isToggledA ? 'mainLeftWW' : 'mainLeftPll'}`}></div></h1>
        <div className="mainP-cc">
          {/* Project 1 */}
          <div className="mainp1 mn" onMouseEnter={() => handleHover('project1')} onMouseLeave={() => handleHover('project1')}>
            <div className="mn-c">
              <img src={bg1} alt="" />
            </div>
            <div className={`text ${isToggledA ? "mainLeftPl" : "mainLeftWl"}`}>
              <span className={isToggledA ? "textsW " : "textsB"}>Flight Local (B2B Travel Solution)</span>
              <div id="pro" className={isToggledA ? "textsW-d " : "textsB"}>
                <span className={`${hoverStates['project1'] ? 'transformed' : ''}`}>Web Development</span>
                <span className={`${hoverStates['project1'] ? 'transformed' : ''}`}>Developer</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="mainp2 mn" onMouseEnter={() => handleHover('project2')} onMouseLeave={() => handleHover('project2')}>
            <div className="mn-c">
              <img src={bg2} alt="" />
            </div>
            <div className={`text ${isToggledA ? "mainLeftPl" : "mainLeftWl"}`}>
              <span className={isToggledA ? "textsW " : "textsB"}>Flight Local (B2B Travel Solution)</span>
              <div id="pro" className={isToggledA ? "textsW-d " : "textsB"}>
                <span className={`${hoverStates['project2'] ? 'transformed' : ''}`}>Web Development</span>
                <span className={`${hoverStates['project2'] ? 'transformed' : ''}`}>Developer</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="mainp3 mn" onMouseEnter={() => handleHover('project3')} onMouseLeave={() => handleHover('project3')}>
            <div className="mn-c">
              <img src={bg3} alt="" />
            </div>
            <div className={`text ${isToggledA ? "mainLeftPl" : "mainLeftWl"}`}>
              <span className={isToggledA ? "textsW " : "textsB"}>Flight Local (B2B Travel Solution)</span>
              <div id="pro" className={isToggledA ? "textsW-d " : "textsB"}>
                <span className={`${hoverStates['project3'] ? 'transformed' : ''}`}>Web Development</span>
                <span className={`${hoverStates['project3'] ? 'transformed' : ''}`}>Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mainP-c-d">
          <div className="mainP-c-d-c">
            <div className="main-c-l" onMouseEnter={() => handleHover('project4')} onMouseLeave={() => handleHover('project4')}>
              <img src={bg4} alt="" />
            </div>
            <div className={`textl ${isToggledA ? "mainLeftPl" : "mainLeftWl"}`}>
              <span className={isToggledA ? "textsW " : "textsB"}>Tryotel – Cross-Platform Travel App</span>
              <div id="pro-b" className={isToggledA ? "textsW-d " : "textsB"}>
                <span className={`${hoverStates['project4'] ? 'transformed' : ''}`}>Web Development</span>
                <span className={`${hoverStates['project4'] ? 'transformed' : ''}`}>Developer</span>
              </div>
            </div>
          </div>
          <div className="mainP-c-d-p">
            <div className="main-c-r" onMouseEnter={() => handleHover('project5')} onMouseLeave={() => handleHover('project5')}>
              <img src={bg5} alt="" />
            </div>
            <div className={`textr ${isToggledA ? "mainLeftPl" : "mainLeftWl"}`}>
              <span className={isToggledA ? "textsW " : "textsB"}>Kananaskis Nordic Spa Website</span>
              <div id="pro-b" className={isToggledA ? "textsW-d " : "textsB"}>
                <span className={`${hoverStates['project5'] ? 'transformed' : ''}`}>Web Development</span>
                <span className={`${hoverStates['project5'] ? 'transformed' : ''}`}>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
