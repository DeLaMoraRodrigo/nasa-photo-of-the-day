import React from "react";
import styled from "styled-components";

const BigH1 = styled.h1 `
    background-color: dodgerblue;
    color: black;
    font-size: 5rem;
`;

const PodImg = styled.img `
    height: 70vh;
    width: 80%;
    border-radius: 5%;
    border: 5px solid dodgerblue;
`;

const CardMaker = props => {
    // console.log(props);
    return (
        <div className="cardDiv">
            <BigH1>NASA Photo of the Day!!!</BigH1>
            <PodImg className="cardImg" alt="Nasa Photo of the Day" src={props.photo.url} />
        </div>
    )
}

export default CardMaker;