const UserList=(state=[], action)=>{
    console.log(action)
    switch(action.type){
        
        case 'USER_FETCH_SUCCEEDED':
            return action.payload
        default:
            return state
    }
}

export default UserList;
