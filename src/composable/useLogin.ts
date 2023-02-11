import metaltterApi from "@/api/metaltterApi"
import { Credentials } from "@/models/users"
import { computed } from "vue"
import { useStore } from "vuex"

const useLogin = () => {
    const store = useStore()
    return {
        // GETTERS
        user: computed(() => store.getters['login/getUser']),
        token: computed(() => store.getters['login/getToken']),
        hasKudo: (metId: string) => store.getters['login/hasKudo'](metId),

        // ACTIONS
        login: (credentials: Credentials) => store.dispatch('login/login', credentials),
        logout: () => store.dispatch('login/logout'),
        switchKudo: async (metId: string) => {
            if (!store.getters['login/hasKudo'](metId)) {
                await metaltterApi.post('/kudos', {metId})
                store.commit('login/addKudo', metId)
                store.commit('mets/addKudo', metId)
            } else {
                await metaltterApi.delete(`/kudos/${metId}`)
                store.commit('login/deleteKudo')
                store.commit('mets/deleteKudo', metId)
            }
        },
        setToken: (token: string) => store.dispatch('login/setToken', token),
    }
}

export default useLogin