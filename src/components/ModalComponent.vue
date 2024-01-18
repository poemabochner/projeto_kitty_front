<template>
  <div>
    <div v-if="isModalActive" class="modal" @click="closeModal">
      <div class="modal-background"></div>
      <div class="modal-card has-text-centered" @click.stop>
        <header class="is-flex is-justify-content-center modal-card-head has-text-weight-semibold" style="gap:1rem">
          <img src="@/assets/icons/hotdog.svg"/>
          <h1 class="is-size-3">faça seu pedido!</h1>
        </header>
        <section class="modal-card-body has-text-weight-semibold">
          <p>AAAAAAAAAAAAAAA</p>
        </section>
        <footer class="modal-card-foot has-text-weight-semibold has-text-right">
          <p>Total - R$: 12,99</p>
        </footer>
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
      required: true
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

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
}

.modal-card-head {
  background-color: var(--cor-hover);
}

.modal-card-body{
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
