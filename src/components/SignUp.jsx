import React, {useRef} from "react";
import axios from "axios";
import styled from "styled-components"
import {Link} from "react-router-dom";



const SignupStyle = styled.div `
    box-sizing: border-box;
    height: 100vh;
    max-width: 100vw;
    display:flex;
    justify-content: center;
    background-color: #faedB8;

    h1{
        text-align: center;
    }

    .signup-form{
        box-sizing: border-box;
        width: 40%;
        height: 50%;
        margin-top: 10%;
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    }

    @media only screen and (max-width: 900px){
        .signup-form{
            width: 70%;
            height: 60%;
            margin-top: 10%;
        }
    }

    @media only screen and (max-width: 600px){
        .signup-form{
            box-sizing: border-box;
            width: 100%;
            height: 100vh;
            margin-top: 0;
            background-color: white;
            border-radius: 0;
        }
    }

    form{
        box-sizing: border-box;
        width: 100%;
        height: auto;
    }

    input{
        display: block;
        width: 60%;
        margin: 1rem auto;
        height: 2rem;
    }



    button{
        display: block;
        width: 30%;
        height: 4em;
        margin: 0 auto;
        border-radius: 5px;
        background-color: #faedB8;
        border-color: #faedB8;
        color: #fff;
        font-weight: bold;
    }
    
    button:hover{
        color: #faedB8;;
        background-color: #fff;
    }
   

    @media only screen and (max-width: 900px){
        input{
            margin-bottom: 2rem;
        }
    }

    @media only screen and (max-width: 600px){
        h1{
            margin-bottom: 5rem;
        }
        input{
            margin: 1rem auto 7rem auto;
        }
    }

    .switchpage{
        text-align: center;
    }

    a{
        color: #faedB8;
        text-decoration: none;
    }

    a:hover{
        color: grey;
        text-decoration: underline;
    }

`


export default function Signup (props){

    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef()

    function submit(event){
        event.preventDefault();

        if(confirmPasswordRef.current.value !==  passwordRef.current.value){
            alert('passwords do not match')
        }

        else{

            axios.post("https://dreamlocations.herokuapp.com/api/auth/register", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            })

            .then(response =>{
                localStorage.setItem('token', response.data.token)
                props.history.push("/home")
            })

            .catch(error => {
                console.log(error)
            })

        }

        

    }



    return(
       <SignupStyle>
           <div className = "signup-form">
                <h1>Sign up</h1>
                <form>
                    <input name = "username" type = "text" ref={usernameRef} placeholder= "username"/>
                    <input name = "password" type ="password" ref ={passwordRef} placeholder= "password"/>
                    <input name = "confirm password" type ="password" ref ={confirmPasswordRef} placeholder = "confirm password"/>
                    <button onClick = {submit}>Submit</button>
                    <p class = "switchpage">Already have an existing account? <Link exact to= "/login">Log In</Link></p>
                </form>
            </div>
        </SignupStyle>
    )
}