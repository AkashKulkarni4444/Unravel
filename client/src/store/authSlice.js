import { createSlice } from "@reduxjs/toolkit";
import * as api from '../api/index';
let authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedin: false, user: null, role: null, token: null },

    reducers: {
        signup(state, action) {
            // let data={};
            // async () => {
            //     try {
            //         const lol  = await api.signup(action.payload.formData);
            //         data = lol.data;
            //         localStorage.setItem("profile", JSON.stringify({ data }));
                    state.isLoggedin = true;
                    state.user = action.payload.user;
                    // state.token = action.payload.token;
                    state.role = action.payload.role;
                //     action.payload.navigate("/search");
                // } catch (error) {
                //     console.log(error);
                // }
            // }

        },
        login(state, action) {
            // let data = {};
            // async () => {
            //     try {
            //         const lol = await api.signin(action.payload.formData);
            //         data = lol.data;
            //         localStorage.setItem("profile", JSON.stringify({ data }));
                    state.isLoggedin = true;
                    state.user = action.payload.user;
                    // state.token = action.payload.token;
                    state.role = action.payload.role;
                //     action.payload.navigate('/search');
                // } catch (error) {
                //     console.log(error);
                // }
            // }
        },
        logout(state,action) {
            // localStorage.setItem("profile", JSON.stringify({}));
            state.isLoggedin = false;
            state.user = null;
            // state.role = null;
            state.token = null;
            // action.payload.navigate('/');
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice