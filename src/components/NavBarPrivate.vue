<template>
    <nav class="navbar">
        <a class="navbar-brand" >
            <router-link :to="{name: 'home-private'}">
                <img src="../assets/metaltterLogo.png" alt="Metaltter" width="202" height="54">
            </router-link>
        </a>
        <div class="navbar-buttons">
            <CustomButton>
                <template v-slot:left-icon>
                    <i class="bi bi-send"></i>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'mi-perfil'}">Enviar met</router-link>
                </template>
            </CustomButton>
            <CustomButton>
                <template v-slot:left-icon>
                    <i class="bi bi-person-circle"></i>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'mi-perfil'}">Mi perfil</router-link>
                </template>
            </CustomButton>
            <CustomButton @click="removeToken">
                <template v-slot:left-icon>
                    <span class="material-symbols-outlined">logout</span>
                </template>
                <template v-slot:right-text>
                    <span>Cerrar sesión</span>
                </template>
            </CustomButton>
        </div>
    </nav>
</template>


<script lang="ts">
import useLogin from '@/composable/useLogin';
import router from '@/router';
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'NavBarPublic',
    components: {
        CustomButton,
    },

    setup() {
        const { logout } = useLogin()

        return {
            removeToken() {
                logout()
                router.push({name: 'login'})
            } 
        }
    }
})

</script>




<style scoped>

.navbar {
    background-color: black;
}

.navbar-brand {
    margin-left: 15px;
}

.navbar-buttons {
    display: flex;
    flex-direction: row;
    
}


.material-symbols-outlined {
    margin-right: 8px;
}

.bi {
    margin-right: 10px;
}

.material-symbols-outlined:hover {
    color: white;
}

.material-symbols-outlined:active {
    color: black;
}

a {
    text-decoration: none;
    color: white;
}

a:active {
    color: black;
}


</style>