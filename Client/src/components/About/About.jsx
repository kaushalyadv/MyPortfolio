import React, { useState, useEffect } from "react";
import "./About.scss";
import Header from "../Header/Header";

function About() {
  const [isToggledA, setToggledA] = useState(false);


  const handleToggleInHome = () => {
    setToggledA(!isToggledA);
  
  };

  useEffect(() => {
    const line = document.querySelector(".line");
    const TLine = document.querySelector(".line-again");
    const boxes = document.querySelectorAll(".bx");
    const boxesX = document.querySelectorAll(".bxx");
    const bxChld = document.querySelectorAll(".bx-child");
   
    

    // Trigger the width animation first
    setTimeout(() => {
      line.style.width = "100%";

      // After a delay, trigger the height animation
      setTimeout(() => {
        TLine.style.width = "100%";
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.style.height = "45%";
            bxChld[index].classList.remove("dNone");
          }, index * 333.333); // Adjust the delay as needed
        });
      }, 2000);
      setTimeout(() => {
        TLine.style.width = "100%";
        boxesX.forEach((boxX, index) => {
          setTimeout(() => {
            boxX.style.height = "45%";
            bxChld[index+3].classList.remove("dNone");
          }, index * 333.333); // Adjust the delay as needed
        });
      }, 2000);
    }, 1000); // Adjust the delay as needed
  }, []);

  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".ro-cha");
    const interval = 3000;

    valueDisplays.forEach((valueDisplay) => {
      const endValue = parseInt(valueDisplay.getAttribute("data-val"));
      const duration = Math.floor(interval / endValue);
      let startValue = 0;
      let counter = null;

      const updateValue = () => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      };

      valueDisplay.addEventListener("mouseenter", () => {
        counter = setInterval(updateValue, duration);
      });

      valueDisplay.addEventListener("mouseleave", () => {
        clearInterval(counter);
        startValue = 0; // Reset to 0 on mouse leave
        valueDisplay.textContent = valueDisplay.getAttribute("data-text") || "000";
      });
    });
  }, []);

  return (
    <div className={`large-main ${isToggledA ? "mainLeftP" : "mainLeftW"}`}>
      <Header handleToggleInHome={handleToggleInHome} />
      <div className="mainA">
        <div className={`one mainC ${isToggledA ? "mainLeftP" : "mainLeftW "}`}>
        <div
  className={`dots ${isToggledA ? "textsW" : "textsB"}`}
  style={{
    backgroundImage: isToggledA
      ? "radial-gradient(circle, #fff 3px, transparent 3px)"
      : "radial-gradient(circle, rgba(38, 37, 40, 0.99) 3px, transparent 3px)",
  }}
></div>

        </div>
        <div
          className={`two mainC ${
            isToggledA ? "mainLeftP textsW blackW" : "mainLeftW textsB blackB"
          }`}
        >
          <h1>Developer <div className={`head-style ${isToggledA ? 'mainRightP' : 'mainRightW'}`}></div></h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            culpa aspernatur quo labore. Dignissimos quod asperiores impedit
            praesentium ad voluptatum repellat itaque, eaque molestiae nostrum
            incidunt molestias suscipit veniam sapiente?
          </p>
        </div>
        <div className="three mainC"></div>
      </div>

      <div className="about-down textsB">
        <div className="heads"><h1 className={isToggledA ? 'textsW' : 'textsB'}>SKILLS <div className={`head-style ${isToggledA ? 'mainRightP' : 'mainRightW'}`}></div></h1></div>
        
        <div  className={`rounds ${isToggledA ? 'textsW' : 'textsB'}`}>
          <div className={`r1 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r1-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="245" data-text="HTML">
              HTML
            </div>
          </div>
          <div className={`r2 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r2-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="885" data-text="CSS">
              CSS
            </div>
          </div>
          <div className={`r3 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r3-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="925" data-text="REACT">
              REACT
            </div>
          </div>
          <div className={`r4 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r4-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="725" data-text="NODE">
              NODE
            </div>
          </div>
          <div className={`r5 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r5-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="285" data-text="PYTHON">
              PYTHON
            </div>
          </div>
          <div className={`r6 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r6-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="565" data-text="JAVA">
              JAVA
            </div>
          </div>
          <div className={`r7 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r7-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="225" data-text="ANGULAR">
              ANGULAR
            </div>
          </div>
          <div className={`r8 ro ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className={`r8-child ro-cha ${isToggledA ? 'mainLeftP' : 'mainLeftW'}`} data-val="895" data-text="UNITY">
              UNITY
            </div>
          </div>
        </div>
      </div>

      <div className="about-dd">
        <h1 className={isToggledA ? 'textsW' : 'textsB'}>QUALIFICATION'S <div className={`head-style ${isToggledA ? 'mainRightP' : 'mainRightW'}`}></div></h1>
        <div className="main-about">
          <span className="line "></span>
          <span className="line-ee"></span>
          <span className={`box1 bx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
            <div className="bx-child  dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
            
          </span>
          <span className={`box2 bx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
          <div className="bx-child textsB dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
          </span>
          <span className={`box3 bx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
          <div className="bx-child textsB dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
          </span>
          <span className="line-end "></span>
          <span className="line-again "></span>
          <span className={`box4 bxx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
          <div className="bx-child textsB dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
          </span>
          <span className={`box5 bxx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
          <div className="bx-child textsB dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
          </span>
          <span className={`box6 bxx ${isToggledA ? 'mainRightP' : 'mainRightW'}`}>
          <div className="bx-child textsB dNone">
            <span className="date textsB">2018 - 2019</span>
            <span className={`class  ${isToggledA ? 'textsW' : 'textsB'}`}>
              Class X - <span className="school">G.I.c School</span>
            </span>
            <span className={`para ${isToggledA ? 'textsW' : 'textsB'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta repellat consectetur temporibus quisquam consequatur ipsa
              ipsum, accusantium quasi dolorem!
            </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
