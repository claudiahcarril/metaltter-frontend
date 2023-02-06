import { computed } from "vue"
import { useStore } from "vuex"

const useMets = () => {
    const store = useStore()
    return {
        // GETTERS
        mets: computed(() => store.getters['mets/getMets']),
        isLoading: computed(() => store.getters['mets/getIsLoading']),
        met: computed(() => store.getters['mets/getMet']),
        userMets: computed(() => store.getters['mets/getMetPostedByUser']),

        // ACTIONS
        fetchMets: () => store.dispatch('mets/fetchMets'),
        fetchMetsPostedByUser: (userId: string) => store.dispatch('mets/fetchMetsPostedByUser', userId)
    }
}

export default useMets