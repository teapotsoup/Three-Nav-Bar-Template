import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const Nav = styled.nav`
  position: relative;
  width: ${props => props.$navwidth};// 프롭스 대상
  height: ${props => props.$navheight}; // 프롭스 대상
  background: ${props => props.$navbackgroundcolor}; // 프롭스 대상
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
    padding: 0.5vw;
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: ${props => props.$navtabfontsize}; // 프롭스 대상
  color: #fff;
  text-decoration: none;
  padding: 1vw;
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
  width: ${props => props.$highlighttabwidth};
  background:  linear-gradient(45deg, ${(props) => props.$highlighttabcolorone}, ${(props) => props.$highlighttabcolortwo});
  border-radius: 8px;
  transition: left 0.5s ease;
`;

const routes = [
    { path: '/nav1', label: 'NAV1', position: '6.6vw' },
    { path: '/nav2', label: 'NAV2',position: '17.2vw' },
    { path: '/nav3', label: 'NAV3', position: '28vw' },
];

// eslint-disable-next-line react/prop-types
const NavigationMenu1 = ({navwidth = '40vw', navheight = '3vw', navbackgroundcolor = '#3e3e3e', navtabfontsize = '1vw',highlighttabwidth='5.5vw',highlighttabcolorone = '#2e3192', highlighttabcolortwo = '#1bffff' }) => {
    const { pathname } = useLocation();
    const [highlightRoute, setHighlightRoute] = useState({ path: '/', label: 'Me', position: '6.6vw' });

    useEffect(() => {
        // 현재 하이라이트된 탭과 현재 경로가 다른 경우 1초 후 탭이 원래 경로에 해당하는 탭으로 돌아감.
        if(highlightRoute.path !== pathname){
            const timer = setInterval(() => {
                const route = routes.find((route) => route.path === pathname);
                setHighlightRoute(route ? route : { path: '/', label: 'Me', position: '6.6vw' });
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
        <>
            <NavWrapper>
                <Nav $navwidth = {navwidth} $navheight = {navheight} $navbackgroundcolor = {navbackgroundcolor} >
                    {routes.map((route) => (
                        <NavLink $navtabfontsize={navtabfontsize} key={route.path} to={route.path} onMouseEnter={() => handleHover(route)}>
                            {route.label}
                        </NavLink>
                    ))}
                    <Highlight $highlighttabwidth={highlighttabwidth} $highlighttabcolorone={highlighttabcolorone} $highlighttabcolortwo={highlighttabcolortwo} style={{ left: `${highlightRoute.position}` }} />
                </Nav>
            </NavWrapper>
        </>

    );
};

const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default NavigationMenu1;
