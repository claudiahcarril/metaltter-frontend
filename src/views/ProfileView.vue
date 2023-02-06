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



</style>