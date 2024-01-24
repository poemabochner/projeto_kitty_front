<template>
  <div>
    <div v-if="isModalActive" class="modal" @click="closeModal">
      <div class="modal-background"></div>
      <div class="modal-card has-text-centered" @click.stop>
        <header class="is-flex is-justify-content-center modal-card-head has-text-weight-semibold" style="gap:1rem">
          <h1 class="is-size-5 has-text-weight-semibold">{{ title }}</h1>
        </header>
        <section class="modal-card-body p-0">
          <slot name="content">
          </slot>
        </section>
        <button class="modal-close" @click="closeModal">Fechar Modal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalActive: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: var(--preto-principal);
}

.modal-card {
  border-radius: 10px;
  position: relative;
  width: 22rem;
}

.modal-card-head {
  background-color: var(--cor-hover);
}

.modal-card-body {
  background-color: var(--rosa-claro);
}

.modal-card-foot {
  background-color: var(--rosa-salmao);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
