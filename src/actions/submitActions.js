import Axios from 'axios';
import {
    SHOW_JOURNEY,
    GET_ERRORS,
} from './types';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:54545/',
    timeout: 1000,
    headers: {
        // 'X-Custom-Header': 'foobar',
        'Content-Type': 'application/x-www-form-urlencoded',
        ['Content-Type']: 'application/json;charset=utf-8',
        ['Access-Control-Allow-Origin']: '*',
    }
});

export const submitData = (data) => dispatch => {

    // axios.get('/')
    //     .then(res => {
    //         console.log(res.data)
    //         dispatch({
    //             type: SHOW_JOURNEY,
    //             payload: res.data,
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({
    //             type: GET_ERRORS,
    //             payload: err.response.data
    //         })
    //     })
    axios.post('/flight', data)
        .then(res => {
            console.log("actions", res.data)
            dispatch({
                type: SHOW_JOURNEY,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                //payload: err.response.data
            })
        })

}


// export const animalRegistration = (data, history) => dispatch => {
//     axios.post('/api/animalRegistration', data)
//         .then(res => {
//             //Lock AR
//             dispatch({
//                 type: LOCK_AR,
//             });
//             dispatch({
//                 type: AR,
//                 payload: res.data,
//             });
//             //
//             history.push('/animalInsemination');
//         })
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// }