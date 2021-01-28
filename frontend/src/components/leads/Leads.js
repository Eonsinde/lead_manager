import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux'; not using hooks for now
import { getLeads, deleteLeads } from '../../actions/leads';


class Leads extends Component{
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLeads: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getLeads();
    }

    handleRender = () => {
        const { leads } = this.props;
        if (leads.length === 0){
            return (<tr><td className='text-center fa-2x' colSpan={5}>No Leads Available</td></tr>)
        }else{
            return (
                leads.map(lead => 
                    (<tr id={lead.id} key={lead.id}>
                        <td>{lead.id}</td>
                        <td>{lead.name}</td>
                        <td>{lead.email}</td>
                        <td>{lead.message}</td>
                        <td>
                            <button className='btn btn-danger btn-sm' onClick={ () => this.props.deleteLeads(lead.id)}>Delete</button>
                        </td>
                    </tr>)));
        }
    }

    render(){
        return ( 
            <div className='my-5'>
                <h1>Leads List</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        { this.handleRender() }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLeads })(Leads);