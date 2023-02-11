import { newMet } from "@/models/mets"
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
        fetchMetById: (metId: string) => store.dispatch('mets/fetchMetById', metId),
        fetchMetsByDate: (params: MetParams) => store.dispatch('mets/fetchMetsByDate', params),
        fetchMetsPostedByUser: (username: string) => store.dispatch('mets/fetchMetsPostedByUser', username),
        fetchMetsPostedByUserDate: (username: string) => store.dispatch('mets/fetchMetsPostedByUserDate', username),
        addMet: (met: newMet) => store.dispatch('mets/addMet', met),
        removeMet: (metId: string) => store.dispatch('mets/removeMet', metId),
    }
}

export default useMets