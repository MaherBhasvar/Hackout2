import Axios from 'axios';
import {
    CURRENT_LOCATION,
    GET_ERRORS,
} from './types';

const axios = Axios.create({
    baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY',
    timeout: 1000,
    headers: {
        // 'X-Custom-Header': 'foobar',
        'Content-Type': 'application/x-www-form-urlencoded',
        // ['Content-Type']: 'application/json;charset=utf-8',
        // ['Access-Control-Allow-Origin']: '*',
    }
});


