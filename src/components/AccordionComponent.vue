<template>
  <div class="accordion" :class="{ 'is-expanded': isExpanded }">
    <div class="accordion-header" @click="toggleAccordion">
      <div class="accordion-title has-text-weight-semibold is-size-4">{{ title }}</div>
      <div class="accordion-arrow" :class="{ 'is-rotated': isExpanded }">
        <img style="width: 15px;" src="@/assets/icons/arrow.svg"/>
      </div>
    </div>
    <div class="accordion-content" v-show="isExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleAccordion() {
      this.$emit('toggleAccordion');
    },
  },
};
</script>

<style scoped>
.accordion {
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--cor-principal);
  padding: 10px;
  cursor: pointer;
}

.is-expanded .accordion-arrow {
  transform: rotate(180deg);
}

.accordion-content {
  background-color: var(--rosa-claro);
  padding: 10px;
}
</style>
