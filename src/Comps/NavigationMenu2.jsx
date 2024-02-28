import {  useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { TbAlpha, TbBeta,TbDelta   } from "react-icons/tb";
import { GiEchoRipples } from "react-icons/gi";
import { FaRedhat } from "react-icons/fa";

const Nav = styled.nav`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
    margin-bottom: 50px;
`;

const NavLink = styled(Link)`
    padding: 20px;
    text-decoration: none;
    transition: .3s;
    margin: 0 6px;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #dfe2ea;
        border-radius: 8px 8px 0 0;
        opacity: 0;
        transition: .3s;
    }

    &.is-active:before {
        opacity: 1;
        bottom: 0;
    }

    &:hover:not(.is-active):before {
        opacity: 1;
        bottom: 0;
    }

    &:hover:not(.is-active) {
        color: #333;
    }
`;

const NavIndicator = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    transition: .4s;
    z-index: 1;
    border-radius: 8px 8px 0 0;
`;

const routes = [
    { path: '/nav2', label: 'alpha', color: 'red' },
    { path: '/nav2', label: 'beta', color: 'blue' },
    { path: '/nav2', label: 'charlie', color: 'black' },
    { path: '/nav2', label: 'delta', color: 'green' },
    { path: '/nav2', label: 'echo', color: 'yellow' },
];

const NavigationMenu2 = () => {
    const { pathname } = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState({backgroundColor: "red", left: "26px", width: "79px"});
    const [selectedLabel, setSelectedLabel] = useState('alpha'); // Step 1: Add state for selected label

    const isActive = (to) => {
        return to === pathname;
    };

    const handleIndicator = (el, activeColor, label) => { // Modified to accept label
        const indicator = {
            width: `${el.offsetWidth}px`,
            left: `${el.offsetLeft}px`,
            backgroundColor: activeColor,
        };
        setIndicatorStyle(indicator);
        setSelectedLabel(label); // Update selected label
    };

    return (
        <>
            <Nav>
                {routes.map((route) => (
                    <NavLink
                        key={route.label}
                        className={isActive(route.path) ? 'nav-item is-active' : 'nav-item'}
                        onClick={(e) => handleIndicator(e.target, route.color, route.label)} // Pass label to handleIndicator
                        to={route.path}
                    >
                        {route.label}
                    </NavLink>
                ))}
                <NavIndicator style={indicatorStyle}></NavIndicator>
            </Nav>
            {/* Conditionally render components based on selectedLabel */}
            {selectedLabel === 'alpha' && <TbAlpha size="5vw"/>}
            {selectedLabel === 'beta' && < TbBeta  size="5vw"/>}
            {selectedLabel === 'charlie' &&  <FaRedhat  size="5vw"/>}
            {selectedLabel === 'delta' &&  <TbDelta  size="5vw"/>}
            {selectedLabel === 'echo' && <GiEchoRipples  size="5vw"/>}
        </>
    );
};

export default NavigationMenu2;
