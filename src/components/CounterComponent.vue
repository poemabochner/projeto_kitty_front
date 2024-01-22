<template>
  <div class="counter">
    <img @click="decrement" src="@/assets/icons/minus.svg" style="cursor: pointer; width:30px;"/>
    <span class="has-text-weight-semibold">{{ count }}</span>
    <img @click="increment" src="@/assets/icons/plus.svg" style="cursor: pointer; width:30px;"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1
      }
    },
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 10px;
}
span {
  color: var(--preto-principal);
}
</style>
