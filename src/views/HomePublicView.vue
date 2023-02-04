<template>
    <NavBarPublic />
    <SearchBar />

    <div></div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import SearchBar from '@/components/SearchBar.vue'
import metaltterApi from '@/api/metaltterApi';

export default defineComponent({
    components: {
        NavBarPublic,
        SearchBar,
    },

    setup() {
        metaltterApi.get('/mets').then((resp) => {
            console.log(resp.data)
        })
        return {}
    }
})
</script>
