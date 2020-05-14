import React, { useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth/index";
import styled from "styled-components";

const HomeStyle = styled.div `
    min-height: 100vh;
    width: 100vw;
    text-align:center;

    h1{
        margin: 5rem 0;
    }

    .locations-conatiner{
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .location-container{
        width: 30%;
        height: auto;
        display: flex;
        flex-direction: column;
        justfiy-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    }

    @media only screen and (min-width:901px){

        .location-container{
            width: 25%;
        }
    }

    @media only screen and (max-width:500px){

        .location-container{
            width: 60%;
            margin: 2rem 0;
        }
    }

    .location-image{
        height: 150px;
        width:100%;
        border-radius: 14px 14px 0 0 ;
    }

    .location-image img{
        height: 100%;
        width:100%;
        border-radius: 14px 14px 0 0 ;
    }
`

function LocationList (props){

    useEffect(()=>{
        axiosWithAuth()
        .get('https://dreamlocations.herokuapp.com/api/location')
        .then(response =>{
            props.setLocations(response.data.locations)
        })
        .catch(error => {
            console.log(error)
        })
    })

    return(
        <HomeStyle>
        <div>
            <h1>Welcome</h1>
                <div className = "locations-conatiner">
                {props.locations.map(location =>(
                    <div className = "location-container" key = {location.id}>
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
        </HomeStyle>
    )
}

export default LocationList;