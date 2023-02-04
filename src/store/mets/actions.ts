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
    }
}

export default actions