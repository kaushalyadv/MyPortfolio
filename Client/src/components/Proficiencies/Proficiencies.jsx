import React, { useState } from "react";
import "./Proficiencies.scss";
import Header from "../Header/Header";
import pic1 from "../../assets/display.jpg"
import Tilt from 'react-parallax-tilt';

function Proficiencies() {
  const [isToggledA, setToggledA] = useState(false);
 
  const handleToggleInHome = () => {
    setToggledA(!isToggledA);
  };


  return (
    <div className={`main-p ${isToggledA ? "probackbk" : "probacklt"}`}>
      <Header handleToggleInHome={handleToggleInHome} />
      <div className="main-ch ">
      <Tilt scale={1.02} glareEnable={true} glareMaxOpacity={0.75} glareColor="#ffffff" glarePosition="bottom">
        <div className="first-b bxs">
          <div className={`fleft ${isToggledA ? "textsW" : "textsB"}`}>
            <span className={isToggledA ? "textsW " : "textsB"} >HTML</span>
            <span className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              odit, perspiciatis dolor placeat iusto eaque beatae ab eos itaque
              deserunt ipsum explicabo accusamus quisquam facilis eveniet sit
              cumque assumenda nostrum?
            </span>
          </div>
          <div className="fright textsB">
            <span className={isToggledA ? 'textsW mainLeftP borcolb' : 'textsB mainLeftW borcolw'}>HTML</span>
            <img className={isToggledA ? 'mainLeftP borcolb' : 'mainLeftW borcolw'} src={pic1} alt="" />
          </div>
        </div>
        </Tilt>


      <Tilt scale={1.02} glareEnable={true} glareMaxOpacity={0.75} glareColor="#ffffff" glarePosition="bottom">
        <div className=  "first-b bxs freverse ">
        {/* {` first-b bxs freverse ${isSmallScreen ? (isToggled ? 'Header dark-theme mainRightP' : 'Header light-theme mainRightW') : (isToggled ? 'Header dark-theme' : 'Header light-theme')}`} */}
          <div className={`fleft ${isToggledA ? "textsW" : "textsB"}`}>
            <span className={isToggledA ? "textsW " : "textsB"} >HTML</span>
            <span className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              odit, perspiciatis dolor placeat iusto eaque beatae ab eos itaque
              deserunt ipsum explicabo accusamus quisquam facilis eveniet sit
              cumque assumenda nostrum?
            </span>
          </div>
          <div className="fright textsB">
            <span className={isToggledA ? 'textsW mainLeftP borcolb' : 'textsB mainLeftW borcolw'}>HTML</span>
            <img className={isToggledA ? 'mainLeftP borcolb' : 'mainLeftW borcolw'} src={pic1} alt="" />
          </div>
        </div>
        </Tilt>
      <Tilt scale={1.02} glareEnable={true} glareMaxOpacity={0.75} glareColor="#ffffff" glarePosition="bottom">
        <div className="first-b bxs ">
          <div className={`fleft ${isToggledA ? "textsW" : "textsB"}`}>
            <span className={isToggledA ? "textsW " : "textsB"} >HTML</span>
            <span className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              odit, perspiciatis dolor placeat iusto eaque beatae ab eos itaque
              deserunt ipsum explicabo accusamus quisquam facilis eveniet sit
              cumque assumenda nostrum?
            </span>
          </div>
          <div className="fright textsB">
            <span className={isToggledA ? 'textsW mainLeftP borcolb' : 'textsB mainLeftW borcolw'}>HTML</span>
            <img className={isToggledA ? 'mainLeftP borcolb' : 'mainLeftW borcolw'} src={pic1} alt="" />
          </div>
        </div>
        </Tilt>
      <Tilt scale={1.02} glareEnable={true} glareMaxOpacity={0.75} glareColor="#ffffff" glarePosition="bottom">
        <div className="first-b bxs freverse">
          <div className={`fleft ${isToggledA ? "textsW" : "textsB"}`}>
            <span className={isToggledA ? "textsW " : "textsB"} >HTML</span>
            <span className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              odit, perspiciatis dolor placeat iusto eaque beatae ab eos itaque
              deserunt ipsum explicabo accusamus quisquam facilis eveniet sit
              cumque assumenda nostrum?
            </span>
          </div>
          <div className="fright textsB">
            <span className={isToggledA ? 'textsW mainLeftP borcolb' : 'textsB mainLeftW borcolw'}>HTML</span>
            <img className={isToggledA ? 'mainLeftP borcolb' : 'mainLeftW borcolw'} src={pic1} alt="" />
          </div>
        </div>
        </Tilt>
      <Tilt scale={1.02} glareEnable={true} glareMaxOpacity={0.75} glareColor="#ffffff" glarePosition="bottom">
        <div className="first-b bxs">
          <div className={`fleft ${isToggledA ? "textsW" : "textsB"}`}>
            <span className={isToggledA ? "textsW " : "textsB"} >HTML</span>
            <span className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              odit, perspiciatis dolor placeat iusto eaque beatae ab eos itaque
              deserunt ipsum explicabo accusamus quisquam facilis eveniet sit
              cumque assumenda nostrum?
            </span>
          </div>
          <div className="fright textsB">
            <span className={isToggledA ? 'textsW mainLeftP borcolb' : 'textsB mainLeftW borcolw'}>HTML</span>
            <img className={isToggledA ? 'mainLeftP borcolb' : 'mainLeftW borcolw'} src={pic1} alt="" />
          </div>
        </div>
        </Tilt>
       
       
        
      </div>
    </div>
  );
}

export default Proficiencies;
