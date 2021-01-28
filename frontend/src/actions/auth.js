import axios from 'axios';
import { returnErrors, createMessage } from './message';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';


// check token and load user
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({type: USER_LOADING});
    

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({type: AUTH_ERROR});
        })
}

export const login = (username, password) => dispatch => {
    // request body
    const credentials = JSON.stringify({
        username,
        password
    });

    // headers
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    };

    axios.post('/api/auth/login', credentials, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(createMessage({ loggedIn: `Welcome ${res.data.user.username}`}));
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({type: LOGIN_FAIL});
        })
}


export const register = ({ username, email, password }) => dispatch => {
    // request body
    const credentials = JSON.stringify({
        username,
        email,
        password
    });

    // headers
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    };

    axios.post('/api/auth/register', credentials, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(createMessage({ registered: `Welcome ${res.data.user.username}`}));
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({type: REGISTER_FAIL});
        });
}

export const logout = () => (dispatch, getState) => {
  
    axios.post('/api/auth/logout', null, tokenConfig(getState))
        .then(res => dispatch({
            type: LOGOUT_SUCCESS
        }))
        .catch(e => {
            dispatch(returnErrors(e.response.data, e.response.status));
            dispatch({ type: LOGOUT_FAIL });
        })
}

export const tokenConfig = getState => {
    // get the token from state     
    const token = getState().auth.token // we're looking into our redux state, under auth reducer then the current state

    // headers 
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // if token, add to headers config 
    if (token)
        config.headers['Authorization'] = `Token ${token}`;

    return config;
}