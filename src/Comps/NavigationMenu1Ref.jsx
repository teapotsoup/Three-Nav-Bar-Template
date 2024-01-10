import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
    position: relative;
    width: 90%;
    max-width: 800px;
    height: 50px;
    background: #3e3e3e;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
    }
`;

const NavLink = styled(Link)`
    position: relative;
    display: inline-block;
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    padding: 0 2em;
    z-index: 1;
    transition: color 0.3s ease;
`;

const Highlight = styled.span`
    position: absolute;
    top: 0;
    height: 100%;
    background: linear-gradient(45deg, #2e3192, #1bffff);
    border-radius: 8px;
    transition: left 0.5s ease;
`;

const routes = [
    { path: '/', label: 'Me', width: 80 },
    { path: '/Life', label: 'Life', width: 120 },
    { path: '/Hobby', label: 'Hobby', width: 100 },
    { path: '/Moods', label: 'Moods', width: 110 },
    { path: '/Foods', label: 'Foods', width: 90 },
];

const NavigationMenu1 = () => {
    const { pathname } = useLocation();
    const [highlightRoute, setHighlightRoute] = useState({ path: '/', label: 'Home', width: 80, left: 0 });

    useEffect(() => {
        const route = routes.find((route) => route.path === pathname);
        if (route) {
            setHighlightRoute({ ...route, left: routes.slice(0, routes.indexOf(route)).reduce((acc, cur) => acc + cur.width, 0) });
        }
    }, [pathname]);

    const handleHover = useCallback((route) => {
        setHighlightRoute({ ...route, left: routes.slice(0, routes.indexOf(route)).reduce((acc, cur) => acc + cur.width, 0) });
    }, []);

    return (
        <Nav>
            {routes.map((route) => (
                <NavLink key={route.path} to={route.path} onMouseEnter={() => handleHover(route)}>
                    {route.label}
                </NavLink>
            ))}
            <Highlight style={{ left: `${highlightRoute.left}px`, width: `${highlightRoute.width}px` }} />
        </Nav>
    );
};

export default NavigationMenu1;
