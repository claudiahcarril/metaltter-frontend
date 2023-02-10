import { User } from "@/models/users";
import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUser(state: IUserState, user: User) {
        state.user = user
    },

    setToken(state: IUserState, token: string) {
        state.token = token
    },

    removeToken(state: IUserState, token: string) {
        state.token = token
    },

    setKudos(state: IUserState, kudos: string[]) {
        state.kudos = kudos
    },

    addKudos(state: IUserState, kudo: string) {
        state.kudos.push(kudo)
    }
}

export default mutations