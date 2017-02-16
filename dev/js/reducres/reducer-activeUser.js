
export default function(state = null, action){
    switch (action.type){
        case 'User_SELECTED':
            return action.payload;
            break;
    }
    return state;
}