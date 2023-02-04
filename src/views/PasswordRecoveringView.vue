<template>
    <NavBarPublic />
    <form @submit.prevent="sendForm" class="form">
    <div class="form-title-section">
      <h1 class="form-title">¿Olvidaste la contraseña?</h1>
    </div>
    <div>
    <h2 class="form-subtitle">Introduce tu correo electrónico y te enviaremos instrucciones para crear una nueva contraseña.</h2>
    </div>
    <div class="row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input v-model="password" type="email" class="form-control" id="inputEmail" placeholder="Indica tu dirección de correo" required>
      </div>
    </div>
    <div class="login">
        <p>No importa, <router-link :to="{name: 'login'}">llévame de nuevo a la página de Login.</router-link></p>
    </div>
    <button class="btn btn-submit" type="submit">Enviar mail</button>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBarPublic from '@/components/NavBarPublic.vue';
// import useLogin from '@/composable/useLogin'
// import router from '@/router';

export default defineComponent({
    components: {
    NavBarPublic
    },

    setup () {
    // const { login } = useLogin()
    const username = ref<string>('');
    const password = ref<string>('');

    return {
      username, 
      password,
      async sendForm() {
        // const credentials = { username: username.value, password: password.value }
        // await login(credentials)
        // router.push({name: 'list-products'})
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


.form-subtitle {
  font-weight: 400;
  padding: 5px;
  color: white;
  font-size: 1rem;
  margin: 0 80px 0 80px ;
  padding-top: 10px;
}

.col-form-label {
  font-weight: 700;
  color: white;
  font-weight: 500;
}

.row {
  margin: 30px 20px 20px 20px;
}

.login {
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

</style>