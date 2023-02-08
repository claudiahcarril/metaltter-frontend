import metaltterApi from "@/api/metaltterApi";
import { Register, User } from "@/models/users";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const actions: ActionTree<IUserState, IState> = {
    async fetchUsers({commit}) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<User[]>>('/users')
        commit('setUsers', data)
        console.log(data)
    },

    async fetchUserById({commit}, userId: string) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<User>>(`/users/${userId}`)
        commit('setSelectedUser', data)
    },

    async addUser({commit}, register: Register) {
        const {data} = await metaltterApi.post<unknown, AxiosResponse<User>>('/users', register)
        commit('addUser', data)
        console.log(data)
    }
}



export default actions