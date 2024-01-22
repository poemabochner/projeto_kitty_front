<template>
  <div class="is-flex m-3 is-flex-direction-column" style="gap: 0.7rem;">
    <div class="sidebar-img-container" @click="$router.push('/administrador')" title="Ingredientes">
      <img class="sidebar-img p-2" src="@/assets/icons/ingredientes.svg" alt="">
      <span class="tooltip">Ingredientes</span>
    </div>
    <div class="sidebar-img-container" @click="$router.push('/lanches')" title="Lanches">
      <img class="sidebar-img p-2" src="@/assets/icons/lanches.svg" alt="">
      <span class="tooltip">Lanches</span>
    </div>
    <div class="sidebar-img-container" @click="$router.push('/promocoes')" title="Promoções">
      <img class="sidebar-img p-2" src="@/assets/icons/promocao.svg" alt="">
      <span class="tooltip">Promoções</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar-img-container {
  position: relative;
}

.sidebar-img {
  background-color: var(--cor-hover);
  border-radius: 10px;
  width: 40px;
  cursor: pointer;
}

.sidebar-img:hover {
  background-color: var(--rosa-escuro);
}

.tooltip {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateX(35%);
  background-color: var(--rosa-claro);
  color: var(--preto-principal);
  border-radius: 5px;
  padding: 10px;
  display: none;
}

.sidebar-img-container:hover .tooltip {
  display: block;
}
</style>
