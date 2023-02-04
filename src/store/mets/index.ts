import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IMetState } from "./state";

const metsModule: Module<IMetState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}


export default metsModule