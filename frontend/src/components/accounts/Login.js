import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import $ from 'jquery';



class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    state = { 
        username: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let $form = $(e.target);

        if (this.state.name !== ''&& this.state.password !== ''){
            this.props.login(this.state.username, this.state.password);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Please fill in all fields'
            })
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        if (this.props.isAuthenticated){
            return <Redirect to='/' />
        }
        return ( 
            <form className='card card-body login-form' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' value={this.state.username} onChange={this.handleInput} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' value={this.state.password} onChange={this.handleInput} />
                </div>
                <input type='submit' className='btn btn-block btn-primary' />
                <p className='text-black-50 py-4 px-2 d-flex justify-content-between align-items-center'>
                    Don't have an account?<Link className='ml-1' to='/register'>Register</Link>
                </p>
            </form>
        );
    }
}
 

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);