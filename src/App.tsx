import React from 'react';
import './App.css';
import {Box} from "./styles/StyledComponents/Box.styled";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ShopComponent} from "./Components/ShopComponent";
import {LoginComponent} from "./Components/LoginComponent";

function App() {
  return (
    <div className="App">
        <Router>
            <Box>
                <Routes>
                    <Route path='/' element={<ShopComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
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


