<template>
    <nav class="navbar">
        <a class="navbar-brand" href="#">
            <img src="../assets/metaltterLogo.png" alt="Metaltter" width="202" height="54">
        </a>
        <div class="navbar-buttons">
            <CustomButton>
                <template v-slot:left-icon>
                    <i class="bi bi-person-circle"></i>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'mi-perfil'}">Mi perfil</router-link>
                </template>
            </CustomButton>
            <CustomButton>
                <template v-slot:left-icon>
                    <span class="material-symbols-outlined">logout</span>
                </template>
                <template v-slot:right-text>
                    <router-link :to="{name: 'login'}">Cerrar sesión</router-link>
                </template>
            </CustomButton>
        </div>
    </nav>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from './CustomButton.vue';

export default defineComponent({
    name: 'NavBarPublic',
    components: {
        CustomButton,
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