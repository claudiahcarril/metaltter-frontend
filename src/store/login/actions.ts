import metaltterApi from "@/api/metaltterApi";
import { Credentials } from "@/models/users";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async login ({ commit }, credentials: Credentials) {
        const {data} = await metaltterApi.post('/login', {...credentials})
        localStorage.setItem('token', data.access_token )
        commit('setToken', data.access_token)
    },

    async deleteToken({ commit }) {
        localStorage.getItem('token')
        localStorage.removeItem('token')
        commit('removeToken')
    }
}


export default actions