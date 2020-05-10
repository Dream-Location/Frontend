import React, {useRef} from "react";
import axios from "axios";
import styled from "styled-components"

const LoginStyle = styled.div `
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
`



export default function LogIn(props){

    const usernameRef = useRef();
    const passwordRef = useRef();



    function submit(event){
        event.preventDefault()

        axios.post("https://dreamlocations.herokuapp.com/auth/login", {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })

        .then(response =>{
            localStorage.setItem('token', response.data.token)
            props.history.push("/home")
        })

        .catch(error => {
            console.log(error)
            alert('Username or password is incorrect')
        })
    }



    return(
        <LoginStyle>
            <div className = "signup-form">
                <h1>Log In</h1>
                <label>
                        
                    <input type="text" name ="username" ref= {usernameRef} placeholder = "username"/>
                </label>
               <label>
                   
                   <input type="password" name="password" ref ={passwordRef} placeholder = "password" />
               </label>
                <button onClick = {submit}>Log in </button>
            </div>
        </LoginStyle>
    )
}