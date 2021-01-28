import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import Swal from 'sweetalert2';


class Header extends Component {
    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func
    }

    handleOnClick = () => {
          Swal.fire({
            title: 'Log Out',
            text: "Are you sure?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: false
          }).then((result) => {
            if (result.value) {
              this.props.logout();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                '',
                'error'
              )
            }
          })
    }

    handleDisplay = () => {
        if (this.props.user){
            return <React.Fragment>
                        <span className='navbar-text mr-2'><strong>Welcome {this.props.user.username[0].toUpperCase() + this.props.user.username.slice(1, this.props.user.username.length)}</strong></span>
                        <li className="nav-item">
                            <button className='nav-link btn btn-info btn-sm text-light' onClick={this.handleOnClick}>Logout</button>
                        </li>
                    </React.Fragment>
        }else{
            return <React.Fragment>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/register">Register</Link>
                        </li>
            </React.Fragment>
        }
    }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className='container'>
                    <Link className="navbar-brand" to='/'>Lead Manager</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            {this.handleDisplay()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {logout})(Header);