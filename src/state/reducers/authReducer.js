import { types } from "../../types";

const initialState = {
    isAuthenticated: false,
    errorMessage: null,
    user: null,
    token: null,
    refreshToken: null,
    status: 'checking'
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
              ...state,
              user: action.payload.user,
              status: 'authenticated',
              token: action.payload.token,
              refreshToken: action.payload.refreshToken,
            }
        case types.authLogout:
            return {
              errorMessage: null,
              status: 'not-authenticated'
            }
        case types.setRefreshToken:
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state;
    }
  
}
