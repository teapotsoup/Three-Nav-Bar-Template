import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

// Styled Components
const Nav = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

const Ul = styled.ul`
 list-style-type: none;
 margin: 0;
 padding: 0;
`;

const Li = styled.li`
 --c: white;
 color: var(--c);
 font-size: 2vw;
 border: 0.3em solid var(--c);
 border-radius: 0.5em;
 width: 50vw;
 height: 20vw;
 display: flex;
 justify-content: center;
 align-items: center;
 text-transform: uppercase;
 font-weight: bold;
 font-family: sans-serif;
 letter-spacing: 0.1em;
 text-align: center;
 line-height: 3em;
 position: relative;
 overflow: hidden;
 z-index: 1;
 transition: 0.5s;
 margin: 1em;

 &:hover {
    color: black;
 }

 &:hover span {
    transform: translateY(0) scale(2);
 }
`;

const Span = styled.span`
 position: absolute;
 width: 25%;
 height: 100%;
 background-color: var(--c);
 transform: translateY(150%);
 border-radius: 50%;
 transition: 0.5s;
 z-index: -1;

 ${Li}:hover & {
    transform: translateY(0) scale(2);
 }

 &:nth-child(1) {
    left: calc((1 - 1) * 25%);
    transition-delay: calc((1 - 1) * 0.1s);
 }

 &:nth-child(2) {
    left: calc((2 - 1) * 25%);
    transition-delay: calc((2 - 1) * 0.1s);
 }

 &:nth-child(3) {
    left: calc((3 - 1) * 25%);
    transition-delay: calc((3 - 1) * 0.1s);
 }

 &:nth-child(4) {
    left: calc((4 - 1) * 25%);
    transition-delay: calc((4 - 1) * 0.1s);
 }
`;

// eslint-disable-next-line react/prop-types
const Btn2 = ({name, path}) => {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    }

    return (
        <Nav>
            <Ul>
                <Li onClick={() => BtnHandler(path)}>
                    {name}
                    <Span /><Span /><Span /><Span />
                </Li>
            </Ul>
        </Nav>
    );
};

export default Btn2;
