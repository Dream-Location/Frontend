import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import EndCard from "./EndCard";
import axiosWithAuth from "../../axiosWithAuth/index";
import styled from "styled-components";
import LocationList from "../LocationList";
import { Link } from "react-router-dom"

const LocationCardStyle = styled.div `
  height: 100%;
  border-radius: 10px;

  .locationCard-image{
    width: 100%;
    height: 200px;
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


  onSwipe(data) {
    console.log("I was swiped.");
  }

  
  

  onSwipeLeft(data) {
    console.log("I was swiped left.");
    this.addToFave = () =>{
      axiosWithAuth()
      .get('https://dreamlocations.herokuapp.com/api/favourite')
      .then(response => {
        console.log(this.state.addToFave)
        this.setState({
          addToFave: this.state.addToFave
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
    
  }

  onSwipeRight(data) {
    console.log("I was swiped right.");
  }

  onDoubleTap(data) {
    console.log("I was double tapped.");
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
      backgroundColor: "#fff"
    }
    return(
      <CardWrapper addEndCard = {this.getEndCard.bind(this)} style = {wrapperStyle}> 
        {this.state.locations.map ((location) => (
          <Card 
          style = {cardStyle}
          key = {location.id}
          onSwipe={this.onSwipe.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onDoubleTap={this.onDoubleTap.bind(this)}
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
    );
  }
}

