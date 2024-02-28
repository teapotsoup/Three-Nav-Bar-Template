import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HoverButton = ({ path, name }) => {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    };

    return (
        <CustomBtn onClick={() => BtnHandler(path)}>
            {name}
        </CustomBtn>
    );
};

export default HoverButton;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CustomBtn = styled.button`
 font-size: 50px;
 color: white;
 cursor: pointer;
 transition: all 0.3s ease;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
 border-radius: 100%;
 width: 500px;
 height: 500px;
 background-color: transparent;
 border: 5px solid white;
 position: relative; // 동그라미를 위한 위치 설정
 &:hover {
    box-shadow: none;
    color: #4CAF50;
    &:before { // 동그라미를 위한 가상 요소
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: ${spin} 2s linear infinite; // 동그라미 회전 애니메이션
    }
 }
`;
