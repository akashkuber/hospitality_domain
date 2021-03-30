import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AdminNavigation }  from './navigation';
import Room from './room';

class Admin extends React.Component {
    handleNavigation = (e) => {
        this.props.history.push({
            pathname: '/roomdetails',
            state: { status: true }
          });
    }
    render() {
        const title = 'as Admin';
        return <React.Fragment>
            <AdminNavigation/>
            <Room navigate={this.handleNavigation} title={title}/>
        </React.Fragment>
    }
}

export default Admin;