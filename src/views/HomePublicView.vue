<template>
    <NavBarPublic />
    <SearchBar />

    <div>
        <div v-if="isLoading">Cargando mets...</div>
        <div class="mets-list" v-else>
            <MetDetail v-for="met in mets" :key="met" :met="met" />
        </div>
    </div>
    <div></div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import SearchBar from '@/components/SearchBar.vue'
import MetDetail from '@/components/MetDetail.vue';
import useMets from '@/composable/useMet';

export default defineComponent({
    name: 'ListMets',
    components: {
        NavBarPublic,
        SearchBar,
        MetDetail,
    },

    setup() {
        const { mets, isLoading, fetchMets } = useMets()
        fetchMets()

        return {
            mets,
            isLoading,
            
        }
    }
})
</script>
