import { Met, newMet } from "@/models/mets"
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
        fetchMetsByDate: () => store.dispatch('mets/fetchMetsByDate'),
        fetchMetsPostedByUser: (userId: string) => store.dispatch('mets/fetchMetsPostedByUser', userId),
        fetchMetsPostedByUserDate: (userId: string) => store.dispatch('mets/fetchMetsPostedByUserDate', userId),
        addMet: (met: newMet) => store.dispatch('mets/addMet', met),
        removeMet: (met: Met) => store.dispatch('mets/removeMet', met),
    }
}

export default useMets