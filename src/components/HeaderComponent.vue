<template>
  <div class="header is-flex p-4">
    <img class="header__logo" src="@/assets/images/logo.png" />
    <LoggedUserComponent />
    <img class="header__icon" src="@/assets/icons/logout.svg" />
  </div>
</template>

<script>
import LoggedUserComponent from './LoggedUserComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LoggedUserComponent,
  }
}
</script>

<style scoped>
.header {
  background-color: var(--cor-principal);
  font-family: var(--fonte-principal);
}

.header__logo {
  width: 7%;
}

.header__icon {
  width: 2%;
  filter: var(--filtro-branco);
}
</style>