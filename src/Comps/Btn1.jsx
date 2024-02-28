import styled, { css } from 'styled-components';

// Define the container styled component
const Container = styled.div`
 width: auto;
 display: flex;
 flex-direction: column;
 // Uncomment the border if needed
 // border: 2px solid black;
`;

// Define the button styled component
const Button = styled.button`
 margin: 20px auto;
 border: none;
 padding: 10px 44px;
 font-size: 36px;
 position: relative;

 &::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
 }
    
 &:hover {
    &::before {
      background: black;
      width: 100%;
    }
 }

 ${props => props.rounded && css`
    border-radius: 50px;

    &::before {
      border-radius: 50px;
      width: 25%;
      background: #00F0B5;
    }

    &:hover {
      &::before {
        background: #00F0B5;
        width: 100%;
      }
    }
 `}
`;

// Define the styled-component for the text inside the button
const ButtonText = styled.span`
  
`;

// eslint-disable-next-line react/prop-types
const Btn1 = ({ rounded, children }) => (
    <Container>
        <Button rounded={rounded}>
            <ButtonText className="btn-text">{children}</ButtonText>
        </Button>
    </Container>
);

export default Btn1;
