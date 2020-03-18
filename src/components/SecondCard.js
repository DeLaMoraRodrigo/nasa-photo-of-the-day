import React from "react";

const SecondCardMaker = props => {
    console.log(props);
    return (
        <div className="cardDiv">
            <h1>Mars Rover Photos!!!</h1>
            <img className="cardImg" alt="Curiosity Rover Mast Pictures" src={props.photo} />
        </div>
    )
}

export default SecondCardMaker;