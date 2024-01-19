<template>
  <div>
    <ModalComponent :isModalActive="isModalActive" title="faça seu pedido!" text="Total - R$:13,00"
      @closeModal="closeModal">
      <img src="@/assets/icons/hotdog.svg" />
      <template v-slot:content>
        <div class="is-flex is-flex-direction-column" style="gap:1px;">
          <AccordionComponent title="nossos lanches:">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>
              <p><CounterComponent/></p>
            </div>
          </AccordionComponent>
          <AccordionComponent title="nossas promoções:">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>
              <p><CounterComponent/></p>
            </div>
          </AccordionComponent>
          <AccordionComponent title="monte seu lanche:">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>
              <p><CounterComponent/></p>
            </div>
          </AccordionComponent>
        </div>
      </template>
    </ModalComponent>
    <div class="is-flex is-justify-content-center" style="gap: 3rem;">
      <CardComponent texto="nossos lanches!" @click="openModal('lanche')"><img src="@/assets/images/lanche.jpg" />
      </CardComponent>
      <CardComponent texto="nossas promoções!" @click="openModal('promocao')"><img src="@/assets/images/promocao.png" />
      </CardComponent>
      <CardComponent texto="monte seu lanche!" @click="openModal('monteSeuLanche')"><img
          src="@/assets/images/ingredientes.jpg" /></CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import AccordionComponent from '@/components/AccordionComponent.vue';
import CounterComponent from '@/components/CounterComponent.vue';

export default {
  name: 'ClientView',
  components: {
    CardComponent,
    ModalComponent,
    AccordionComponent,
    CounterComponent,
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

<style scoped>
p {
  color: var(--preto-principal);
}
</style>
