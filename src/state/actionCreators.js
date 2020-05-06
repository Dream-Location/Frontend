import { GET_LOCATION, ADD_TO_FAVOURITE } from './actionTypes';


export function getLocation (){
    
    return {
        type: GET_LOCATION,
    }
}


export function addToFav (item){
    return {
        type: ADD_TO_FAVOURITE,
        payload: item
    }
}