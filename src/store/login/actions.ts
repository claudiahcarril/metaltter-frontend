import metaltterApi from "@/api/metaltterApi";
// import { Met } from "@/models/mets";
import { Credentials } from "@/models/users";
// import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async login ({ commit }, credentials: Credentials) {
        const {data} = await metaltterApi.post('/auth/login', {...credentials})
        localStorage.setItem('token', data.access_token )
        commit('setToken', data.access_token)
        const response = await metaltterApi.get('/auth/profile')
        commit('setUser', response.data)
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
    async addKudo({commit}, kudo: string) {
        const {data} = await metaltterApi.post('/kudos', kudo)
        console.log(data)
        commit('addKudos', data)
    }

}


export default actions