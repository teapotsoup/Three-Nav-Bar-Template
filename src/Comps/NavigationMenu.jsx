import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const Nav = styled.nav`
  position: relative;
  width: 524px;
  height: 50px;
  background: #222;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  padding: 0 23px;
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
    { path: '/', label: 'Home', position: 18 },
    { path: '/About', label: 'About', position: 108 },
    { path: '/Product', label: 'Product', position: 205 },
    { path: '/Services', label: 'Services', position: 307 },
    { path: '/Contact', label: 'Contact', position: 409 },
];

const NavigationMenu = () => {
    const { pathname } = useLocation();
    const [highlightRoute, setHighlightRoute] = useState({ path: '/', label: 'Home', position: 18 });

    useEffect(() => {
        if(highlightRoute.path !== pathname){
            const timer = setInterval(() => {
                const route = routes.find((route) => route.path === pathname);
                setHighlightRoute(route ? route : { path: '/', label: 'Home', position: 18 });
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [highlightRoute,pathname]);

    const handleHover = useCallback((route) => {
        setHighlightRoute(route);
    }, []);


    return (
        <Nav>
            {routes.map((route) => (
                <NavLink key={route.path} to={route.path} onMouseEnter={() => handleHover(route)}>
                    {route.label}
                </NavLink>
            ))}
            <Highlight style={{ left: `${highlightRoute.position}px`, width: '90px' }} />
        </Nav>
    );
};

export default NavigationMenu;
