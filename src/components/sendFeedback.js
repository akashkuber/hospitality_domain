import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SendFeedback extends React.Component {
    state = {
        name: '',
        email: '',
        contact: '',
        area: '',
        message: '',
        formMessage: '',
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value, formMessage: ''})
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.area === "") {
            this.setState({formMessage: 'Please select Area'})
        } else {
            this.setState({formMessage: 'Message sent to Authority'})
        }
    }
    render() {
        return <React.Fragment>
            <div className="container">
                <h2>Drop A Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name"
                            placeholder="Enter Name" id="name"
                            value={this.state.name} onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email"
                            placeholder="Enter Email" id="email"
                            value={this.state.email} onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact</label>
                        <input type="text" pattern="\d*" className="form-control" name="contact"
                            placeholder="Enter contact number" id="contact"
                            value={this.state.contact} onChange={this.handleChange}
                            required maxLength="10"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <select className="form-control" name="area"
                            value={this.state.area} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Hygene And Ambience">Hygene And Ambience</option>
                            <option value="Dining">Dining</option>
                            <option value="Spa, Swimming pool and Others">Spa, Swimming pool and Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message"
                            id="message"
                            value={this.state.message} onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="text text-warning"> {this.state.formMessage}</div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </React.Fragment>
    }
}

export default SendFeedback;