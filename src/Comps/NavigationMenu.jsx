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

const NavigationMenu = () => {
    const { pathname } = useLocation();
    const [highlightPosition, setHighlightPosition] = useState(18);

    useEffect(() => {
        switch (pathname) {
            case '/':
                setHighlightPosition(18);
                break;
            case '/About':
                setHighlightPosition(108);
                break;
            case '/Product':
                setHighlightPosition(205);
                break;
            case '/Services':
                setHighlightPosition(307);
                break;
            case '/Contact':
                setHighlightPosition(409);
                break;
            default:
                setHighlightPosition(18); // 기본값 설정
                break;
        }
    }, [pathname]);

    const handleHover = useCallback((left) => {
        setHighlightPosition(left);
    }, []);


    return (
        <Nav>
            <NavLink to="/" onMouseEnter={() => handleHover(18)}>Home</NavLink>
            <NavLink to="/About" onMouseEnter={() => handleHover(108)}>About</NavLink>
            <NavLink to="/Product" onMouseEnter={() => handleHover(205)}>Product</NavLink>
            <NavLink to="/Services" onMouseEnter={() => handleHover(307)}>Services</NavLink>
            <NavLink to="/Contact" onMouseEnter={() => handleHover(409)}>Contact</NavLink>
            <Highlight style={{ left: `${highlightPosition}px`, width: '90px' }} />
        </Nav>
    );
};

export default NavigationMenu;
