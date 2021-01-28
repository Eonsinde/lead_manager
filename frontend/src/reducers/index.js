import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';


let rootReducer = combineReducers({ 
    leads,
    errors,
    messages, 
    auth,
});

export default rootReducer;