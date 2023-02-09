import { IState } from "..";
import { IMetState, MetParams } from "./state";
import { ActionTree } from "vuex";
import { AxiosResponse } from "axios";
import { Met } from "@/models/mets";
import metaltterApi from "@/api/metaltterApi";

const actions: ActionTree<IMetState, IState> = {
    async fetchMets({ commit }, params: MetParams) {
        commit('setIsLoading', true)
        // const perPage = 10
        // const skip = (params.page - 1) * perPage
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets`)
        commit('setMets', data)
        commit('setIsLoading', false)
    },

    async fetchMetsByDate({ commit }) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>('/mets?sort=descending')
        commit('setMetsByDate', data)
    },

    async fetchMetsPostedByUser({commit}, userId: string) {
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>(`/mets/postedBy/${userId}`)
        commit('setMetsPostedByUser', data)
    },

    async addMet({commit}, met: Met) {
        const {data} = await metaltterApi.post<unknown, AxiosResponse<Met>>('/mets', met)
        commit('addMet', data)
    },

    async removeMet({commit}, metId: number) {
        const {data} = await metaltterApi.delete<unknown, AxiosResponse<Met>>(`/mets/${metId}`)
        commit('removeMet', data)
    }
}

export default actions