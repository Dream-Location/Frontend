import React, { useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth/index";



function Favourites (props){
    useEffect(()=>{
        axiosWithAuth()
        .get('https://dreamlocations.herokuapp.com/api/favourite')
        .then(response =>{
            props.setLocations(response.data.locations)
        })
        .catch(error => {
            console.log(error)
        })
    })
    return(
        <div className = "favourites-container">
            <div>
            <h1>Home</h1>
            {props.locations.map(location =>(
                <div className = "location-container">
                    <div className = "location-image">
                        <img src = {location.imageUrl} alt = {location.description}/>
                    </div>
                    <div className = "location-properties">
                        <p>{location.description}</p>
                        <p>{location.city}, {location.country}</p>
                        <h3>G{location.price}</h3>
                        <p>{location.rating} stars</p>
                    </div>

                </div>
            ))} 
        </div>
        </div>
    )
}

export default Favourites;