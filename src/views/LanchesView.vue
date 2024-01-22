<template>
  <div class="is-flex">
    <SidebarComponent />

    <div class="mb-6 is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center">

      <BannerComponent titulo="lanches">
        <div class="card-container is-flex is-flex-wrap is-justify-content-space-between mt-2" style="gap: 2rem;">

          <CardComponent style="background-color: var(--rosa-claro);" v-for="lanche in lanches" :key="lanche.id"
            :texto="lanche.nomeLanche">
            <div class="is-flex is-flex-direction-column p-2"
              style="background-color: var(--rosa-claro); gap: 3rem; border-radius: 0 0 9px 9px;">
              <p class="is-align-self-flex-start" style="height: 60px;">
                {{ lanche.descricaoLanche }}
              </p>
              <p class="is-align-self-flex-end has-text-weight-bold">{{ formatarPreco(lanche.precoLanche)}}</p>
            </div>
          </CardComponent>

        </div>
      </BannerComponent>
    </div>
  </div>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import lancheService from '@/services/lancheService';
import { formatarPreco } from '@/utils';

export default {
  name: 'LanchesView',

  components: {
    CardComponent,
    BannerComponent,
    SidebarComponent
  },
  data() {
    return {
      lanches: []
    }
  },
  mounted() {
    this.carregarLanches()
  },
  methods: {
    async carregarLanches() {
      try {
        this.lanches = await lancheService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter lanches:', error)
      }
    },
    formatarPreco(valor){
      return formatarPreco(valor)
    },
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
p {
  color: var(--preto-principal);
}
</style>