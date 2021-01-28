import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


class Alerts extends Component {
    // componentDidMount(){
    //     this.props.alert.show("It works");
    // }

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        if (this.props.error !== prevProps.error){
            if (this.props.error.msg.name)
                this.props.alert.error(`Name: ${this.props.error.msg.name.join()}`);
            if (this.props.error.msg.username)
                this.props.alert.error(`Username: ${this.props.error.msg.username.join()}`)
            if (this.props.error.msg.email)
                this.props.alert.error(`Email: ${this.props.error.msg.email.join()}`); 
            if (this.props.error.msg.message)
                this.props.alert.error(`Message: ${this.props.error.msg.message.join()}`);
            if (this.props.error.msg.non_field_errors)
                this.props.alert.error(`Message: ${this.props.error.msg.non_field_errors.join()}`);
        }

        if (this.props.message !== prevProps.message){
            if (this.props.message.deleteLead){
                this.props.alert.success("Lead Deleted");
            }
            if (this.props.message.createLead){
                Toast.fire({
                    icon: 'success',
                    title: 'Lead successfully created'
                });
            }
            if (this.props.message.loggedIn){
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully' // I intentionally didnt show the actual message in mystate
                });
            }

            if(this.props.message.registered){
                Toast.fire({
                    icon: 'success',
                    title: 'Registry Successful' 
                });
            }
        }
    }

    render() { 
        return <React.Fragment />;
    }
}

const mapStateToProps = (state) => ({
        error: state.errors,
        message: state.messages
});

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
  
 

export default connect(mapStateToProps)(withAlert()(Alerts));