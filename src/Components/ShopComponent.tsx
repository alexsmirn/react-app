import React from "react";
import {CardComponent} from "./CardComponent";
import AJ1LowTS from "../images/AJ1LowTS.png";
import NikeDunkTS from "../images/NikeDunkTravisScott.png";
import {CardsWrapper, Header} from "../App";
import styled from "styled-components";
import {Button} from "../styles/StyledComponents/Button.styled";
import {Link} from "react-router-dom";

export function ShopComponent() {
    return (
        <div className='shopWrapper'>
            <Header>
                <LoginButton buttonColor='#6b7d5c'>
                    <Link to='login'>Login</Link>
                </LoginButton>
            </Header>
            <CardsWrapper>
                <CardComponent img={AJ1LowTS} name={'Jordan 1 Retro Low OG'} description={'Travis Scott Reverse Mocha'}></CardComponent>
                <CardComponent img={NikeDunkTS} name={'Nike SB Dunk Low'} description={'Travis Scott'}></CardComponent>
            </CardsWrapper>
        </div>
    )
}

export const LoginButton = styled(Button)`
  width: 600px;
  height: 60px;
  font-size: 30px;
  
  a {
    text-decoration: none;
    color: white;
  }
`