<template>
  <ToastComponent ref="toast" message="seja bem-vindo, $usuário!" />
  <div>

    <ModalComponent :isModalActive="isModalActive" title="faça seu pedido!" text="Total - R$:13,00"
      @closeModal="closeModal">
      <img src="@/assets/icons/hotdog.svg" />
      <template v-slot:content>
        <div class="is-flex is-flex-direction-column" style="gap:1px;">

          <AccordionComponent :is-expanded="accordionState.lanche" title="nossos lanches:"
            @toggleAccordion="toggleAccordion('lanche')">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>

              <p>
                <CounterComponent />
              </p>

            </div>
          </AccordionComponent>

          <AccordionComponent :is-expanded="accordionState.promocao" title="nossas promoções:"
            @toggleAccordion="toggleAccordion('promocao')">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>
              <p>
                <CounterComponent />
              </p>
            </div>
          </AccordionComponent>
          <AccordionComponent :is-expanded="accordionState.monteSeuLanche" title="monte seu lanche:"
            @toggleAccordion="toggleAccordion('monteSeuLanche')">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start" style="max-width: 50%;">
                <p class="has-text-weight-semibold is-size-4">completo com linguiça</p>
                <p>esse lanche leva todos os ingredientes, menos a linguiça</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">R$:13,90</p>
              <p>
                <CounterComponent />
              </p>
            </div>
          </AccordionComponent>
        </div>
      </template>
    </ModalComponent>
    <div class="is-flex is-align-items-center is-justify-content-center" style="height: 80vh;">
    <div class="is-flex is-justify-content-center" style="gap: 3rem;">
      <CardComponent class="card" texto="nossos lanches!" @click="openModal('lanche')"><img
          src="@/assets/images/lanche.jpg" />
      </CardComponent>
      <CardComponent class="card" texto="nossas promoções!" @click="openModal('promocao')"><img
          src="@/assets/images/promocao.png" />
      </CardComponent>
      <CardComponent class="card" texto="monte seu lanche!" @click="openModal('monteSeuLanche')"><img
          src="@/assets/images/ingredientes.jpg" /></CardComponent>
    </div>
  </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import AccordionComponent from '@/components/AccordionComponent.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import ToastComponent from '@/components/ToastComponent.vue';

export default {
  name: 'ClientView',
  components: {
    CardComponent,
    ModalComponent,
    AccordionComponent,
    CounterComponent,
    ToastComponent
  },
  data() {
    return {
      isModalActive: false,
      modalType: null,
      accordionState: {
        lanche: false,
        promocao: false,
        monteSeuLanche: false
      }
    }
  },
  methods: {
    openModal(type) {
      this.isModalActive = true
      this.modalType = type
      Object.keys(this.accordionState).forEach(key => {
        this.accordionState[key] = false
      })
      this.accordionState[type] = true
    },
    closeModal() {
      this.isModalActive = false
      this.modalType = null
    },
    toggleAccordion(type) {
      this.accordionState[type] = !this.accordionState[type]
    }
  }
}
</script >

<style scoped>
.card:hover {
  cursor: pointer;
}

p {
  color: var(--preto-principal);
}
</style>
