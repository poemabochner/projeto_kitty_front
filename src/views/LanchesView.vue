<template>
  <div class="is-flex">
    <SidebarComponent />

    <div class="mb-6 is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center">

      <BannerComponent titulo="lanches">
        <div class="columns is-flex is-justify-content-center mt-4" style="gap: 3rem;">

          <CardComponent texto="completo com linguiça">
            <div class="is-flex is-flex-direction-column p-2"
              style="background-color: var(--rosa-claro); gap: 3rem; border-radius: 0 0 9px 9px;">
              <p class="is-align-self-flex-start">
                esse lanche leva todos os ingredientes, menos a linguiça
              </p>
              <p class="is-align-self-flex-end has-text-weight-bold">R$: 5,90</p>
            </div>
          </CardComponent>
          
          <CardComponent texto="completo com linguiça">
            <div class="is-flex is-flex-direction-column p-2"
              style="background-color: var(--rosa-claro); gap: 3rem; border-radius: 0 0 10px 10px;">
              <p class="is-align-self-flex-start">
                esse lanche leva todos os ingredientes, menos a linguiça
              </p>
              <p class="is-align-self-flex-end has-text-weight-bold">R$: 5,90</p>
            </div>
          </CardComponent>
          <CardComponent texto="completo com linguiça">
            <div class="is-flex is-flex-direction-column p-2"
              style="background-color: var(--rosa-claro); gap: 3rem; border-radius: 0 0 10px 10px;">
              <p class="is-align-self-flex-start">
                esse lanche leva todos os ingredientes, menos a linguiça
              </p>
              <p class="is-align-self-flex-end has-text-weight-bold">R$: 5,90</p>
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

export default {
  name: 'LanchesView',

  components: {
    CardComponent,
    BannerComponent,
    SidebarComponent
  }
}
</script>

<style scoped>
p {
  color: var(--preto-principal);
}
</style>