import { GetterTree } from "vuex";
import { IState } from "..";
import { IMetState } from "./state";

const getters: GetterTree<IMetState, IState> = {
    getMets(state) {
        return state.mets
    },

    getIsLoading(state) {
        return state.isLoading
    },

    getMet(state) {
        return state.selectedMet
    },

    getMetPostedByUser(state) {
        return state.metsPostedByUser
    }


}

export default getters