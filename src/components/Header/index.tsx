import React, { useContext, useEffect, useState } from 'react';

import { Container, Content, ContentLists, LogoImg, ListItems, Items, ItemSwitch, NavLink } from './Header'

import { ThemeContext } from 'styled-components';

import Lottie from 'react-lottie';
import animationData from '../../assets/toogleTheme.json'


import {FaSun, FaMoon} from 'react-icons/fa'

interface Props {
    toggleTheme(): void;
}



export const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { title, header, theDirection } = useContext(ThemeContext);

    const [isHeader, setIsHeader] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setIsHeader(true);
            } else {
                setIsHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);

    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false,
        direction: theDirection
    })

    console.log(animationState.direction)

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Container className={isHeader ? 'isHeader ' : ''} id="fadeIn">
            <Content className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#">
                    <LogoImg src={header.logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ContentLists className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ListItems className="navbar-nav">
                        <Items className="nav-item">
                            <NavLink className="nav-link" aria-current="page" href="#SectionTwo">Home</NavLink>
                        </Items>
                        <Items className="nav-item">
                            <NavLink className="nav-link" aria-current="page" href="#SectionTree">Sobre</NavLink>
                        </Items>
                        <Items className="nav-item">
                            <NavLink className="nav-link" aria-current="page" href="#SectionFour">Stack</NavLink>
                        </Items>
                        <Items className="nav-item">
                            <NavLink className="nav-link" aria-current="page" href="#SectionFive">Contato</NavLink>
                        </Items>

                        <ItemSwitch className="nav-item ">

                            <div>
                            <input onChange={toggleTheme} checked={title === 'dark'} className="checkbox" type="checkbox" id="chk" style={{display: 'none'}}  />

                                <label className="label" htmlFor='chk' style={{backgroundColor: "#333"}}>
                                    <FaMoon className='fa-moon' />
                                    <FaSun className='fa-sun' />
                                    <div className="ball"></div>
                                </label>
                            </div>

                        </ItemSwitch>
                    </ListItems>
                </ContentLists>
            </Content>
        </Container >
    );
};
