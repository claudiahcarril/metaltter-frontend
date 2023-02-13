<template>


  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useLogin from './composable/useLogin'

export default defineComponent({
  setup() {
    const token = localStorage.getItem('token')
    if (token) {
      const {setToken} = useLogin()
      setToken(token)
    }
    return {}
  },
})
</script>


<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bc2025;
  height: 100%;
}

body, html {
  height: 100%;
  background-image: url(./assets/guitars2.png);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
}



</style>
