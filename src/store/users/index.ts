import { Module } from "vuex";
import { IState } from "..";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state, { IUserState } from "./state";

const usersModule: Module<IUserState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}

export default usersModule