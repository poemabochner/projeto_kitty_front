<template>
  <div class="button__container is-flex is-justify-content-center p-2 has-text-weight-semibold has-text-centered m-3" style="gap: 4px;">
    <slot></slot>
    {{  textoBotao }}
  </div>
</template>

<script>
  export default {
    name: 'ButtonComponent',

    props: {
      textoBotao: {
        type: String,
      }
    }
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