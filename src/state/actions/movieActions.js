import agileApi from "../../api";
import { types } from "../../types";



export const getNewMovies = () => async (dispatch) => {
    try {
      const resp = await agileApi.get('api/movies/now_playing');
        
        dispatch({
          type: types.setMovieNews,
          payload: {
            news: resp.data.data,
            base: resp.data.imageBaseUrl,
        }});
        
  
    } catch (error) {
      console.log(error.response)
    }
};


export const getMoreNewMovies = (page) => async (dispatch) => {

    try {
      const resp = await agileApi.get(`api/movies/now_playing?page=${page}`);
      
        
        dispatch({
          type: types.moreNewMovies,
          payload:resp.data.data,
        });

        dispatch({type: types.movieLodingFalse})
        
  
    } catch (error) {
      console.log(error.response)
      dispatch({type: types.movieLodingFalse})
    }
};


export const getMorePopular = (page) => async (dispatch) => {

  try {
    const resp = await agileApi.get(`api/movies/popular?page=${page}`);
    
      
      dispatch({
        type: types.morePopular,
        payload:resp.data.data,
      });

      dispatch({type: types.movieLodingFalse})
      

  } catch (error) {
    console.log(error.response)
    dispatch({type: types.movieLodingFalse})
  }
};



export const getPopularMovies = () => async (dispatch) => {
  try {
    const resp = await agileApi.get('api/movies/popular');
    
      dispatch({
        type: types.setMoviePopular,
        payload: resp.data.data
      });
      

  } catch (error) {
    console.log(error.response)
  }
};


export const getActors = (id) => async (dispatch) => {
  try {
    const resp = await agileApi.get(`api/movies/${id}/actors`);
    
      dispatch({
        type: types.setActors,
        payload: resp.data.data
      });
      

  } catch (error) {
    console.log(error.response)
  }
};



export const actorsClear = () => ({type: types.clearActor});
export const movieLoadingMore = () => ({type: types.setMovieLoading});




