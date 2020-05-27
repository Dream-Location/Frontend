import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavStyle = styled.div `

.header-section {
    background: white;
    height: 30px;
  }
  header {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    width: 100vw;

    a {
      cursor: pointer;
    }

  }
  header img {
    height: 50px;
  }
  @media (max-width: 800px) {
    header img {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 500px) {
    header img {
      margin-bottom: unset;
    }
  }
  header nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  header nav a {
    text-decoration: none;
    color: black;
    font-size: .8rem;
    text-transform: uppercase;
    padding: 0 20px;
    justify-content: flex-end;
  }
  header nav a:hover {
    color: #ffc107;
  }
  header nav a:focus {
    color: #ffc107;
  }
  @media (max-width: 500px) {
    header nav a {
      border-bottom: 2px solid #ffc107;
      width: 70vw;
      font-size: 1rem;
      padding: 20px 0;
    }
  }
  @media (max-width: 500px) {
    header nav {
      flex-direction: column;
      text-align: center;
    }
  }
  @media (max-width: 800px) {
    header {
      flex-direction: column;
    }
  }

`

const NavBar = (props) => {
  const { back, locations, favorites, login, register, logout } = props


  const onLogout = event => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  const goBack = event => {
    event.preventDefault();
    back.goBack()
  }

  return (
    <NavStyle>
    <header className='header-section' >
      <nav className="nav-bar">
        {locations ? <Link to='/home'>LOCATIONS</Link> : null}
        {favorites ? <Link to='/favourites'>FAVOURITES</Link> : null}
        {back ? <Link onClick={goBack}>BACK</Link> : null}
        {login ? <Link to='/login'>LOGIN</Link> : null}
        {register ? <Link to='/'>REGISTER</Link> : null}
        {logout ? <Link to='/' onClick={onLogout}>LOGOUT</Link> : null}
      </nav>

    </header>
    </NavStyle>
  );

}


export default NavBar;