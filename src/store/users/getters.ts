import { GetterTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, IState> = {
    getUsers(state) {
        return state.users
    },

    getUser(state) {
        return state.selectedUser
    }
}

export default getters