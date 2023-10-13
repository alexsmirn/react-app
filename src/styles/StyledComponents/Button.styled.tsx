
import styled, {css} from "styled-components";

type ButtonType = {
    outlined?: boolean
    buttonColor?: string
}
export const Button = styled.button<ButtonType>`
  width: auto;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.buttonColor || '#4E71FE'};
  color: white;
  font-size: 15px;
  font-weight: 500;
  transition: transform 0.3s;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  
  svg {
    fill: black;
  }
  
  ${props => props.outlined && css<ButtonType>`
    background-color: transparent;
    color: ${props => props.buttonColor || '#4E71FE'};
    border: 1px solid ${props => props.buttonColor || '#4E71FE'};
  `}
`