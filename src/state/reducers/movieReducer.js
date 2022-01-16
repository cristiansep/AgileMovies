
import { types } from "../../types";

const initialState = {
    popularMovies: null,
    newMovies: null,
    actors: null,
    imageBase: null,
    movieLoading: false
}

export const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.setMovieNews:
            return {
                ...state,
                newMovies: action.payload.news,
                imageBase: action.payload.base
            }
        case types.setMoviePopular:
            return {
                ...state,
                popularMovies: [...action.payload]
            }
        case types.setActors:
            return {
                ...state,
                actors: action.payload
            }
        case types.clearActor:
            return {
                ...state,
                actors: null,
            }
        case types.moreNewMovies:
            return {
                ...state,
                newMovies: [...state.newMovies, ...action.payload]
            }
        case types.setMovieLoading:
            return {
                ...state,
                movieLoading: true
            }
        case types.movieLodingFalse:
            return {
                ...state, 
                movieLoading: false
            }
        case types.morePopular:
            return {
                ...state,
                popularMovies: [...state.popularMovies, ...action.payload]
            }
        default:
            return state;
    }
   
}
