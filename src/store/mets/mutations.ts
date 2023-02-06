import { Met } from "@/models/mets";
import { MutationTree } from "vuex";
import { IMetState } from "./state";

const mutations: MutationTree<IMetState> = {
    setMets(state: IMetState, mets: Met[]) {
        state.mets = mets
    },

    setIsLoading(state: IMetState, value: boolean) {
        state.isLoading = value
    },

    setMetSelected(state, met: Met) {
        state.selectedMet = met
    },

    setMetsPostedByUser(state: IMetState, userMets: Met[]) {
        state.metsPostedByUser = userMets
    },

    addMet(state, met: Met) {
        state.mets.push(met)
    },

    removeMet(state, met: Met) {
        const tmp = state.mets.filter(m => m._id !== met._id)
        state.mets = tmp
    }
}

export default mutations