<template>
  <div>
    <ModalShortComponent v-if="modalType === 'excluir'" :isModalActive="isModalActive" :title="modalTitle"
      @closeModal="closeModal">
      <template v-slot:content>
        <div class="is-flex is-justify-content-center" style="gap:1px;">
          <ButtonComponent textoBotao="Sim" @click="excluir"><img src="@/assets/icons/check.svg" /></ButtonComponent>
          <ButtonComponent textoBotao="Cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
          </ButtonComponent>
        </div>
      </template>
    </ModalShortComponent>

    <ModalShortComponent v-else-if="modalType === 'adicionar'" :isModalActive="isModalActive" :title="modalTitle"
      @closeModal="closeModal">
      <template v-slot:content>
        <div class="p-2 is-size-2 is-flex is-flex-direction-column" style="gap: 1rem;">
          <div class="">
            <p>nome da promoção:</p>
            <input class="input" v-model="nomePromocao" placeholder="nome" />
          </div>
          <div>
            <p>preço da promoção:</p>
            <input class="input" @input="validarNumero" type="number" v-model="precoPromocao" placeholder="" />
          </div>
          <div>
            <p>porcentagem do desconto:</p>
            <input class="input" @input="validarNumero" type="number" v-model="porcentagemDesconto" placeholder="" />
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="Salvar" @click="salvar"><img src="@/assets/icons/check.svg" /></ButtonComponent>
            <ButtonComponent textoBotao="Cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>

    <div class="is-flex">
      <SidebarComponent />
      <div class="mb-6 is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center">
        <BannerComponent titulo="promoções">
          <div class="columns is-flex is-justify-content-center mt-4" style="gap: 3rem;">
            <CardComponent texto="completo + refrigerante 300ml">
              <div class="is-flex is-flex-direction-column p-2"
                style="background-color: var(--rosa-claro); border-radius: 0 0 9px 9px;">
                <p class="is-size-5 is-align-self-flex-start">
                  cachorro quente completo + refrigerante
                </p>
                <p class="is-align-self-flex-end has-text-weight-bold p-4">R$: 8,90</p>
                <div class="is-flex p-2 is-align-self-flex-end">
                  <img class="icons" src="@/assets/icons/edit.svg" style="width: 26px;" />
                  <img class="icons" src="@/assets/icons/delete.svg" @click="openModal('excluir')" />
                </div>
              </div>
            </CardComponent>
          </div>
          <ButtonComponent textoBotao="adicionar" @click="openModal('adicionar')" />
        </BannerComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import ModalShortComponent from '@/components/ModalShortComponent.vue';

export default {
  name: 'PromocoesView',
  components: {
    BannerComponent,
    CardComponent,
    ButtonComponent,
    SidebarComponent,
    ModalShortComponent,
  },
  data() {
    return {
      isModalActive: false,
      modalType: null,
      modalTitle: '',
      nomePromocao: '',
      precoPromocao: '',
      porcentagemDesconto: '',
    };
  },
  methods: {
    openModal(type) {
      this.isModalActive = true
      this.modalType = type

      if (type === 'excluir') {
        this.modalTitle = `Deseja mesmo excluir a promoção ${this.nome}?`
      } else if (type === 'adicionar') {
        this.modalTitle = 'Adicionar Promoção'
      }
    },
    closeModal() {
      this.isModalActive = false
      this.modalType = null
    },
    cancelar() {
      this.closeModal()
    },
    excluir() {
      console.log('Ingrediente excluído:', this.nome)
      this.closeModal()
    },
    salvar() {
      console.log('Promoção salva:', {
        nome: this.nomePromocao,
        preco: this.precoPromocao,
        porcentagemDesconto: this.porcentagemDesconto,
      })
      this.closeModal()
    },
    validarNumero() {
      if (this.porcentagemDesconto < 0 || this.precoPromocao < 0) {
        this.porcentagemDesconto = Math.max(this.porcentagemDesconto, 0);
        this.precoPromocao = Math.max(this.precoPromocao, 0);
      }
    },
  },
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