<template>
  <div class="header is-flex py-5 pr-6 pl-4 is-justify-content-space-between">
    <img class="header__logo" src="@/assets/images/logo.png" />
    <div class="is-flex is-align-items-center" style="gap: 5rem;">
      <LoggedUserComponent />
      <img class="header__icon" src="@/assets/icons/logout.svg"  @mouseover="expandIcon" @mouseout="shrinkIcon" />
    </div>
  </div>
</template>

<script>
import LoggedUserComponent from './LoggedUserComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LoggedUserComponent,
  },

  data() {
    return {
      isIconExpanded: false,
    }
  },

  methods: {
    expandIcon() {
      this.isIconExpanded = true
    },

    shrinkIcon() {
      this.isIconExpanded = false
    }
  }
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
  filter: invert(64%) sepia(32%) saturate(1390%) hue-rotate(302deg) brightness(100%) contrast(104%);
  transform: scale(1.2);
}
</style>