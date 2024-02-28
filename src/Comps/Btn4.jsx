import styled, { keyframes } from 'styled-components';

// CSS 애니메이션 정의
const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

// 스타일링된 컴포넌트 정의
const GlowButton = styled.button`
 width: 220px;
 height: 50px;
 border: none;
 outline: none;
 color: #fff;
 background: #111;
 cursor: pointer;
 position: relative;
 z-index: 0;
 border-radius: 10px;

 &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
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
    color: #000;
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
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
 }
`;

// React 컴포넌트 정의
const Btn4 = () => {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000',
        }}>
            <GlowButton type="button">HOVER ME, THEN CLICK ME!</GlowButton>
        </div>
    );
};

export default Btn4;
