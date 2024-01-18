<template>
  <div>
    <ModalComponent :isModalActive="isModalActive" @closeModal="closeModal"></ModalComponent>
    <div class="is-flex is-justify-content-center" style="gap: 3rem;">
      <CardComponent texto="nossos lanches!" @click="openModal('lanche')"><img src="@/assets/images/cliente.jpg" /></CardComponent>
      <CardComponent texto="nossas promoções!" @click="openModal('promocao')"><img src="@/assets/images/cliente.jpg" /></CardComponent>
      <CardComponent texto="monte seu lanche!" @click="openModal('monteSeuLanche')"><img src="@/assets/images/cliente.jpg" /></CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';

export default {
  name: 'ClientView',
  components: {
    CardComponent,
    ModalComponent
  },
  data() {
    return {
      imagemSrc: '@/assets/images/cliente.jpg',
      isModalActive: false,
      modalType: null
    }
  },
  methods: {
    openModal(type) {
      this.isModalActive = true,
      this.modalType = type
    },
    closeModal() {
      this.isModalActive = false,
      this.modalType = null
    }
  }
}
</script>

<style scoped></style>
