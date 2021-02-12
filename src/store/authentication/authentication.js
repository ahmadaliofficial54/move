import axios from 'axios';
import {ApplcationPath} from 'src/assets/link.js';

async function validateUser(payload) {
    return await axios
        .post(
            ApplcationPath.authentication+"api/Users/login",payload
        )
        .then(response => {
            debugger
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
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

async function forgotPassword(payload) {
    return await axios
        .get(
            ApplcationPath.authentication+"api/Users/forgotpassword?Username="+payload
        )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

async function validateOtp(payload) {
    return await axios
        .get(
            ApplcationPath.authentication+"api/Users/validateotp?Username="+payload.userName+"&OTP="+payload.otp
        )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}

async function resetPasswordWithoutOldPassword(payload) {
    return await axios
        .get(
            ApplcationPath.authentication+"api/Users/resetpasswordwithoutoldpassword?Username="+payload.userName+"&NewPassword="+payload.password
        )
        .then(response => {
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
}


const state = {
    userName: null,
    loginResponse: null,
    userData: [],
    otp: null
}

const mutations = {

    setLoginResponse(state, response) {
        state.loginResponse = response;
    },

    setOtp(state, response) {
        state.otp = response;
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
    },
    async forgotPassword({ commit }, payload) {
        return forgotPassword(payload);
    },
    async validateOtp({ commit }, payload) {
        return validateOtp(payload);
    },
    async resetPasswordWithoutOldPassword({ commit }, payload) {
        return resetPasswordWithoutOldPassword(payload);
    }
}

const getters = {
    getLoginResponse: state => {
        return state.loginResponse;
    },
    getLoginUser: state => {
        return state.userData;
    },
    getOtp: state => {
        return state.otp;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}