import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route } from 'react-router-dom';
import Admin from './admin';
import Customer from './customer';
import Login from './login';
import RoomDetails from './roomDetails';
import ViewFeedback from './viewFeedback';
import SendFeedback from './sendFeedback';

const Router = () => {
    return <React.Fragment>
        <Route exact path="/" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/roomdetails" component={RoomDetails}/>
        <Route path="/viewFeedback" component={ViewFeedback}/>
        <Route path="/sendFeedback" component={SendFeedback}/>
    </React.Fragment>
}

export default Router;