import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
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
    { path: '#', label: 'Me', color: 'orange' },
{ path: '#', label: 'Life', color: 'green' },
{ path: '#', label: 'Hobby', color: 'blue' },
{ path: '#', label: 'Moods', color: 'red' },
{ path: '#', label: 'Foods', color: 'rebeccapurple' },
    // { path: '/', label: 'Me', color: 'orange' },
    // { path: '/Life', label: 'Life', color: 'green' },
    // { path: '/Hobby', label: 'Hobby', color: 'blue' },
    // { path: '/Moods', label: 'Moods', color: 'red' },
    // { path: '/Foods', label: 'Foods', color: 'rebeccapurple' },
];

// { path: '#', label: 'Me', color: 'orange' },
// { path: '#', label: 'Life', color: 'green' },
// { path: '#', label: 'Hobby', color: 'blue' },
// { path: '#', label: 'Moods', color: 'red' },
// { path: '#', label: 'Foods', color: 'rebeccapurple' },

const NavigationMenu2 = () => {
    const { pathname } = useLocation();
    const [indicatorStyle, setIndicatorStyle] = useState({});

    // useEffect(() => {
    //     const activeColor = routes.find(route => route.path === pathname)?.color || 'orange';
    //     const activeItem = document.querySelector('.is-active');
    //     if (activeItem) {
    //         handleIndicator(activeItem, activeColor);
    //     }
    // }, [pathname]);

    const isActive = (to) => {
        return to === pathname;
    };

    const handleIndicator = (el, activeColor) => {
        const indicator = {
            width: `${el.offsetWidth}px`,
            left: `${el.offsetLeft}px`,
            backgroundColor: activeColor,
        };
        setIndicatorStyle(indicator);
    };

    return (
        <Nav>
            {routes.map((route) => (
                <NavLink
                    key={route.path}
                    className={isActive(route.path) ? 'nav-item is-active' : 'nav-item'}
                    onClick={(e) => handleIndicator(e.target, route.color)}
                    to={route.path}
                >
                    {route.label}
                </NavLink>
            ))}
            <NavIndicator style={indicatorStyle}></NavIndicator>
        </Nav>
    );
};

export default NavigationMenu2;
