import { User } from "@/models/users";
import { MutationTree } from "vuex";
import { IMetState } from "../mets/state";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUser(state: IUserState, user: User) {
        state.user = user
    },

    setToken(state: IUserState, token: string) {
        state.token = token
    },

    logout(state: IUserState) {
        state.token = null
        state.user = null
        state.kudos = []
    },

    setKudos(state: IUserState, kudos: string[]) {
        state.kudos = kudos
    },

    addKudo(state: IUserState, metId: string) {
        if (!state.kudos.includes(metId)) {
            state.kudos.push(metId)
        }
    },

    deleteKudo(state: IUserState, metId: string) {
        if (state.kudos.includes(metId)) {
            state.kudos = state.kudos.filter(k => k !== metId)
        }
    },

}

export default mutations