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
        hasFollow: (userId: string) => store.getters['login/hasFollow'](userId),

        // ACTIONS
        login: (credentials: Credentials) => store.dispatch('login/login', credentials),
        logout: () => store.dispatch('login/logout'),
        setToken: (token: string) => store.dispatch('login/setToken', token),
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
        switchFollow: async (userId: string) => {
            if (!store.getters['login/hasFollow'](userId)) {
                await metaltterApi.post('/follow', {userId})
                store.commit('login/addFollow', userId)
                store.commit('users/addFollow', userId)
            } else {
                await metaltterApi.delete(`/follow/${userId}`)
                store.commit('login/removeFollow', userId)
                store.commit('users/removeFollow', userId)
            }
        },
    }
}

export default useLogin