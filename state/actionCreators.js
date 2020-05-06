import { GET_LOCATION, ADD_TO_FAVOURITE } from './actionTypes';


function getLocation (){
    
    return {
        type: GET_LOCATION,
    }
}


function addToFav (item){
    return {
        type: ADD_TO_FAVOURITE,
        payload: item
    }
}