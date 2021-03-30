import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CustomerNavigation }  from './navigation';
import Room from './room';

class Customer extends React.Component {
    handleNavigation = (e) => {
        this.props.history.replace({
            pathname: '/roomdetails',
            state: { status: false }
          });
    }
    render() {
        return <React.Fragment>
            <CustomerNavigation/>
            <Room navigate={this.handleNavigation} title=''/>
        </React.Fragment>
    }
}

export default Customer;