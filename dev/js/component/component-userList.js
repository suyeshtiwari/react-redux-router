/**
 * Created by Suyesh on 2/12/2017.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {selectUser} from '../action/index'
import {connect} from 'react-redux';
class UserList extends React.Component{
    renderList(){
        return this.props.users.map((user, index) => {
            return(
                <li key={index} onClick={() => this.props.selectUser(user)}>
                    {user.name} {user.age}
                </li>
            )
        })
    }
    render(){
        return(
            <div className="userList">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser},dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);