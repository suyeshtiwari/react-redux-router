/**
 * Created by Suyesh on 2/12/2017.
 */
import React from 'react';
import {connect} from 'react-redux';


class UserDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        if(!this.props.user){
            return(
                <div className="userDetailContainer">
                    `Please select User
                </div>
            )
        }
        return(
          <div className="userDetailContainer">
              <div className="imageContainer"><img src={this.props.user.href}  alt={this.props.user.name}/></div>
              <div>Name : {this.props.user.name}</div>
              <div>Age : {this.props.user.age}</div>
              <div>Gender: {this.props.user.sex}</div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        user: state.activeUser
    };
}


export default connect(mapStateToProps)(UserDetail);