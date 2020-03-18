import React from "react";

const cardMaker = props => {
    // console.log(props);
    return (
        <div className="cardDiv">
            <h1>NASA Photo of the Day!!!</h1>
            <img className="cardImg" alt="Nasa Photo of the Day" src={props.photo.url} />
        </div>
    )
}

export default cardMaker;