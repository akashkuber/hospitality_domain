import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Room = (props) => {
    
    return <React.Fragment>
        <div>
            <h3>Welcome to Hilltop Heaven Resort {props.title}!</h3>
            <button type="button" onClick={props.navigate}>Room Details</button>
        </div>
    </React.Fragment>
}

export default Room;
