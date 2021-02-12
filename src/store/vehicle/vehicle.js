import axios from 'axios';
import {ApplcationPath} from 'src/assets/link.js';

async function validateUser(payload) {
    return await axios
        .post(
            ApplcationPath.authentication+"api/Users/login",payload
        )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

async function signUpUser(payload) {
    return await axios
        .post(
            ApplcationPath.authentication+"api/Users/register", payload
        )
        .then(response => {
            console.log(response.data);
            debugger
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}


const state = {
    userName: null,
    loginResponse: null,
    userData: []
}

const mutations = {

    setLoginResponse(state, response) {
        this.loginResponse = response;
    }


}

const actions = {
    async loginUser({ commit }, payload) {
        return validateUser(payload).then(response => {
            commit('setLoginResponse', response);
        })
    },
    async signUp({ commit }, payload) {
        return signUpUser(payload);
    }
}

const getters = {
    getLoginResponse: state => {
        return state.loginResponse;
    },
    getLoginUser: state => {
        return state.userData;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}