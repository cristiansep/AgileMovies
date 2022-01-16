import agileApi from "../../api";
import { types } from "../../types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";




export const startLogin = (data) => async (dispatch) => {
    try {
      const resp = await agileApi.post('api/auth/login', data);
        
        await AsyncStorage.setItem('@token', resp.data.data.payload.token);
        await AsyncStorage.setItem('@refresh', resp.data.data.payload.refresh_token);
    
        dispatch({type: types.authLogin, payload: {
          token: resp.data.data.payload.token,
          refreshToken: resp.data.data.payload.refresh_token,
          user: resp.data.data.user,
        }});
  
    } catch (error) {
      console.log(error.response)
      Alert.alert(
        "Error",error.response.data.message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
};



export const validarToken = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('@token');
    const refresh = await AsyncStorage.getItem('@refresh');
    
    try {
        
        if(!token) {
            return dispatch({type: types.authLogout});
        }
        
        const resp = await agileApi.post('/api/auth/refresh', {
            refresh_token: refresh
      });
  
      await AsyncStorage.setItem('@token', resp.data.data.payload.token);
  
      dispatch({type: types.authLogin, payload: {
        token: resp.data.data.payload.token,
        user: resp.data.data.user,
      }});
    } catch (error) {
        console.log(error)
    }
  
  
  }



  export const refreshToken = (accessToken) => (dispatch) => {
    dispatch({
      type: types.setRefreshToken,
      payload: accessToken,
    })
  }




  export const logout = () => async(dispatch, getState)  => {


    try {
        dispatch({type: types.authLogout})
        await AsyncStorage.removeItem('@refresh');
        await AsyncStorage.removeItem('@token');
    
    } catch (error) {
      console.log(error)
    }
  
  
  }
