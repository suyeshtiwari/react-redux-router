import {combineReducers} from 'redux';
import Users from './reducer-user';
import ActiveUser from './reducer-activeUser';
const allReducers =  combineReducers(
    {
        users : Users,
        activeUser: ActiveUser
    }
);
export default allReducers;