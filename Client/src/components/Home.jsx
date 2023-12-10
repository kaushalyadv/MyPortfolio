import React, { useState } from "react";
import './Home.scss';
import light from '../assets/light.png';
import lamp from '../assets/lamp.png';
import monitor from '../assets/monitor.png';
import cup from '../assets/cup.png';
import pot from '../assets/pot.png';
import books from '../assets/booksUp.png';
import hand from '../assets/wavingHand.png';
import Header from './Header/Header';
import display from '../assets/display.jpg';

function Home() {
    const [isToggledH, setToggledH] = useState(false);

    const handleToggleInHome = () => {
        setToggledH(!isToggledH);
    };
    return (
        <div className="main">
            <Header handleToggleInHome={handleToggleInHome} />
            <div className={`left ${isToggledH ? 'mainLeftW' : 'mainLeftP'}`}></div>

            <div className="middle">
                <section id="lamp" onClick={handleToggleInHome}>
                    <img src={lamp} alt="Desk Lamp" />
                </section>
                <section id="light">
                    <img src={light} alt="Desk Light" />
                </section>
                <section id="desk">
                    <div id="monitor">
                        <div className="display">
                            <img src={display} alt="" />
                        </div>
                        <img src={monitor} alt="Monitor" />
                    </div>
                    <img id="cup" src={cup} alt="Coffee Cup" />
                    <span id="mouse" onClick={handleToggleInHome}></span>
                    <div id="bottom"></div>
                </section>
                <section id="flowers">
                    <img id="flower" src={pot} alt="Pot with Flowers" />
                    <img id="books" src={books} alt="Books" />
                    <div id="bottom"></div>
                </section>
            </div>

            <div className={`right ${isToggledH ? 'mainRightP' : 'mainRightW'}`}>
                <div className="content">
                    <h3> <img src={hand} alt="" /> Hi, I'm Kaushal</h3>
                    <h1>I like making fun, interactive things with code. I also talk and write about those things.</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;

export function handleToggleInHome(isToggledH, setToggledH){
    setToggledH(!isToggledH);
}
