import metaltterApi from "@/api/metaltterApi";
// import { Met } from "@/models/mets";
import { Credentials } from "@/models/users";
// import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async login ({ dispatch }, credentials: Credentials) {
        const {data} = await metaltterApi.post('/auth/login', {...credentials})
        localStorage.setItem('token', data.access_token )
        dispatch('setToken', data.access_token)
    },

    async setToken({ commit, dispatch }, token: string) {
        commit('setToken', token)
        const response = await metaltterApi.get('/auth/profile')
        commit('setUser', response.data)
        dispatch('loadKudos')
    },

    async logout({ commit }) {
        localStorage.removeItem('token')
        commit('logout')
    },

    async loadKudos({commit}) {
        const {data} = await metaltterApi.get('/kudos')
        commit('setKudos', data)
    },
}


export default actions