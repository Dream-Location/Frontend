import React, { useRef } from "react";
import axiosWithAuth from "../axiosWithAuth/index";
import styled from "styled-components";

const NewPost = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .newLocation{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #faedB8;
    }

    .newLocation-form{
        border-radius: 20px;
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
        background-color: white;
        padding: 0 2rem;
    }

    @media only screen and (min-width: 901px){
        .newLocation-form{
            width: 50%;
        }
    }


    form{
        // border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 65%;
    }

    form input{
        margin: 1rem 0;
        padding: 0.8rem;
    }

    button{
        width: 70%;
        margin: auto;
        padding: 1rem;
        background-color: #faedB8;
        border: 1px solid  #faedB8;   
    }

    button:hover{
        background-color: #fff;
        color: #c8c8c8;
        font-weight: bold;
    }

    .post-location input{
        margin: auto 0.5rem;
    }
`


export default function CreateLocation(props){
    const description = useRef();
    const imageURL = useRef();
    const city = useRef();
    const country = useRef();
    const price = useRef();
    const rating =useRef();


    function createlocation(event){
        event.preventDefault();
        axiosWithAuth()
        .post('https://dreamlocations.herokuapp.com/api/location/', {
            description: description.current.value,
            imageURL: imageURL.current.value,
            city: city.current.value,
            country: country.current.value,
            price: price.current.value,
            rating: rating.current.value,
        })
        .then(response =>{
            props.newLocation(response.data.locations)
            props.history.push("/home")
        })
        .catch(error =>{
            alert(error)
        })
    }


    return(
        <NewPost>
            <div className = "newLocation">
                <div className = "newLocation-form">
                    <h1>Create new Posting</h1>
                    <p>*please fill in all fields</p>
                    <form>
                        <input type="text" name = "image" placeholder = "image URL" ref={imageURL}/>
                        <input type="text" name = "description" placeholder = "description" ref={description}/>
                        <div className="post-location">
                            <input type="text" name = "city" placeholder = "city" ref={city}/>
                            <input type="text" name = "country" placeholder = "country" ref={country}/>
                        </div>
                        <input type="number" name = "price" placeholder = "price" ref={price}/>
                        <input type="number" name = "rating" placeholder = "rating" ref={rating}/>
                        <button onClick = {createlocation}>Submit</button>
                    </form>
                </div>
            </div>
        </NewPost>
    )
}