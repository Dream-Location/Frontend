import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import EndCard from "./EndCard";
import axiosWithAuth from "../../axiosWithAuth/index";
import styled from "styled-components";

const LocationCardStyle = styled.div `

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
                  {/* <img src={location.imageUrl} alt="room"/> */}
                </div>
                <div className="locationCard-properties">
                  <h1>{location.description}</h1>
                  <p>{location.city}</p>
                  <p>{location.country}</p>
                  <h3>${location.price}</h3>
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

