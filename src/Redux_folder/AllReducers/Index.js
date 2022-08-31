import {combineReducers} from 'redux';
import Profiledata from './ProfileData';
import UserList from './UserList';


const Index = combineReducers({
    Profiledata : Profiledata,
    UserList:UserList
})

// export default allReducers
export default Index;