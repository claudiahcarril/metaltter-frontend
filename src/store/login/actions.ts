import metaltterApi from "@/api/metaltterApi";
// import { Met } from "@/models/mets";
import { Credentials } from "@/models/users";
// import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async login ({ commit, dispatch }, credentials: Credentials) {
        const {data} = await metaltterApi.post('/auth/login', {...credentials})
        localStorage.setItem('token', data.access_token )
        dispatch('setToken', data.access_token)
    },

    async setToken({ commit }, token: string) {
        commit('setToken', token)
        const response = await metaltterApi.get('/auth/profile')
        commit('setUser', response.data)
        // dispatch('loadKudos')
    },

    async deleteToken({ commit }) {
        localStorage.getItem('token')
        localStorage.removeItem('token')
        commit('removeToken')
    },

    // GET kudos userId: number
    // async getKudosByUser({commit}, userId: number) {

    // },

    // POST addKudos
    async addKudo({commit, rootState}, metId: string) {
        await metaltterApi.post('/kudos', {metId})
        if (!rootState.login.kudos.includes(metId)) {
            commit('addKudos', metId)
            commit('mets/addKudos', metId)
        }
    }

    // DELETE Kudos

}


export default actions