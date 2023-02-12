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
    },

    addFollow (state, userId: string) {
        if (state.selectedUser?._id === userId) {
            state.selectedUser.totalFollowers++
        }
        const user = state.users.find(u => u._id === userId)
        if (!user) {
            return
        }
        user.totalFollowers++
    },

    removeFollow (state, userId: string) {
        if (state.selectedUser?._id === userId) {
            state.selectedUser.totalFollowers--
        }
        const user = state.users.find(u => u._id === userId)
        if (!user) {
            return
        }
        user.totalFollowers--
    }
}

export default mutations