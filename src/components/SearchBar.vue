<template>
    <form @submit.prevent="$emit('filter', filter)" class="d-flex" role="search">
        <input v-model="filter" class="form-control me-2" type="search" placeholder="Buscar en Metaltter" aria-label="Search">
        <CustomButton>
            <template v-slot:left-icon>
                <i class="bi bi-search"></i>
            </template>
            <template v-slot:right-text>
                <p>Buscar</p>
            </template>
        </CustomButton>
    
    </form>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'SearchBar',
    components: {
        CustomButton,
    },

    setup() {
        const filter = ref<string>('');

        return {
            filter,
        }
    }
})
</script>


<style scoped>
.d-flex {
    margin: 20px 50px 20px 50px;
    width: 90%;
    padding-left: 200px;
    padding-right: 200px;
    /* position: fixed; z-index: 8; */
}

.bi-search {
    margin-right: 3px;
}

.btn-outline-success > p {
    margin: 0;
    color: white;

}
.btn-outline-success {
    justify-content: space-evenly;
}


.btn-outline-success:active {
    background-color: black;
}

.form-control {
    /* background-color: #bc20252b; */
    color: black;
}

.form-control:focus {
  border-color: #bc2025;
  box-shadow: 0 1px 1px #bc2025 inset, 0 0 8px #bc2025;
  outline: 0 none;
}



</style>