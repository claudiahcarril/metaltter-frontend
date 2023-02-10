import { Credentials } from "@/models/users"
import { computed } from "vue"
import { useStore } from "vuex"

const useLogin = () => {
    const store = useStore()
    return {
        // GETTERS
        user: computed(() => store.getters['login/getUser']),
        token: computed(() => store.getters['login/getToken']),

        // ACTIONS
        login: (credentials: Credentials) => store.dispatch('login/login', credentials),
        deleteToken: () => store.dispatch('login/deleteToken'),
        addKudo: (kudo: string) => store.dispatch('login/addKudo', kudo)
    }
}

export default useLogin