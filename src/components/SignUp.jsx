import React, {useRef} from "react";
import axios from "axios";
import styled from "styled-components"


const SignupStyle = styled.div `
    box-sizing: border-box;
    height: 100vh;
    max-width: 100vw;
    display:flex;
    justify-content: center;
    background-color: pink;

    .signup-form{
        box-sizing: border-box;
        width: 40%;
        height: 50%;
        margin-top: 10%;
        background-color: white;
        border-radius: 20px;
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
        margin: 0.5rem auto;
        height: 2rem;
    }

    @media only screen and (max-width: 900px){
        input{
            margin-bottom: 2rem
        }
    }

    @media only screen and (max-width: 600px){
        h1{
            margin-bottom: 2rem;
        }
        input{
            margin: 3rem auto;
        }
    }
`


export default function Signup (props){

    const usernameRef = useRef();
    const passwordRef = useRef();

    function submit(event){
        event.preventDefault();

        axios.post("", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: passwordRef.current.value
        })

        .then(response =>{
            localStorage.setItem('token', response.data.token)
            props.history.push()
        })

        .catch(error => {
            console.log(error)
        })

    }



    return(
       <SignupStyle>
           <div className = "signup-form">
                <h1>Sign up</h1>
                <form>
                    <label>
                        Username
                        <input name = "username" type = "text" ref={usernameRef}/>
                    </label>
                    <label>
                        Password
                        <input name = "password" type ="password" ref ={passwordRef}/>
                    </label>
                    <label>
                        Confirm password
                        <input name = "confirm password" type ="password" ref ={passwordRef}/>
                    </label>
                    <button onClick = {submit}>Submit</button>
                </form>
            </div>
        </SignupStyle>
    )
}