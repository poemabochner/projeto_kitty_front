<template>
  <div class="card has-text-weight-semibold has-text-centered my-5">
    <div class="card__texto p-4">
      <p>{{ texto }}</p>
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

.card:hover {
  cursor: pointer;
}
</style>