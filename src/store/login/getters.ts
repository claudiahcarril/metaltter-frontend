import { GetterTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, IState> = {
    getUser(state) {
        return state.user
    },

    getToken(state) {
        return state.token
    },

    getKudos(state) {
        return state.kudos
    },

    hasKudo(state) {
        return (metId:string) => {
            return state.kudos.includes(metId)
        }
    }
}

export default getters