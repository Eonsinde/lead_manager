import { CREATE_MESSAGE, GET_ERRORS } from './types';


// create message
export const createMessage = msg => { // we don't pass in dispatch here becos 
    // we are not making any async requests
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

// return errors
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    }
}