<template>
  <div class="card has-text-weight-semibold has-text-centered my-5" style="border-radius: 12px;">
    <div class="card__texto p-4" style="background-color: var(--cor-hover); height: 35%;">
      <h1 class="has-text-weight-semibold">{{ texto }}</h1>
    </div>
    <div>
    <slot></slot></div>
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

.card__texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
}

.card__texto h1 {
  word-break: break-word;
}
</style>
