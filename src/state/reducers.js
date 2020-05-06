import {GET_LOCATION, ADD_TO_FAVOURITE} from './actionTypes'


const initialState = {
    location : []
}

export function locationReducer (state = initialState, action){
    switch(action.type){
        case GET_LOCATION:
            
            return action.payload
        default:
            return state
    }
}
