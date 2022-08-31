const Profiledata=(state="", action)=>{
    switch(action.type){
        case 'USER_PROFILE_DATA':
            return action.payload
        default:
            return state
    }
}

export default Profiledata;
