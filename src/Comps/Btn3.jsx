import styled from 'styled-components';

// Styled Components
const Nav = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: black;
 height: 100vh;
`;

const Ul = styled.ul`
 list-style-type: none;
 margin: 0;
 padding: 0;
`;

const Li = styled.li`
 --c: goldenrod;
 color: var(--c);
 font-size: 16px;
 border: 0.3em solid var(--c);
 border-radius: 0.5em;
 width: 12em;
 height: 3em;
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

// React Component
const Btn3 = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    home
                    <Span /><Span /><Span /><Span />
                </Li>
                <Li>
                    products
                    <Span /><Span /><Span /><Span />
                </Li>
                <Li>
                    services
                    <Span /><Span /><Span /><Span />
                </Li>
                <Li>
                    contact
                    <Span /><Span /><Span /><Span />
                </Li>
            </Ul>
        </Nav>
    );
};

export default Btn3;
