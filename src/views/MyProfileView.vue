<template>
    <NavBarPrivate />

    <div class="page">
        <div class="column1">
            <div class="user">
                <div class="user-avatar">
                    <img :src="imagesUrl + user.avatar" alt="sndfsnb" width="250" height="250">
                </div>
                <div class="user-body">
                    <div class="user-name">{{ user.name }}</div>
                    <div class="user-username">@{{ user.username }} </div>
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
            <CustomButton @click="unsubscribeUser()">
                <template v-slot:left-icon>
                    <i class="bi bi-person-circle"></i>
                </template>
                <template v-slot:right-text>
                    <span>Darme de baja</span>
                </template>
            </CustomButton>
            
    
        </div>
        <div class="column2">
            <div class="form-title-section">
                <h1 class="form-title">¿Qué quieres contar hoy?</h1>
                <img src="../../public/img/hand.png" alt="" width="60" height="60">
            </div>
            <form @submit.prevent="sendMet" class="form">
                <div class="row">
                    <div class="col-sm-12">
                        <textarea v-model="message" type="text" class="form-control" placeholder="Escribe lo que quieras" required maxlength="256"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <input type="file" class="form-control" placeholder="Añade una imagen" accept="image/*">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input v-model="dateCreated" type="datetime-local" class="form-control" required>
                    </div>
                    <div class="col-sm-4">
                        <!-- <input v-model="dateCreated" type="time" class="form-control" required> -->
                    </div>
                </div>
            <button class="btn btn-submit" type="submit">Enviar met</button>
            </form>

            <div class="form-title-section-2">
                <h1 class="form-title-2">VER MIS METS</h1>
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

            <div class="mets-list">
                <div v-if="isLoading">Cargando mets...</div>
                <div class="mets" v-else>
                    <MetDetailPrivate v-for="met in userMets" :key="met" :met="met"
                        @removeMet="removeMet"
                    />
                </div>
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

        </div>

    </div>

    

</template>



<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBarPrivate from '@/components/NavBarPrivate.vue';
import useMets from '@/composable/useMet';
import MetDetailPrivate from '@/components/MetDetailPrivate.vue';
import CustomButton from '@/components/CustomButton.vue';
import { useRouter } from 'vue-router';
// import { Met } from '@/models/mets';
import useUsers from '@/composable/useUsers';
import config from '@/config';
import useLogin from '@/composable/useLogin';
import { Met } from '@/models/mets';

export default defineComponent({
    components: {
        NavBarPrivate,
        MetDetailPrivate,
        CustomButton
    },

    setup() {
        const { mets, isLoading, userMets, fetchMetsPostedByUser, addMet, fetchMetsPostedByUserDate, removeMet } = useMets()
        const { user, logout } = useLogin()
        const { removeUser } = useUsers()
        const router = useRouter()

        let sorting = ref<string>('descending')
        const page = ref<number>(1)
        const limit = ref<number>(5)
 
        fetchMetsPostedByUser(user.value._id)


        const message = ref<string>('');
        const image = ref<string>('');
        const dateCreated = ref<string>('');
        
        return {
            imagesUrl: config.imagesUrl,
            sorting,
            user,
            mets,
            userMets,
            isLoading,
            message,
            image,
            dateCreated,
            unsubscribeUser: () => {
                removeUser(user.value._id)
                logout()
                router.push({name: `login`})
            },
            async sendMet() {
                const newMet = {message: message.value, image: image.value, dateCreated: dateCreated.value, postedBy: user.value._id}
                await addMet(newMet)
                fetchMetsPostedByUser(user.value._id)
            },

            removeMet: (met: Met) => {
                removeMet(met._id)
                fetchMetsPostedByUser(user.value._id)
            },


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
                fetchMetsPostedByUser(user.value._id)
            }


        }
    },
})
</script>


<style scoped>

.page {
    display: flex;
    flex-direction: row;
    height: 100%;
}
.column1 {
    background-color: #333333;
    width: 25%;
    min-height: 3000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.column2 {
    width: 75%
}


.user {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 300px;
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1); */
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
    margin: 15px 15px 20px 80px;
    width: 60%;
}

.user-name {
    font-size: xx-large;
    color: white;
    font-weight: 700;
}

.user-username {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
}


.follow {
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 600;
    font-size: 20px;
    align-items: flex-start;
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


.form {
  background-color: black;
  border: 1px solid #bc2025;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.form-title-section {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.form-title-section-2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 50px 0 0 0;
  padding: 0;
}

.form-title-2 {
  font-weight: 700;
  padding: 5px;
  color: black;
  font-size: 2.5rem;
  margin: 0;
  padding-top: 15px;
  margin-right: 280px;
}

.form-title-section-2 > button {
    margin-bottom: 0;
}

.form-title-section-2 > img {
    color: white;
    margin-right: 50px;
}


.form-title {
  font-weight: 700;
  padding: 5px;
  color: black;
  font-size: 1.5rem;
  margin: 0;
  padding-top: 15px;
}

.col-form-label {
  font-weight: 700;
  color: white;
  font-weight: 500;
}

.row {
  margin: 30px 20px 20px 20px;
}

.password-forgotten {
    color: white;
}

 a {
    color: white;
    text-decoration: none;
    font-weight: 700;
}



.btn-submit {
    background-color: #bc2025;
    font-weight: 600;
    border: none;
    color: white;
    padding: 15px 25px 15px 25px;
    margin-top: 15px;
    margin-bottom: 25px;
    transition: all 0.3s ease-in-out;
}

.btn-submit:hover {
  transform: scale(1.1);
}

.btn-submit:active {
  color: black;
  background-color: white;
}


.form-control {
    font-size: smaller;
}

.form-control:focus {
  border-color: #bc2025;
  box-shadow: 0 1px 1px #bc2025 inset, 0 0 8px #bc2025;
  outline: 0 none;
}

.mets-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bi, span {
    margin-right: 10px;
}

.btn-outline-success {
    margin-bottom: 50px;
}

a, i {
    text-decoration: none;
    color: white;
}

a:active, i:active {
    color: black;
}

.button-more {
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
}

</style>