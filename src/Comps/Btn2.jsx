import styled from 'styled-components';

const StyledLink = styled.a`
 box-sizing: border-box;
 border: 2px solid currentColor;
 border-radius: 3rem;
 color: yellow;
 font-family: 'Roboto', sans-serif;
 font-size: 4rem;
 font-weight: 100;
 overflow: hidden;
 padding: 1rem 2rem;
 position: relative;
 text-decoration: none;
 transition: .2s transform ease-in-out;
 will-change: transform;
 z-index: 0;

 &::after {
    background-color: yellow;
    border-radius: 3rem;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: .2s transform ease-out;
    will-change: transform;
    z-index: -1;
 }

 &:hover::after {
    transform: translate(0, 0);
 }

 &:hover {
    border: 2px solid transparent;
    color: indigo;
    transform: scale(1.05);
    will-change: transform;
 }
`;

const Btn2 = () => {
    return <StyledLink href="#">coolBeans hover me</StyledLink>;
};

export default Btn2;
