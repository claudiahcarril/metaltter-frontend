<template>
    <NavBarPublic />
    <h1>Ha ocurrido un error</h1>
    <img src="../assets/notFoundIcon.png" alt="not found">
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';

export default defineComponent({
    name: 'NotFound',
    components: {
        NavBarPublic,

    },
    
    setup() {
        return {}
    },
})
</script>
