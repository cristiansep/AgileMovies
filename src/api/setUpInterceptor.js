import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshToken } from "../state/actions/authActions";
import agileApi from ".";
import { store } from '../state/store';

const setup = () => {

  const { dispatch } = store;
  agileApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/auth/login" && err.response) {


        const refresh = await AsyncStorage.getItem('@refresh');

        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const resp = await agileApi.post("/api/auth/refresh", {
              refreshToken: refresh
            });

            const { token } = resp.data.data.payload;
             console.log(token)


            dispatch(refreshToken(token));
            // TokenService.updateLocalAccessToken(accessToken);
            await AsyncStorage.setItem('@token',token);

            return agileApi(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }




      }

      return Promise.reject(err);
    }
  );
};

export default setup;