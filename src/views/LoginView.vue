<template>
    <NavBarPublic />
    <form @submit.prevent="sendForm" class="form">
    <div class="form-title-section">
      <h1 class="form-title">Inicia sesión en</h1>
      <img src="../assets/metaltterLogo.png" alt="">
    </div>
    <div class="row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Usuario</label>
      <div class="col-sm-10">
        <input v-model="username" type="text" class="form-control" id="staticUsername" placeholder="Añade un nombre de usuario" required>
      </div>
    </div>
    <div class="row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="Añade tu contraseña" required>
      </div>
    </div>
    <div class="password-forgotten">
        <p>¿Has olvidado tu contraseña? Clica <router-link :to="{name: 'recovering-password'}">aquí.</router-link></p>
    </div>
    <button class="btn btn-submit" type="submit">Iniciar sesión</button>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
import useLogin from '@/composable/useLogin'
import router from '@/router';

export default defineComponent({
    components: {
    NavBarPublic
    },

    setup () {
    const { login } = useLogin()
    const username = ref<string>('');
    const password = ref<string>('');

    return {
      username, 
      password,
      async sendForm() {
        const credentials = { username: username.value, password: password.value }
        await login(credentials)
        router.push({path: `/mi-perfil/`})
      }
    }

  }
})
</script>

<style scoped>


.form {
  background-color: black;
  border: 1px solid #bc2025;
  max-width: 600px;
  align-self: center;
  margin: 20px auto;
  margin-top: 100px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.form-title-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

.form-title {
  font-weight: 700;
  padding: 5px;
  color: white;
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


</style>