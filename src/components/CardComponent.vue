<template>
  <div class="card has-text-weight-semibold has-text-centered my-5" style="border-radius: 12px;">
    <div class="card__texto p-4">
      <h1 class="has-text-weight-semibold">{{ texto }}</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    texto: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.card {
  background-color: var(--cor-hover);
  width: 12rem;
}

</style>