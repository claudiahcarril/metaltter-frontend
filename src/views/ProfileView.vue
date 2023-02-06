<template>
    <NavBarPublic />
    <SearchBar />

    <div class="user">
        <div class="user-avatar">
            <img :src="imagesUrl + user.avatar" alt="sndfsnb" width="250" height="250">
        </div>
        <div class="user-body">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-username">@{{ user.username }}</div>
            <div class="follow">
                <div class="followers">
                    <img src="../assets/hand.png" alt="" width="25" height="25">
                    <div class="met-kudos">{{ user.followers }}</div>
                </div>
                <div class="following">
                    <img src="../assets/hand.png" alt="" width="25" height="25">
                    <div class="met-kudos">{{ user.following }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="list-mets">
        <div class="home-info">
            <h1 class="h1">Últimas publicaciones de @{{ user.username }}</h1>
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
            {{ userMets }}
            <MetDetail v-for="met in userMets" :key="met" :met="met"></MetDetail>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import SearchBar from '@/components/SearchBar.vue';
import useUsers from '@/composable/useUsers';
import MetDetail from '@/components/MetDetail.vue';
import config from '@/config';
import useMets from '@/composable/useMet';

export default defineComponent({
    name: 'ProfilePublic',
    components: {
        NavBarPublic,
        SearchBar,
        MetDetail,
    },

    props: {
        id: {
            type: String,
            required: true
        },
    },
    
    setup(props) {
        const { user, fetchUserById } = useUsers()
        const { mets, userMets, isLoading, fetchMets, fetchMetsPostedByUser } = useMets()
        
        fetchUserById(props.id)
        fetchMetsPostedByUser(props.id)


        return {
            imagesUrl: config.imagesUrl,
            user,
            mets,
            userMets,
            isLoading,
            fetchMets,
            fetchMetsPostedByUser          
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
}

.following {
    display: flex;
    flex-direction: row;
    color: white;
}


.h1 {
    font-size: xx-large;
    color: black;
    text-align: start;
    font-weight: 700;
    margin: 30px 0 0 100px;
    padding: 0;
}
</style>