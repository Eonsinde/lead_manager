import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {addLead} from '../../actions/leads';
import Swal from 'sweetalert2'


class AddLead extends Component {
    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    state = { 
        name: '',
        email: '',
        message: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
       
        this.props.addLead(this.state);
        this.setState({
            name: '',
            email: '',
            message: ''
        });    
    }

    render() { 
        return ( 
            <div className='card card-body mt-4 mb-5'>
                <h2>Add Lead</h2>                
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label>Name: </Label>
                        <Input name='name' value={this.state.name} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email: </Label>
                        <Input name='email' value={this.state.email} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message: </Label>
                        <Input name='message' value={this.state.message} onChange={this.onChange} />
                    </FormGroup>
                    <Button type='submit' color='primary'>Add</Button>
                </Form>
            </div>
        );
    }
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


export default connect(null, { addLead })(AddLead);