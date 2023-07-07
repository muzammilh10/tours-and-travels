import { createSlice } from "@reduxjs/toolkit";




const initail_state = {
    token:localStorage.getItem('token'),
    user:
        localStorage.getItem('user') !== null
            ? JSON.parse(localStorage.getItem('user'))
            : null,
    error: null
}

export const authSlice = createSlice({
    name:"authentication",
    initialState: initail_state,
    reducers: {
        loginStart(state){
            state.token = null
            state.user= null
            state.error=null
        },
        loginSuccess(state,action){
            state.token = action.payload.token
            state.user= action.payload.data.user
        },
        loginFailure(state,action){
            state.error = action.payload
        },
        registerSucces (state) {
            state.token = null
            state.user= null
            state.error=null
        },
        logout(state) {
            state.token = null
            state.user= null
            state.error=null
        }
    },

})


export const authAction = authSlice.actions;

export default authSlice