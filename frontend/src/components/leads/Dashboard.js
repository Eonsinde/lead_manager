import React, { Component } from 'react';
import Leads from './Leads';
import AddLead from './AddLead';

const Dashboard = () => {
    return ( 
        <React.Fragment>
            <AddLead />
            <Leads />
        </React.Fragment>
    );
}
 
export default Dashboard;