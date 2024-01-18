<template>
  <div class="login__container">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'LoginView',
  components: {
    LoginComponent
  }
}
</script>

<style scoped>
.login__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>