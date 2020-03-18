import React, { useState, useEffect } from "react";
import axios from "axios";
import SecondCard from "./SecondCard";

const SecondCardData = () => {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=qYBm7zvyHXnzIMxeTLllgBKx4bQ7XzVPU0ZxoaEU")
            .then( response => {
                console.log(response);
                setPicture(response.data.photos);
            })
            .catch( error => {
                console.log("The data did not get returned", error);
            })
    }, [])

    return (
        picture.map((val, index) => (
             <SecondCard key={index} photo={val.img_src}/>
    ))
        
    )
}

export default SecondCardData;