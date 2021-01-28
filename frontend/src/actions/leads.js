import axios from 'axios';
import {GET_LEADS, ADD_LEAD, DELETE_LEADS, GET_ERRORS} from './types';
import { createMessage, returnErrors } from './message';
import { tokenConfig } from './auth';

// get leads
export const getLeads = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}

// add leads
export const addLead = (lead) => (dispatch, getState) => {
    

    axios.post('/api/leads/', lead, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
            dispatch(createMessage({ createLead: "Lead Created" }))
        }).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}

// delete leads
export const deleteLeads = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_LEADS,
                payload: id,
            })
            dispatch(createMessage({ deleteLead: "Lead Deleted" }))
        }).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        )
}