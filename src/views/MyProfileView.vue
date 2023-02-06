<template>
    <NavBarPrivate />

    <div class="page">
        <div class="column1">
            <div class="user">
                <div class="user-avatar">
                    <img >
                </div>
                <div class="user-body">
                    <div class="user-name">Name</div>
                    <div class="user-username">@username</div>
                    <div class="follow">
                        <div class="followers">
                            <div class="met-kudos">Seguidores: number</div>
                            <img class="followers-icon" src="../assets/followers-icon.png" alt="" width="25" height="25">
                        </div>
                        <div class="following">
                            <div class="met-kudos"> Siguiendo: number</div>
                            <img src="../assets/following-icon.png" alt="" width="25" height="25">
                        </div>
                    </div>
                </div>
            </div>
            <CustomButton>
                <template v-slot:left-icon>
                    <i class="bi bi-person-circle"></i>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'mi-perfil'}">Darme de baja</router-link>
                </template>
            </CustomButton>
            
    
        </div>
        <div class="column2">
            <div class="form-title-section">
                <h1 class="form-title">¿Qué quieres contar hoy?</h1>
                <img src="../assets/hand.png" alt="" width="60" height="60">
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
                        <input v-model="dateCreated" type="date" class="form-control" placeholder="¿Cuándo lo quieres publicar?" required>
                    </div>
                    <div class="col-sm-4">
                        <input v-model="dateCreated" type="time" class="form-control" placeholder="¿Cuándo lo quieres publicar?" required>
                    </div>
                </div>
            <button class="btn btn-submit" type="submit">Enviar met</button>
            </form>
            <div class="form-title-section-2">
                <h1 class="form-title">La gente a la que sigues ha publicado...</h1>
                <CustomButton>
                    <template v-slot:left-icon>
                        <span class="material-symbols-outlined">stars</span>
                    </template>
                    <template v-slot:right-text>
                        <router-link :to="{name: 'login'}">Ver mis mets</router-link>
                    </template>
                </CustomButton>
            </div>

            <div class="mets-list">
                <div v-if="isLoading">Cargando mets...</div>
                <div class="mets" v-else>
                <MetDetail v-for="met in mets" :key="met" :met="met" 
                @goProfile="goProfile"/>
                </div>
            </div>

        </div>

    </div>

    

</template>



<script lang="ts">
import { defineComponent } from 'vue'
import NavBarPrivate from '@/components/NavBarPrivate.vue';
import useMets from '@/composable/useMet';
import MetDetail from '@/components/MetDetail.vue';
import CustomButton from '@/components/CustomButton.vue';
import { useRouter } from 'vue-router';
import { Met } from '@/models/mets';
// import useUsers from '@/composable/useUsers';

export default defineComponent({
    components: {
        NavBarPrivate,
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
        // const { user, fetchUserById } = useUsers()
        const { mets, isLoading, fetchMets } = useMets()
        const router = useRouter()
        fetchMets()
        // fetchUserById(props.id)
        
        return {
            mets,
            isLoading,
            goProfile: (met: Met) => router.push({name: 'profile', params: {id: met.postedBy._id}})
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
    flex-direction: row;
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
    flex-direction: column;
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
  margin: 0;
  padding: 0;
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

</style>