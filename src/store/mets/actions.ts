import { IState } from "..";
import { IMetState, MetParams } from "./state";
import { ActionTree } from "vuex";
import { AxiosResponse } from "axios";
import { Met } from "@/models/mets";
import metaltterApi from "@/api/metaltterApi";

const actions: ActionTree<IMetState, IState> = {
    async fetchMets({ commit }, params: MetParams) {
        commit('setIsLoading', true)
        const perPage = params.limit
        // const skip = (params.page - 1) * perPage
        // const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets?limit=${perPage}`)
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets?word=${params.word}&limit=${perPage}`)
        commit('setMets', data)
        commit('setIsLoading', false)
    },

    async fetchMetById({commit}, metId: string) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met>>(`/mets/${metId}`)
        commit('setMetSelected', data)
    },

    async fetchMetsByDate({ commit }, params: MetParams) {
        const perPage = params.limit
        // const skip = (params.page - 1) * perPage
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets?sort=descending&limit=${perPage}`)
        commit('setMetsByDate', data)
    },

    async fetchMetsPostedByUser({commit}, userId: string, ) {
        const perPage = 10
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets/postedBy/${userId}?&limit=${perPage}`)
        commit('setMetsPostedByUser', data)
    },

    async fetchMetsPostedByUserDate({commit}, userId: string) {
        const perPage = 10
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets/postedBy/${userId}?sort=descending&limit=${perPage}`)
        commit('setMetsPostedByUserDate', data)
    },

    async addMet({commit}, met: Met) {
        const {data} = await metaltterApi.post<unknown, AxiosResponse<Met>>('/mets', met)
        commit('addMet', data)
    },

    async removeMet({commit}, metId: number) {
        const {data} = await metaltterApi.delete<unknown, AxiosResponse<Met>>(`/mets/${metId}`)
        commit('removeMet', data)
    },

    async fetchMetsUsersFollowing({commit}, params: MetParams) {
        const perPage = params.limit
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/follow/mets?&limit=${perPage}`)
        commit('setMetsUsersFollowing', data)
    }
}

export default actions