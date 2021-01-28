import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { Lines } from 'react-preloaders';
import { connect } from 'react-redux';


// sfc 
const PrivateRoute = ({ component: Component, auth, ...rest }) =>  {
    // basically destructures the props parameter automatically passed in
    // and handling the rendering 
    return (
        <Route 
            {...rest}
            render={props => {
                if (auth.isLoading){
                    return <Lines color={'#ccc'} background='#383636' />;
                }else if(!auth.isAuthenticated){
                    return <Redirect to='/login' />;
                }else{
                    return <Component {...props} />;
                }
            }}
        />
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});
 
export default connect(mapStateToProps)(PrivateRoute);