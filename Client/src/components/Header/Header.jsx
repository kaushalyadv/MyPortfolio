import React, { useState, useEffect } from "react";
import "./Header.scss";
import catw from '../../assets/moonU.png';
import cate from '../../assets/sunU.png';
import { useNavigate } from "react-router-dom";

function Header(props) {
    const [isToggled, setToggled] = useState(false);
    const [isToggledH, setToggledH] = useState(false); 
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const nevigate = useNavigate();

    const handleToggle = () => {
        setToggled(!isToggled);
        setToggledH(!isToggledH);
        props.handleToggleInHome();
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 450);
        };

        // Initial check
        setIsSmallScreen(window.innerWidth <= 450);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    

        // <div className={`Header ${isToggled ? 'dark-theme mainRightP' : 'light-theme mainRightW'} `}>
        <div className={`${isSmallScreen ? (isToggled ? 'Header bluring dark-theme ' : 'Header bluring light-theme ') : (isToggled ? 'Header  dark-theme' : 'Header  light-theme')}`}>           
            <div className="logo">
                <span onClick={() => nevigate('/')}>Kaushal</span>
            </div>
            <div className="links">
                <ul className={isToggled ? 'textsW' : 'textsB'}>
                    <li onClick={() => nevigate('/About')}>About</li>
                    <li onClick={() => nevigate('/Proficiencies')}>Proficiencies</li>
                    <li onClick={() => nevigate('/Projects')}>Projects</li>
                    <li onClick={() => nevigate('/Contact')}>Contact</li>
                </ul>
                <div className="switch" onClick={handleToggle}>
                    <div className={`switch-jr ${isToggled ? 'bgColorS' : 'bgColorM'}`}>
                        <div className={`round ${isToggled ? 'active' : ''}`}>
                            <img src={isToggled ? catw : cate} alt="" />
                        </div>
                    </div>
                </div>



                












            </div>
        </div>
    );
}

export default Header;
