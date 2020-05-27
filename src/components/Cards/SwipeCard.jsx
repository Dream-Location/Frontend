import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import EndCard from "./EndCard";
import axiosWithAuth from "../../axiosWithAuth/index";
import styled from "styled-components";
import NavBar from '../NavBar';

const LocationCardStyle = styled.div `
  height: 100%;
  border-radius: 10px;
  pointer-events: none;

  .locationCard-image{
    width: 100%;
    height: 280px;
    border-radius:10px 10px 0 0;
  }

  .locationCard-image img{
    width:100%;
    height:100%;
    border-radius:10px 10px 0 0;
  }

  .locationCard-properties{
    padding: 1rem;
    text-align: center;
  }

`

export default class SwipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {locations: [], name: "dimeji"};
  }

  componentDidMount() {
    axiosWithAuth()
        .get('https://dreamlocations.herokuapp.com/api/location')
        .then(response =>{
          console.log(this.state.locations)
          console.log("this ran")
            this.setState({
              locations: response.data.locations
            })
        })
        .catch(error => {
            console.log(error)
        })
  }

  onSwipeLeft(data) {
    console.log("I was swiped left.");
      
  }

  onSwipeRight(data) {
    console.log("I was swiped right.");
    console.log(data)
      const payload = {
        location: data.id
      }
      axiosWithAuth()
      .post('https://dreamlocations.herokuapp.com/api/favourite', payload)
      .then(response => {
        alert("added to favourites")
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  getEndCard(){
    return(
      <EndCard/>
    )
  }
  render() {
    const wrapperStyle = {
      backgroundColor: "#faedB8"
    }
    
    const cardStyle = {
      backgroundColor: "#fff",
      minWidth: "60vw"
    }
    return(
      <div>
        <NavBar favorites={true} logout={true} locations={true} />
        <CardWrapper addEndCard = {this.getEndCard.bind(this)} style = {wrapperStyle}>
        {this.state.locations.map ((location) => (
          <Card 
          style = {cardStyle}
          key = {location.id}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          data={location}
          >
            <LocationCardStyle>
              <div className = "locationCard-conatiner" >
                <div className = "locationCard-image">
                  <img src={location.imageUrl} alt= {location.description}/>
                </div>
                <div className="locationCard-properties">
                  <h1>{location.description}</h1>
                  <p>{location.city}, {location.country} </p>
                  <h3>${location.price}/night</h3>
                  <p>{location.rating} stars</p>
                </div>
              </div>
            </LocationCardStyle>
          </Card>
          ))}
      </CardWrapper>
      </div>
    );
  }
}

