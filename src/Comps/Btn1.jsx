import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const StyledLink = styled.a`
 box-sizing: border-box;
 border: 2px solid currentColor;
 border-radius: 3rem;
 color: white;
 font-family: 'Roboto', sans-serif;
 font-size: 2vw;
 overflow: hidden;
 padding: 1rem 2rem;
 position: relative;
 text-decoration: none;
 transition: .2s transform ease-in-out;
 will-change: transform;
 z-index: 0;
 width: 20vw;
 height: 20vw;
 display: flex;
 justify-content: center;
 align-items: center;
  font-weight: bold;

    &::after {
    background-color: white;
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
    color: black;
    transform: scale(1.05);
    will-change: transform;
 }
`;

// eslint-disable-next-line react/prop-types
const Btn1 = ({name, path}) => {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    }

    return <StyledLink onClick={() => BtnHandler(path)}>{name}</StyledLink>;
};

export default Btn1;
