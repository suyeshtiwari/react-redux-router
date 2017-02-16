export const selectUser = (user) =>{
    return {
        type: "User_SELECTED",
        payload: user
    }
};