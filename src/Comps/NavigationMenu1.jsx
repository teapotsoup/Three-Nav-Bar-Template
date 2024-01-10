import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const Nav = styled.nav`
  position: relative;
  width: ${props => props.NavWidth}; // 프롭스 대상
    min-width: 800px;
  height: ${props => props.NavHeight}; // 프롭스 대상
  background: ${props => props.NavBackGroundColor}; // 프롭스 대상
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLink = styled(Link)`
  position: relative;
  //display: inline-block;
  font-size: ${props => props.NavTabFontSize}; // 프롭스 대상
  color: #fff;
  text-decoration: none;
  padding: 0 23px;
  z-index: 1;
  transition: color 0.3s ease;
    display: flex;
    justify-content: center;
    > a {
        display: flex;
        justify-content: center;
    }
`;

const Highlight = styled.span`
  position: absolute;
  top: 0;
  height: 100%;
    width: ${props => props.HighLightTabWidth};
    min-width: 100px;
  background:  linear-gradient(45deg, ${(props) => props.HighLightTabColorOne}, ${(props) => props.HighLightTabColorTwo});
  border-radius: 8px;
  transition: left 0.5s ease;
`;

const routes = [
    { path: '/', label: 'Me', position: '5.8vw' },
    { path: '/Life', label: 'Life',position: '15.8vw' },
    { path: '/Hobby', label: 'Hobby', position: '26.3vw' },
    { path: '/Moods', label: 'Moods', position: '37.8vw' },
    { path: '/Foods', label: 'Foods', position: '49vw' },
];

// eslint-disable-next-line react/prop-types
const NavigationMenu1 = ({NavWidth = '60vw', NavHeight = '50px', NavBackGroundColor = '#3e3e3e', NavTabFontSize = '1em',HighLightTabWidth='10px',HighLightTabColorOne = '#2e3192', HighLightTabColorTwo = '#1bffff' }) => {
    const { pathname } = useLocation();
    const [highlightRoute, setHighlightRoute] = useState({ path: '/', label: 'Me', position: '5.8vw' });

    useEffect(() => {
        // 현재 하이라이트된 탭과 현재 경로가 다른 경우 1초 후 탭이 원래 경로에 해당하는 탭으로 돌아감.
        if(highlightRoute.path !== pathname){
            const timer = setInterval(() => {
                const route = routes.find((route) => route.path === pathname);
                setHighlightRoute(route ? route : { path: '/', label: 'Me', position: '5.8vw' });
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
        <NavWrapper>
            <Nav NavWidth = {NavWidth} NavHeight = {NavHeight} NavBackGroundColor = {NavBackGroundColor} >
                {routes.map((route) => (
                    <NavLink NavTabFontSize={NavTabFontSize} key={route.path} to={route.path} onMouseEnter={() => handleHover(route)}>
                        {route.label}
                    </NavLink>
                ))}
                <Highlight HighLightTabWidth={HighLightTabWidth} HighLightTabColorOne={HighLightTabColorOne} HighLightTabColorTwo={HighLightTabColorTwo} style={{ left: `${highlightRoute.position}` }} />
            </Nav>
        </NavWrapper>

    );
};

const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default NavigationMenu1;
