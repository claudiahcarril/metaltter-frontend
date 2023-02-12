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
    },

    getFollows(state) {
        return state.follows
    },

    hasFollow(state) {
        return (userId:string) => {
            return state.follows.includes(userId)
        }
    }
}

export default getters