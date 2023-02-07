import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IUserState } from "./state";

const loginModule: Module<IUserState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default loginModule