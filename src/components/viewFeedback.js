import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ViewFeedback extends React.Component {
    state = {
        query: [
            {
                id: 1,
                name: 'Akash',
                message: 'Spa is not upto level',
                type: 'Customer Service',
            },
            {
                id: 2,
                name: 'Suraj',
                message: 'No parking available',
                type: 'Hygene And Ambience',
            },
            {
                id: 3,
                name: 'Pankaj',
                message: 'No water availlable for bath',
                services: 'Dining',
            },
            {
                id: 4,
                name: 'Mohan',
                message: 'swimming pool is not clean',
                type: 'Spa, Swimming pool and Others',
            },
            {
                id: 5,
                name: 'kundan',
                message: 'heater, charger so high',
                type: 'Spa, Swimming pool and Others',
            },
            {
                id: 6,
                name: 'Sai',
                message: 'King size Bed is okay',
                type: 'Hygene And Ambience',
            },
            {
                id: 7,
                name: 'Naman',
                message: 'Charger not working',
                type: 'Spa, Swimming pool and Others',
            }
        ],
        search: '',
        searchResult: [],
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let searchContent = [];
        this.state.query.forEach(item => {
            if (item.type === this.state.search) {
                searchContent.push(item);
            }
        });
        this.setState({ searchResult: searchContent });

    }
    handleDelete = (index) => {
        let result = [...this.state.searchResult];
        result.splice(index, 1);
        this.setState({ searchResult: result })
    }
    render() {
        let searchedData = this.state.searchResult.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.message}</td>
                <td><button type="button" className="btn btn-danger"
                    onClick={(e) => this.handleDelete(index)}>Delete</button></td>
            </tr>
        })
        return <React.Fragment>
            <div className="container">
                <h2>View Feedback</h2>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <select name="search" className="form-control" style={{width:"80%"}}
                                value={this.state.search} onChange={this.handleChange}>
                                <option value="Customer Service">Customer Service</option>
                                <option value="Hygene And Ambience">Hygene And Ambience</option>
                                <option value="Dining">Dining</option>
                                <option value="Spa, Swimming pool and Others">Spa, Swimming pool and Others</option>
                            </select>
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <br />
                <br />
                {
                    this.state.searchResult.length > 0 ? <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Name</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchedData}
                        </tbody>
                    </table> : <div className="text text-danger"> <b>No Result Found</b></div>
                }

            </div>
        </React.Fragment>
    }
}

export default ViewFeedback;