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
        fetchUserById: (userId: string) => store.dispatch('users/fetchUserById', userId)
    }
}

export default useUsers