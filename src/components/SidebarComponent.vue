<template>
  <div class="is-flex m-3" style="gap: 0.7rem;">
    <img class="sidebar-img p-2" src="@/assets/icons/ingredientes.svg" alt="" @click="$router.push('/administrador')">
    <img class="sidebar-img p-2" src="@/assets/icons/lanches.svg" alt="" @click="$router.push('/lanches')">
    <img class="sidebar-img p-2" src="@/assets/icons/promocao.svg" alt="" @click="$router.push('/promocoes')">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar-img {
  background-color: var(--cor-hover);
  border-radius: 10px;
  width: 40px;
  cursor: pointer;
}

.sidebar-img:hover {
  background-color: var(--rosa-escuro);
}
</style>