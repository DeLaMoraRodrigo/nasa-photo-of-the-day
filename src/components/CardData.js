import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardData = () => {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=qYBm7zvyHXnzIMxeTLllgBKx4bQ7XzVPU0ZxoaEU")
            .then( response => {
                // console.log(response);
                setPhoto(response.data)
            })
            .catch( error => {
                console.log("The data did not get returned", error);
            })
    }, [])

    return (
        <Card photo={photo}/>
    )
}

export default CardData;
