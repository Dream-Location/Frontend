import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardWrapper } from 'react-swipeable-cards';
import EndCard from "./EndCard";

export default class SwipeCard extends Component {
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
        <Card>Location One</Card>
        <Card>Location Two</Card>
        <Card>Location Three</Card>
      </CardWrapper>
    );
  }
}