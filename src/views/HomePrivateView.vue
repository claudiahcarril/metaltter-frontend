<template>
    <NavBarPrivate />
    <div class="background">
        <img src="../assets/backPrivate.png" alt="back">
        <h1 class="title">Bienvenid@ {{ loggedUser.username }} a </h1>
        <img class="logo" src="../assets/metaltterLogo.png" alt="">
    </div>
    <img src="../../public/img/handWithKudo.png" alt="">
    <SearchBar @filter="filterMets" />

    <div class="list-mets">
        <div class="home-info">
            <h1 class="h1">Últimas publicaciones de los usuarios que sigues</h1>
            <CustomButton v-if="sorting === 'ascending'" v-on:click="getOldMets">
                <template v-slot:left-icon>
                    <i class="bi bi-arrow-down-circle-fill"></i>
                </template>
                <template v-slot:right-text>
                    <span>Ver mets antiguos</span>
                </template>
            </CustomButton>
            <CustomButton v-on:click="getNewMets" v-else>
                <template v-slot:left-icon>
                    <i class="bi bi-arrow-up-circle"></i>
                </template>
                <template v-slot:right-text>
                    <span>Ver mets recientes</span>
                </template>
            </CustomButton>
        </div>
    </div>
    <!-- <div v-if="isLoading">Cargando mets...</div> -->
        <div class="mets-list" v-if="loggedUser">
            <MetDetail v-for="met in userMetsFollowing" :key="met" :met="met" 
            @goProfile="goProfile"
            />
        </div>


        <div class="mets-list" v-else>
            <MetDetail v-for="met in mets" :key="met" :met="met" 
            @goProfile="goProfile"
            />
        </div>

    <div class="button-more">
        <CustomButton v-on:click="setPage">
            <template v-slot:left-icon>
                <i class="bi bi-arrow-down-circle-fill"></i>
            </template>
            <template v-slot:right-text>
                <span>Ver más mets</span>
            </template>
        </CustomButton>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBarPrivate from '@/components/NavBarPrivate.vue';
import SearchBar from '@/components/SearchBar.vue'
import MetDetail from '@/components/MetDetail.vue';
import useMets from '@/composable/useMet';
import CustomButton from '@/components/CustomButton.vue';
import { useRouter } from 'vue-router';
import { Met } from '@/models/mets';
import useLogin from '@/composable/useLogin';

export default defineComponent({
    name: 'ListMets',
    components: {
        NavBarPrivate,
        SearchBar,
        MetDetail,
        CustomButton,
    },

    setup() {
        const { mets, userMetsFollowing, isLoading, fetchMets, fetchMetsByDate, fetchMetsUsersFollowing } = useMets()
        const {user: loggedUser} = useLogin()
        const router = useRouter()
        let sorting = ref<string>('descending')

        const page = ref<number>(1)
        const limit = ref<number>(5)
        let word = ''

        fetchMets({page: page.value, limit: limit.value, word})
        fetchMetsUsersFollowing({page: page.value, limit: limit.value, word})

        return {
            sorting,
            loggedUser,
            mets,
            isLoading,
            userMetsFollowing,
            goProfile: (met: Met) => router.push({name: 'profile', params: {username: met.postedBy.username}}),

            async getOldMets() {
                sorting.value = 'descending'
                fetchMetsByDate({page: page.value, limit: limit.value, word})
            },
            async getNewMets() {
                sorting.value = 'ascending'
                fetchMets({page: page.value, limit: limit.value, word})
            },

            async setPage(page2: number, limit2: number) {
                page.value = page2
                limit2 = limit.value + 5
                console.log(limit2)
                fetchMets({ page: page2, limit: limit2, word })
            },

            filterMets (filter: string) {
                page.value = 1
                word = filter
                fetchMets({page: page.value, limit: limit.value, word})
                console.log(word)
            }
            
        }
    }
})
</script>


<style scoped>
.background  {
    width: 100%;
}

.background > img {
    width: 100%;
    display: inline-block;
    text-align: center;
}




.title  {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
}

.logo {
    max-width: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.list-mets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.mets-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-info {
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100%;
    padding-right: 130px;
}
.h1 {
    font-size: 2.5rem;
    color: #bc2025;
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

span {
    margin-left: 10px;
}


.button-more {
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
}

</style>