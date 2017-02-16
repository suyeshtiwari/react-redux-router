import React from 'react';
import {Link} from 'react-router';
import UserList from './component-userList'
import UserDetail from './component-userDetail'
require('../../sass/user.scss')
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-4 leftNav">
                    <div className="userListHeader">
                        <h2>User List</h2>
                    </div>
                    <UserList/>
                </div>
                    <div className="col-lg-8 col-sm-8 userDetail">
                        <div className="userDetailHeader">
                            <h2>User Detail</h2>
                            <Link to="/Register" className="pull-right" >Register</Link>
                        <UserDetail/>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default App;