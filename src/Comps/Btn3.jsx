import styled, { keyframes } from 'styled-components';
import {useNavigate} from "react-router-dom";

// CSS 애니메이션 정의
const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

// 스타일링된 컴포넌트 정의
const GlowButton = styled.button`
 font-size:2vw;
 font-weight: bold;
 width: 20vw;
 height: 20vw;
 outline: none;
 color: white;
 border: 5px solid white;
 background: transparent;
 cursor: pointer;
 position: relative;
 z-index: 0;
 border-radius: 10px;
    
 &:before {
    content: '';
    background: linear-gradient(45deg, #FFC0CB, #FFA500, #800080, #008000, #00FFFF, #0000FF, #000080, #FFD700, #A52A2A);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
 }

 &:active {
    color: white;
 }

 &:active:after {
    background: transparent;
 }

 &:hover:before {
    opacity: 1;
 }

 &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    border-radius: 10px;
 }
`;

// eslint-disable-next-line react/prop-types
const Btn3 = ({name, path}) => {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    }
    return (
        < >
            <GlowButton onClick={() => BtnHandler(path)} type="button">{name}</GlowButton>
        </>
    );
};

export default Btn3;
