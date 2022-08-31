const USER_PROFILE_DATA = 'USER_PROFILE_DATA';
const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const Profiledata = (profiledetails)=>{
    return{
        type: USER_PROFILE_DATA,
        payload:profiledetails
    }
}

export const UserList = (userlist)=>{
    return{
        type: USER_FETCH_SUCCEEDED,
        payload:userlist
    }
}