<template>
  <div class="button__container p-2 has-text-weight-semibold has-text-centered m-3">
    adicionar
  </div>
</template>

<script>
  export default {
    name: 'ButtonComponent',
  }
</script>

<style scoped>
  .button__container {
    background-color: var(--cor-hover);
    width: 8rem;
    border-radius: 10px;
    cursor: pointer;
  }

  .button__container:hover{
    background-color: var(--rosa-escuro);
  }
</style>