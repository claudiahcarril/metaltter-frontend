<template>
    <NavBarPublic />
    <SearchBar />

    <div v-if="user" class="user">
        <div class="user-avatar">
            <img :src="imagesUrl + user.avatar" alt="sndfsnb" width="250" height="250">
        </div>
        <div class="user-body">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-username">@{{ user.username }}</div>
            <div class="follow">
                <div class="followers">
                    <div class="met-kudos">Seguidores: {{ user.followers }}</div>
                    <img class="followers-icon" src="../assets/followers-icon.png" alt="" width="25" height="25">
                </div>
                <div class="following">
                    <div class="met-kudos"> Siguiendo: {{ user.following }}</div>
                    <img src="../assets/following-icon.png" alt="" width="25" height="25">
                </div>
            </div>
        </div>
    </div>
    <div class="list-mets">
        <div class="home-info">
            <h1 class="h1">Últimas publicaciones</h1>
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
        <div v-if="isLoading">Cargando mets...</div>
        <div class="mets-list" v-else>
            <MetDetail v-for="met in userMets" :key="met" :met="met"></MetDetail>
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
import NavBarPublic from '@/components/NavBarPublic.vue';
import SearchBar from '@/components/SearchBar.vue';
import useUsers from '@/composable/useUsers';
import MetDetail from '@/components/MetDetail.vue';
import CustomButton from '@/components/CustomButton.vue';
import config from '@/config';
import useMets from '@/composable/useMet';

export default defineComponent({
    name: 'ProfilePublic',
    components: {
        NavBarPublic,
        SearchBar,
        MetDetail,
        CustomButton
    },

    props: {
        username: {
            type: String,
            required: true
        },
    },
    
    setup(props) {
        const { user, fetchUserByUsername } = useUsers()
        const { mets, userMets, isLoading, fetchMets, fetchMetsPostedByUser, fetchMetsPostedByUserDate } = useMets()
        
        let sorting = ref<string>('descending')
        const page = ref<number>(1)
        const limit = ref<number>(5)


        fetchUserByUsername(props.username)
            .then(() => {
                fetchMetsPostedByUser(user.value._id)
            })
        
        return {
            imagesUrl: config.imagesUrl,
            sorting,
            user,
            mets,
            userMets,
            isLoading,
            fetchMets,
            fetchMetsPostedByUser,

            async getOldMets() {
                sorting.value = 'descending'
                fetchMetsPostedByUserDate(user.value._id)
            },
            async getNewMets() {
                sorting.value = 'ascending'
                fetchMetsPostedByUser(user.value._id)
            },
            
            async setPage(page2: number, limit2: number) {
                page.value = page2
                limit2 = limit.value + 5
                console.log(limit2)
                fetchMets({ page: page2, limit: limit2 })
            }
        }
    }

    
})
</script>


<style scoped>

.user {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 300px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: #333333;
}

.user-avatar > img {
    border-radius: 50%;
    margin: 15px 0 0 15px;
}

.user-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 15px 15px 20px 25px;
    width: 60%;
}

.user-name {
    font-size: x-large;
    color: white;
    font-weight: 700;
}

.user-username {
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
}


.follow {
    display: flex;
    flex-direction: row;
    color: white;
    font-weight: 600;
    font-size: 20px;
    align-items: center;
    margin-top: 10px;
}

.followers {
    display: flex;
    flex-direction: row;
    color: white;
    margin-right: 20px;
}

.following {
    display: flex;
    flex-direction: row;
    color: white;
    align-items: end;
}

.followers > img, .following > img {
    margin-left: 5px;
}

.h1 {
    font-size: xx-large;
    color: black;
    text-align: start;
    font-weight: 700;
    margin: 30px 0 0 100px;
    padding: 0;
}

.mets-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-info {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    padding-right: 130px;
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