import { Register, User } from "@/models/users"
import { computed } from "vue"
import { useStore } from "vuex"

const useUsers = () => {
    const store = useStore()
    return {
        // GETTERS
        users: computed(() => store.getters['users/getUsers']),
        user: computed(() => store.getters['users/getUser']),
        
        // ACTIONS
        fetchUsers: () => store.dispatch('users/fetchUsers'),
        fetchUserById: (userId: string) => store.dispatch('users/fetchUserById', userId),
        fetchUserByUsername: async (userId: string) => await store.dispatch('users/fetchUserByUsername', userId),
        addUser: (register: Register) => store.dispatch('users/addUser', register),
        removeUser: (user: User) => store.dispatch('users/removeUser', user),
    }
}

export default useUsers