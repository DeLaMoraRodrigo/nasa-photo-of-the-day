import React, { useState } from "react";
import "./App.css";
import CardData from "./components/CardData";
import SecondCardData from "./components/SecondCardData";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function App() {
  const [color, setColor] = useState("black");

  const GlobalStyle = createGlobalStyle `
  body {
    background-color: ${color};
    font-size: 62.5%;
  }
  `;

  const SecondCardDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
  `;

  const SuperH1 = styled.h1 `
    background-color: crimson;
    color: black;
    font-size: 5rem;
  `;

  const SpaceButton = styled.button `
    padding: 1vh 2%;
    border-radius: 5%;
    background-color: white;
    margin-top: 1vh;
    font-size: 1rem;
    &:hover {
      color: orange;
    }
  `;

  const SpaceButton2 = styled.button `
    padding: 1vh 2%;
    border-radius: 5%;
    background-color: black;
    color: white;
    margin-top: 1vh;
    font-size: 1rem;
    &:hover {
      color: orange;
    }
  `;

  return (
    <div className="App">
      <>
        <GlobalStyle whiteColor />
      </>
      <SpaceButton onClick={() => setColor("white")}>Light Theme</SpaceButton>
      <SpaceButton2 onClick={() => setColor("black")}>Dark Theme</SpaceButton2>
      <CardData />
      <h2 css={css `color: red; font-size: 5rem;`}>Please Work Emotion</h2>
      <SuperH1>Curiosity Rover Mast Photos</SuperH1>
      <SecondCardDiv>
        <SecondCardData />
      </SecondCardDiv>
    </div>
  );
}

export default App;
