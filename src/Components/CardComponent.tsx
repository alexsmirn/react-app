import React from "react";
import styled, {css} from "styled-components";
import Svg from "../styles/sprite.svg"
import {Button} from "../styles/StyledComponents/Button.styled";

type CardComponentTypes = {
    img: string
    name: string
    description: string
}
export function CardComponent(props: CardComponentTypes) {
    return (
            <Card>
                <ImgContainer>
                    <img src={props.img} alt=""/>
                </ImgContainer>
                <CardContent>
                    <Headline>{props.name}</Headline>
                    <Paragraph>{props.description}</Paragraph>
                    <ButtonWrapper>
                        <Select as='select' outlined name='Size' buttonColor='black'>
                            <option value='41'>41</option>
                            <option value='42'>42</option>
                            <option value='43'>43</option>
                            <option value='44'>44</option>
                        </Select>
                        <Button outlined buttonColor='black'>
                            Add to cart
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${Svg}#cart-icon`}></use>
                            </svg>
                        </Button>
                    </ButtonWrapper>
                </CardContent>
            </Card>
    )
}



export const Card = styled.div`
  width: 300px;
  height: auto;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  
  display: flex;
  
  flex-direction: column;
  gap: 10px;

  font-family: Inter, Arial, sans-serif;
  
  user-select: none;
  
  img {
    max-height: 200px;
  }
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

const Select = styled(Button)`
  padding: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::after {
    content: "\25BE";
    font-size: 100px;
  }
`

const ImgContainer = styled.div`
  position: relative;
`