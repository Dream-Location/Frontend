import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';
import EndCard from "./EndCard";
import axiosWithAuth from "../../axiosWithAuth/index";

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
    return(
      <CardWrapper addEndCard = {this.getEndCard.bind(this)}>
        {this.state.locations.map ((location) => (
          <Card>
            {/* <img src={location.imageUrl} alt="room"/> */}
            <h1>{location.description}</h1>
            <p>{location.city}</p>
            <p>{location.country}</p>
            <p>${location.price}</p>
            <p>{location.rating} stars</p>
          </Card>
          ))}
      </CardWrapper>
    );
  }
}

/* here */