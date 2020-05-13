import React, { useRef } from "react";
import axiosWithAuth from "../axiosWithAuth/index";



export default function CreateLocation(){
    const description = useRef();
    const imageURL = useRef();
    const city = useRef();
    const country = useRef();
    const price = useRef();
    const rating =useRef();


    function createlocation(event){
        event.preventDefault();
        axiosWithAuth()
        .post('https://dreamlocations.herokuapp.com/api/location', {
            description = description.current.value,
            imageURL = imageURL.current.value,
            city = city.current.value,
            country = country.current.value,
            price = price.current.value,
            rating = rating.current.value,
        })
        .then(response =>{
            props.newLocation(response.data.locations)
            props.history.push("/home")
        })
        .catch(error =>{
            alert('Please ensure all fields are filled in correctly')
        })
    }


    return(
        <div className = "newLocation">
            <form>
                <h1>Create new Posting</h1>
                <p>*please fill in all fields</p>
                <input type="text" name = "image" placeholder = "image URL" ref={imageURL}/>
                <input type="text" name = "description" placeholder = "description" ref={description}/>
                <div className="post-location">
                    <input type="text" name = "city" placeholder = "city" ref={city}/>
                    <input type="text" name = "country" placeholder = "country" ref={country}/>
                </div>
                <input type="text" name = "price" placeholder = "price" ref={price}/>
                <input type="text" name = "rating" placeholder = "rating" ref={rating}/>
                <button onClick = {createlocation}>Submit</button>
            </form>
        </div>
    )
}