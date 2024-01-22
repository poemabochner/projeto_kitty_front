<template>
  <ToastComponent ref="toast" toastClass="toast is-flex p-5 tag is-primary is-light is-large"
    message="seja bem-vindo, cliente!"><img src="@/assets/icons/oktoast.svg" style="width: 24px;" /></ToastComponent>
  <div>

    <ModalComponent :isModalActive="isModalActive" title="faça seu pedido!" text="Total - R$:13,00"
      @closeModal="closeModal">
      <img src="@/assets/icons/hotdog.svg" />
      <template v-slot:content>
        <div class="is-flex is-flex-direction-column" style="gap:1px;">

          <AccordionComponent :is-expanded="accordionState.lanche" title="nossos lanches:"
            @toggleAccordion="toggleAccordion('lanche')">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;" v-for="lanche in lanches"
              :key="lanche.id">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start col-nome-descricao">
                <p class="has-text-weight-semibold is-size-4">{{ lanche.nomeLanche }}</p>
                <p>{{ lanche.descricaoLanche }}</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">{{ formatarPreco(lanche.precoLanche) }}</p>
              <p>
                <CounterComponent />
              </p>
            </div>
          </AccordionComponent>

          <AccordionComponent :is-expanded="accordionState.promocao" title="nossas promoções:"
            @toggleAccordion="toggleAccordion('promocao')">
            <div class="is-flex is-justify-content-space-between" style="gap: 1rem;" v-for="promocao in promocoes"
              :key="promocao.id">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start col-nome-descricao">
                <p class="has-text-weight-semibold is-size-4">{{ promocao.nomePromocao }}</p>
                <p>{{ promocao.descricaoPromocao }}</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">{{ formatarPreco(promocao.precoPromocao) }}</p>
              <p>
                <CounterComponent />
              </p>
            </div>
          </AccordionComponent>

          <AccordionComponent :is-expanded="accordionState.monteSeuLanche" title="monte seu lanche:"
            @toggleAccordion="toggleAccordion('monteSeuLanche')">
            <div class="is-flex is-justify-content-space-between" v-for="(ingrediente, index) in tableData"
              :key="ingrediente.id" style="gap: 1rem;"
              :class="{ 'linha-par': index % 2 === 0, 'linha-impar': index % 2 !== 0 }">
              <div class="is-flex is-flex-direction-column is-align-items-flex-start col-nome-descricao">
                <p class="has-text-weight-semibold is-size-4">{{ ingrediente.nomeIngrediente }}</p>
              </div>
              <p class="has-text-weight-semibold is-size-5">{{ formatarPreco(ingrediente.precoIngrediente) }}</p>
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
            style="border-radius: 0px 0px 10px 10px;" src="@/assets/images/lanche.jpg" />
        </CardComponent>
        <CardComponent class="card" texto="nossas promoções!" @click="openModal('promocao')"><img
            src="@/assets/images/promocao.png" style="border-radius: 0px 0px 10px 10px;"/>
        </CardComponent>
        <CardComponent class="card" texto="monte seu lanche!" @click="openModal('monteSeuLanche')"><img
            src="@/assets/images/ingredientes.jpg" style="border-radius: 0px 0px 10px 10px;"/></CardComponent>
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
import ingredienteService from '@/services/ingredienteService';
import lancheService from '@/services/lancheService';
import promocaoService from '@/services/promocaoService';
import { formatarPreco } from '@/utils';

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
      },
      lanches: [],
      promocoes: [],
    }
  },
  methods: {
    formatarPreco(valor){
      return formatarPreco(valor)
    },
    async carregarPromocoes() {
      try {
        this.promocoes = await promocaoService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter lanches:', error)
      }
    },
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
    },
    async carregarIngredientes() {
      try {
        this.tableData = await ingredienteService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter ingredientes:', error)
      }
    },
    async carregarLanches() {
      try {
        this.lanches = await lancheService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter lanches:', error)
      }
    },
  },
  mounted() {
    this.carregarIngredientes()
    this.carregarLanches()
    this.carregarPromocoes()
  },
}
</script >

<style scoped>
.card:hover {
  cursor: pointer;
}

.col-nome-descricao {
  max-width: 100%;
  width: 50%;
}

.col-nome-descricao p {
  word-break: break-word;
}

p {
  color: var(--preto-principal);
}</style>
