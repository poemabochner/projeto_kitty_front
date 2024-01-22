<template>
  <div class="usuario-logado is-flex py-3 pr-4 pl-3 is-align-items-center has-text-weight-semibold">
    <img class="usuario-logado__icon" src="@/assets/icons/user.svg"/>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoggedUserComponent',
  computed: {
    user() {
      const currentPath = this.$route.path;

      if (currentPath.includes('/cliente')) {
        return 'cliente'
      } else if (currentPath.includes('/promocoes')|| currentPath.includes('/lanches')|| currentPath.includes('/ingredientes')) {
        return 'administrador'
      } else {
        return 'desconhecido'
      }
    },
  },
}
</script>

<style scoped>
.usuario-logado {
  color: var(--branco);
  background-color: var(--rosa-detalhes);
  border: 2px solid var(--branco);
  border-radius: 10px;
  height: 3rem;
  gap: 0.5rem;
}

.usuario-logado__icon {
  width: 25px;
}
</style>
