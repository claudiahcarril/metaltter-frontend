<template>
    <NavBarPublic />
    <SearchBar />

    <div class="list-mets">
        <div class="home-info">
            <h1 class="h1">Últimas publicaciones</h1>
            <CustomButton>
                <template v-slot:left-icon>
                    <i class="bi bi-arrow-down-circle-fill"></i>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'login'}">Ver más recientes</router-link>
                </template>
            </CustomButton>
        </div>
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
import CustomButton from '@/components/CustomButton.vue';

export default defineComponent({
    name: 'ListMets',
    components: {
        NavBarPublic,
        SearchBar,
        MetDetail,
        CustomButton,
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


<style scoped>

.list-mets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.mets-list {
    width: 100%;
}

.home-info {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding-right: 130px;
}
.h1 {
    font-size: xx-large;
    color: black;
    text-align: start;
    font-weight: 700;
    margin: 30px 0 0 100px;
    padding: 0;
}

.btn-outline-success:active {
    background-color: black;
}

a {
    text-decoration: none;
    color: white;
    margin-left: 15px;
}

a:active {
    color: white;
}


</style>