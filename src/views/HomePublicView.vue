<template>
    <NavBarPublic />
    <SearchBar />

    <div></div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import SearchBar from '@/components/SearchBar.vue'

export default defineComponent({
    components: {
        NavBarPublic,
        SearchBar,
    }
})
</script>
