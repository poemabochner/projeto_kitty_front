<template>
  <SidebarComponent/>
  <div>
    <BannerComponent titulo="promoções">
      <div class="is-flex mt-4" style="gap: 3rem;">
        <CardComponent texto="Completo + refrigerante 300ml">
          <div class="is-flex is-flex-direction-column p-2"
            style="background-color: var(--rosa-claro); border-radius: 0 0 9px 9px;">
            <p class="is-size-6 is-align-self-flex-start">
              Cachorro quente completo + refrigerante
            </p>
            <p class="is-align-self-flex-end has-text-weight-bold p-4">R$: 8,90</p>
            <div class="is-flex p-2 is-align-self-flex-end">
              <img class="icons" src="@/assets/icons/edit.svg" style="width: 26px;" />
              <img class="icons" src="@/assets/icons/delete.svg" />
            </div>
          </div>
        </CardComponent>
        <CardComponent texto="Completo + refrigerante 300ml">
          <div class="is-flex is-flex-direction-column p-2"
            style="background-color: var(--rosa-claro); border-radius: 0 0 9px 9px;">
            <p class="is-size-6 is-align-self-flex-start">
              Cachorro quente completo + refrigerante
            </p>
            <p class="is-align-self-flex-end has-text-weight-bold p-4">R$: 8,90</p>
            <div class="is-flex p-2 is-align-self-flex-end">
              <img class="icons" src="@/assets/icons/edit.svg" style="width: 26px;" />
              <img class="icons" src="@/assets/icons/delete.svg" />
            </div>
          </div>
        </CardComponent>
        <CardComponent texto="Completo + refrigerante 300ml">
          <div class="is-flex is-flex-direction-column p-2"
            style="background-color: var(--rosa-claro); border-radius: 0 0 9px 9px;">
            <p class="is-size-6 is-align-self-flex-start">
              Cachorro quente completo + refrigerante
            </p>
            <p class="is-align-self-flex-end has-text-weight-bold p-4">R$: 8,90</p>
            <div class="is-flex p-2 is-align-self-flex-end">
              <img class="icons" src="@/assets/icons/edit.svg" style="width: 26px;" />
              <img class="icons" src="@/assets/icons/delete.svg" />
            </div>
          </div>
        </CardComponent>

      </div>
      <ButtonComponent  textoBotao="adicionar" />
    </BannerComponent>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  name: 'PromocoesView',
  components: {
    BannerComponent,
    CardComponent,
    ButtonComponent,
    SidebarComponent
  }
}
</script>

<style scoped>
p {
  color: var(--preto-principal);
}

.icons:hover {
  cursor: pointer;
  filter: var(--filtro-rosa-escuro);
}
</style>