import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() { 
        return ( 
            <div style={myStyle} className='p-3 d-flex justify-content-center align-items-center flex-column'>
                <i className='fa fa-5x fa-warning'></i>
                <h3 className='mt-2'>Page Not Found</h3>
                <div>Misplaced? <Link to='/login'>Return Home</Link></div>
            </div>  
        );
    }
}

let myStyle = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    left: '0px',
    zIndex: '-1',
    top: '0px'
}

 
export default PageNotFound;