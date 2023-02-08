import { User } from "@/models/users";
import { MutationTree } from "vuex";
import { IUserState } from "./state";

const mutations: MutationTree<IUserState> = {
    setUsers(state: IUserState, users: User[]) {
        state.users = users
    },

    setSelectedUser(state, user: User) {
        state.selectedUser = user
    },
    
    addUser(state, user: User) {
        state.users.push(user)
    },

    removeUser(state, user: User) {
        const tmp = state.users.filter(u => u._id !== user._id)
        state.users = tmp
    }
}

export default mutations