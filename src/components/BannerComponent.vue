<template>
  <div class="is-align-items-center my-6 is-flex is-justify-content-center m-3 is-flex-direction-column">
    <h1 style="background-color: var(--cor-hover); border-radius: 10px; width: 50rem;" class=" p-5 has-text-centered is-size-3 has-text-weight-semibold">{{ titulo }}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BannerComponent',
    props: {
      titulo: {
      type: String,
      required: true,
    },
    }
  }
</script>

<style scoped>

</style>