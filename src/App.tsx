import React from 'react';
import './App.css';
import Img from './img.svg'
import styled, {css} from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
          <Card>
              <img src={Img} alt="img"/>
              <CardContent>
                  <Headline>Headline</Headline>
                  <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
                  <ButtonWrapper>
                      <Button>See more</Button>
                      <Button outlined>Save</Button>
                  </ButtonWrapper>
              </CardContent>
          </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  
  display: flex;
  
  flex-direction: column;
  gap: 10px;

  font-family: Inter, Arial, sans-serif;
  
  user-select: none;
`

const Headline = styled.h1`
  font-size: 16px;
  margin: 0;
`

const CardContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  
  padding: 10px;
  gap: 20px;
`

const Paragraph = styled.p`
  color: #ABB3BA;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`

type ButtonType = {
    outlined?: boolean
}

const Button = styled.button<ButtonType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #4E71FE;
  color: white;
  font-size: 10px;
  font-weight: 700;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  
  ${props => props.outlined && css<ButtonType>`
    background-color: transparent;
    color: #4E71FE;
    border: 2px solid #4E71FE;
  `}
`
