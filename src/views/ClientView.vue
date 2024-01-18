<template>
  <div class="is-flex is-justify-content-center" style="gap: 3em;">
    <CardComponent texto="nossos lanches!"><img src="@/assets/images/cliente.jpg"/></CardComponent>
    <CardComponent texto="nossas promoções! "><img src="@/assets/images/cliente.jpg"/></CardComponent>
    <CardComponent texto="monte seu lanche!"><img src="@/assets/images/cliente.jpg"/></CardComponent>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'ClientView',
  components: {
    CardComponent
  },

  data() {
    return {
      imagemSrc: '@/assets/images/cliente.jpg'
    }
  }
}
</script>

<style scoped></style>
