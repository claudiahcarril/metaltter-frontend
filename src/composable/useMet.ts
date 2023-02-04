import { computed } from "vue"
import { useStore } from "vuex"

const useMets = () => {
    const store = useStore()
    return {
        // GETTERS
        mets: computed(() => store.getters['mets/getMets']),
        isLoading: computed(() => store.getters['mets/getIsLoading']),
        met: computed(() => store.getters['mets/getMet']),

        // ACTIONS
        fetchMets: store.dispatch('mets/fetchMets')
    }
}

export default useMets