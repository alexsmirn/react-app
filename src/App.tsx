import React from 'react';
import './App.css';
import {Card, CardComponent} from "./Components/CardComponent";
import Img from "./images/img.svg"
import AJ1LowTS from "./images/AJ1LowTS.png"
import AJ4BlackCat from "./images/AJ4BlackCat.png"
import PngAJ1LowTS from "./images/TraviScottJordan1Low.png"
import AF1 from "./images/AF1_Emoji.png"
import NikeDunkTS from "./images/NikeDunkTravisScott.png"
import {Box} from "./styles/StyledComponents/Box.styled";
import styled from "styled-components";
import {Button} from "./styles/StyledComponents/Button.styled";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ShopComponent} from "./Components/ShopComponent";
import {LoginComponent} from "./Components/LoginComponent";

function App() {
  return (
    <div className="App">
        <Router>
            <Box>
                <Routes>
                    <Route path='/portfolio' element={<ShopComponent/>}/>
                    <Route path='/portfolio/login' element={<LoginComponent/>}/>
                </Routes>
            </Box>
        </Router>
    </div>
  );
}

export default App;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 50px;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  margin-top: 30px;
`


