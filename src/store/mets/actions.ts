import { IState } from "..";
import { IMetState } from "./state";
import { ActionTree } from "vuex";
import { AxiosResponse } from "axios";
import { Met } from "@/models/mets";
import metaltterApi from "@/api/metaltterApi";

const actions: ActionTree<IMetState, IState> = {
    async fetchMets({ commit }) {
        commit('setIsLoading', true)
        const {data} = await metaltterApi.get<unknown, AxiosResponse<Met[]>>('/mets')
        commit('setMets', data)
        commit('setIsLoading', false)
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