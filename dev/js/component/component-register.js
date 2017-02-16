/**
 * Created by Suyesh on 2/16/2017.
 */

import React from 'react';
import {Link, browserHistory} from 'react-router';
class Register extends React.Component{
    render(){
        return(
            <div className="registerWrapper">
                <Link to={browserHistory} >Back</Link>
                <h2 className="jumbotron">
                    Regiter User Here
                </h2>
            </div>
        );
    }
}

export default Register;
