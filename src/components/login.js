import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    state = {
        userName: '',
        password: '',
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const { userName, password } = this.state;
        if(userName === 'admin' && password === 'admin123') {
            this.props.history.replace('/admin');
        } else {
            this.props.history.replace('/customer');
        }
    }

    render() {
        return <React.Fragment>
            <div className="container" style={{paddingTop:"30px"}}>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="userName">UserName: </label>
                            <input type="text" name="userName" 
                            value={this.state.userName} onChange={this.handleChange} id="userName"
                            placeholder="Enter User Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" 
                            value={this.state.password} onChange={this.handleChange} id="password"
                            placeholder="Enter Password"/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Login;