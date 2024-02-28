import styled from "styled-components";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HoverButton = ({path,name}) => {
    const navigate = useNavigate();

    const BtnHandler = (path) => {
        navigate(path);
    }

    return (
        <CustomBtn
            onClick={() => BtnHandler(path)}
        >
            {name}
        </CustomBtn>
    );
};

export default HoverButton;



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
    &:hover {
        box-shadow: none;
        color: #4CAF50;
    }
`