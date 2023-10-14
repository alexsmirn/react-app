import React from "react";
import styled from "styled-components";
import {LoginButton} from "./ShopComponent";
import {Link} from "react-router-dom";
import {Card} from "./CardComponent";

import {Header} from "../App";
import {Box} from "../styles/StyledComponents/Box.styled";
import Svg from "../styles/sprite.svg"
import {Button} from "../styles/StyledComponents/Button.styled";

export function LoginComponent() {
    return (
        <div>
           <Box>
               <LoginForm as='form'>
                       <div>
                           <label htmlFor="user-name">Username</label>
                           <input id='user-name' placeholder='Username' type="text" name='userName'/>
                       </div>

                       <div>
                           <label htmlFor="password">Password</label>
                           <input id='password' placeholder='Password' type="password" name='password'/>
                       </div>

                       <div>
                           <label htmlFor="email">Email</label>
                           <input type="email" placeholder='example@gmail.com' id='email' name='email'/>
                       </div>

                   <Button>Login</Button>
               </LoginForm>
               <Header>
                   <ShopButton buttonColor='#6b7d5c'>
                       <Link to='/'>
                           Go back to shop <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <use xlinkHref={`${Svg}#goBack-icon`}></use>
                       </svg>
                       </Link>
                   </ShopButton>
               </Header>
           </Box>
        </div>
    )
}

const ShopButton = styled(LoginButton)`
  width: 360px;
  
  svg {
    fill: white;
}
`

const LoginForm = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  
  padding: 30px;
  height: 350px;
  
  input {
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    color: black;
  }
`