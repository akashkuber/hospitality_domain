import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminNavigation, CustomerNavigation }  from './navigation';

class RoomDetails extends React.Component {
    state = {roomData: []}
    componentDidMount = () => {
        this.setState({roomData: [
            {   id: 1,
                type: 'Delux-100 sqft',
                description: 'Double Bed, heater, charger',
                services: 'free Breakfast, accomodation',
                price: '4000',
            },
            {   id: 2,
                type: 'Super Delux-250 sqft',
                description: 'King size Bed, heater, charger',
                services: 'free Breakfast, Lunch, accomodation',
                price: '5000',
            },
            {   id: 3,
                type: 'Family Room-500 sqft',
                description: 'King size 2 Bed, heater, charger',
                services: 'free Breakfast, Lunch, Dinner, accomodation',
                price: '6000',
            }
        ]})
    }
    render() {
        let status = this.props.location.state.status;
        let roomData = this.state.roomData.map(item => {
            return <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>{item.services}</td>
                <td>{item.price}</td>
            </tr>
        });
        
        return <React.Fragment>
            {status ? <AdminNavigation/> : <CustomerNavigation/>}
            <h2>{status ? 'Admin' : ''} Room Details</h2>
            <table className="table">
                <thead className="thead"> 
                    <tr>
                        <th>
                            Room Type
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Included Services
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {roomData}
                </tbody>
            </table>
        </React.Fragment>
    }
}

export default RoomDetails;