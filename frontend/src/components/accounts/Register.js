import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import Swal from 'sweetalert2';
import $ from 'jquery';

class Register extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired
    }

    state = { 
        username: '',
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let $form = $(e.target);

        if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && (this.state.password === $form.find('input[name="conf-password"]').val())){
           this.props.register(this.state);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Please fill in all fields and ensure passwords match'
            });
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        if (this.props.isAuthenticated){
            return <Redirect to='/' />;
        }
        return ( 
            <form className='register-form card card-body' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' value={this.state.username} onChange={this.handleInput} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>email</label>
                    <input type='email' className='form-control' name='email' value={this.state.email} onChange={this.handleInput} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' value={this.state.password} onChange={this.handleInput} />
                </div>
                <div className='form-group'>
                    <label htmlFor='conf-password'>Confirm Password</label>
                    <input type='password' className='form-control' name='conf-password'/>
                </div>
                <input type='submit' className='btn btn-block btn-primary' />
                <p className='text-black-50 py-4 px-2 d-flex justify-content-center align-items-center'>
                    Already Registerd?<Link className='ml-1' to='/login'> Login</Link>
                </p>
            </form>
        ); 
    }
}
 

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {register})(Register);