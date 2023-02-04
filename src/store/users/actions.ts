import metaltterApi from "@/api/metaltterApi";
import { User } from "@/models/users";
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

    async fetchUserById({commit}, userId: number) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<User>>(`/users/${userId}`)
        commit('setSelectedUser', data)
    }
}



export default actions