<template>
  <ToastComponent ref="toast"
    message="seja bem-vindo, cliente!"><img src="@/assets/icons/oktoast.svg" style="width: 24px;" /></ToastComponent>
  <div>

    <ModalComponent :isModalActive="isModalActive" title="faça seu pedido!" :text="`Total - ${formatarPreco(totalTotal)}`"
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
                <CounterComponent @increment="adicionarLanche(lanche.precoLanche)"
                  @decrement="subtrairLanche(lanche.precoLanche)" />
              </p>
            </div>
            <hr style="background-color: var(--branco);">
            <p class="is-flex has-text-weight-medium">total dos lanches: {{ formatarPreco(totalLanche) }} </p>
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
                <CounterComponent @increment="adicionarPromocao(promocao.precoPromocao)"
                  @decrement="subtrairPromocao(promocao.precoPromocao)" />
              </p>
            </div>
            <hr style="background-color: var(--branco);">
            <p class="is-flex has-text-weight-medium">total das promoções: {{ formatarPreco(totalPromocao) }} </p>
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
                <CounterComponent @increment="adicionarIngrediente(ingrediente.precoIngrediente)"
                  @decrement="subtrairIngrediente(ingrediente.precoIngrediente)" />
              </p>
            </div>
            <hr style="background-color: var(--branco);">
            <p class="is-flex has-text-weight-medium">total do lanche montado: {{ formatarPreco(totalMonteSeuLanche) }} </p>
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
            src="@/assets/images/promocao.png" style="border-radius: 0px 0px 10px 10px;" />
        </CardComponent>
        <CardComponent class="card" texto="monte seu lanche!" @click="openModal('monteSeuLanche')"><img
            src="@/assets/images/ingredientes.jpg" style="border-radius: 0px 0px 10px 10px;" /></CardComponent>
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
      selectedLanche: null,
      totalMonteSeuLanche: 0,
      totalPromocao: 0,
      totalLanche: 0,
    }
  },
  computed: {
    totalTotal() {
      return this.totalMonteSeuLanche + this.totalPromocao + this.totalLanche
    }
  },
  methods: {
    formatarPreco(valor) {
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
      this.totalMonteSeuLanche = 0
      this.totalPromocao = 0
      this.totalLanche = 0
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

    adicionarIngrediente(preco) {
      this.totalMonteSeuLanche += preco
    },

    subtrairIngrediente(preco) {
      this.totalMonteSeuLanche -= preco
    },
    adicionarPromocao(preco) {
      this.totalPromocao += preco
    },

    subtrairPromocao(preco) {
      this.totalPromocao -= preco
    },
    adicionarLanche(preco) {
      this.totalLanche += preco
    },

    subtrairLanche(preco) {
      this.totalLanche -= preco
    }

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
