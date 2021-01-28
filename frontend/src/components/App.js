import React, { Component } from 'react';
import { Lines } from 'react-preloaders';
import { HashRouter as Router,  Route, Switch, Redirect } from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Alerts from '../components/layout/Alerts';
import PrivateRoute from './common/PrivateRoute';
import PageNotFound from './layout/PageNotFound';

import { Provider } from 'react-redux';
import store from '../store';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


const options = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }

    render() { 
        return ( 
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Router>
                        <React.Fragment>
                            <Header />
                            <Alerts />
                            {/* <Lines color={'#ccc'} background='#383636' /> */}
                            <div className='container'>
                                <Switch>
                                    <PrivateRoute exact path='/' component={Dashboard} />
                                    <Route path='/login' component={Login} />
                                    <Route path='/register' component={Register} />
                                    <Route path="*" component={PageNotFound} />
                                </Switch>
                            </div>
                        </React.Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}
 

export default App;


