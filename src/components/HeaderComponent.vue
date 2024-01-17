<template>
  <header class="header is-flex py-5 pr-6 pl-4 is-justify-content-space-between">
    <img class="header__logo" src="@/assets/images/logo.png" />
    <div class="is-flex is-align-items-center" style="gap: 5rem;">
      <LoggedUserComponent />
      <img class="header__icon" src="@/assets/icons/logout.svg"  ref="iconRef" />
    </div>
  </header>
</template>

<script>
import LoggedUserComponent from './LoggedUserComponent.vue';
import { iconExpand } from '@/utils';

export default {
  name: 'HeaderComponent',
  components: {
    LoggedUserComponent,
  },

  mounted() {
    const iconElement = this.$refs.iconRef
    if (iconElement) {
      iconExpand(iconElement);
    }
  },
}
</script>

<style scoped>
.header {
  background-color: var(--cor-principal);
  font-family: var(--fonte-principal);
}

.header__logo {
  width: 150px;
}

.header__icon {
  width: 50px;
  filter: var(--filtro-branco);
  transition: transform 0.3s ease;
}

.header__icon:hover {
  cursor: pointer;
  filter: var(--filtro-rosa)
}
</style>