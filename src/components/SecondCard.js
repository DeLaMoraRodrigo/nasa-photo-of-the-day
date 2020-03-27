import React from "react";
import styled from "styled-components";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// const RoverDiv = styled.div `
//     width: 40%;
// `;

// const RoverImg = styled.img `
//     width: 100%;
//     border-radius: 5%;
//     border: 5px solid crimson;
//     margin-bottom: 5vh;
// `;

const SecondCardMaker = props => {
    console.log(props);
    return (
        <div css={css `width: 40%;`} className="cardDiv">
            <img css={css `width: 100%; border-radius: 5%; border: 5px solid crimson; margin-bottom: 5vh;`} className="cardImg" alt="Curiosity Rover Mast Pictures" src={props.photo} />
        </div>
    )
}

export default SecondCardMaker;