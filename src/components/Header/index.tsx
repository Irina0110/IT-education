import React from "react";
import './style.scss';
import QuestionIcon from '../../static/icons/IconQuestion.svg';
import RingIcon from '../../static/icons/IconRing.svg';
import SunIcon from '../../static/icons/IconSun.svg';
import Avatar from '../../static/icons/Avatar.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <header className='header'>
                <nav className='header__nav'>
                    <h1 className='header__nav-logo'>Портал разработчика</h1>
                    <NavLink to='/' className='header__nav-link'>Moe обучение</NavLink>
                    <NavLink to='/branches' className='header__nav-link'>Задачи</NavLink>
                </nav>
                <div className='header__panel'>
                    <div className='header__panel-icons'>
                        <img src={RingIcon} alt='ringIcon'/>
                        <img src={QuestionIcon} alt='ringIcon'/>
                        <img src={SunIcon} alt='sunIcon'/>
                    </div>
                    <div className='header__panel-user'>
                        <img src={Avatar} alt='avatar'/>
                        <p>Михаил Романов</p>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header;