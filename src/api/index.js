import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseURL = 'http://161.35.140.236:9005/';

const agileApi = axios.create({baseURL, timeout: 30000});


agileApi.interceptors.request.use(
    async(config) => {
        const contentType = config.data instanceof FormData ? 'multipart/form-data':'application/json'
        const token = await AsyncStorage.getItem('@token');
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token
        }
        config.headers['Content-Type'] = contentType
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config;
    }
);



export default agileApi;




