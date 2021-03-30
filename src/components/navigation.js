import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export const AdminNavigation = () => {
    return <React.Fragment>
        <div className="header">
            <nav style={{backgroundColor: 'blue', color: 'white'}}>
                <Link style={{color: 'white'}} to="/viewFeedback">View FeedBack</Link>&nbsp;&nbsp;&nbsp;
                <Link style={{color: 'white'}} to="/">Logout</Link>
            </nav>
        </div>
    </React.Fragment>
}


export const CustomerNavigation = () => {
    return <React.Fragment>
        <div className="header">
            <nav style={{backgroundColor: 'red', color: 'white'}}>
                <Link style={{color: 'white'}} to="/sendFeedback">Send FeedBack</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link style={{color: 'white'}} to="/viewFeedback">Know Our FeedBack</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link style={{color: 'white'}} to="/">Logout</Link>
            </nav>
        </div>
    </React.Fragment>
}
