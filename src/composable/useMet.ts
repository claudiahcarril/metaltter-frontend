import { Met, newMet } from "@/models/mets"
import { MetParams } from "@/store/mets/state"
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
        fetchMets: (params: MetParams) => store.dispatch('mets/fetchMets', params),
        fetchMetsByDate: (params: MetParams) => store.dispatch('mets/fetchMetsByDate', params),
        fetchMetsPostedByUser: (userId: string) => store.dispatch('mets/fetchMetsPostedByUser', userId),
        fetchMetsPostedByUserDate: (userId: string) => store.dispatch('mets/fetchMetsPostedByUserDate', userId),
        addMet: (met: newMet) => store.dispatch('mets/addMet', met),
        removeMet: (met: Met) => store.dispatch('mets/removeMet', met),
    }
}

export default useMets