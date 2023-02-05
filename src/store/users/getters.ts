import { GetterTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, IState> = {
    getUsers(state) {
        return state.users
    },

    getUser(state) {
        console.log(3333)
        return state.selectedUser
    }
}

export default getters