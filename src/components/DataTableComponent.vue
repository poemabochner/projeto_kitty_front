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
            <p>nome do ingrediente:</p>
            <input class="input" v-model="nomeIngrediente" placeholder="nome" />
          </div>
          <div>
            <p>preço do ingrediente:</p>
            <input class="input" type="number" @input="validarNumero" v-model="precoIngrediente" placeholder="preço" />
          </div>
          <div>
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="Salvar" @click="salvar"><img src="@/assets/icons/check.svg" /></ButtonComponent>
            <ButtonComponent textoBotao="Cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>
  </div>
  <table>
    <table>
      <thead>
        <tr class="has-text-centered">
          <th class="p-5" colspan="3">
            <h2 class="is-size-3 has-text-weight-semibold">{{ tableTitle }}</h2>
          </th>
        </tr>
      </thead>
      <tbody class="is-flex is-flex-direction-column">

        <tr class="is-flex is-justify-content-space-between" v-for="(item, index) in tableData" :key="item.id"
          :class="{ 'linha-par': index % 2 === 0, 'linha-impar': index % 2 !== 0 }">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td class="is-flex" style="gap: 0.6rem;">
            <img class="icons" src="@/assets/icons/edit.svg" style="width: 26px;" />
            <img class="icons" src="@/assets/icons/delete.svg" @click="openModal('excluir')" />
          </td>
        </tr>
        <div class="is-flex is-justify-content-flex-end pr-1"
          style="background-color: var(--rosa-salmao); border-radius: 0 0 10px 10px;">
          <ButtonComponent textoBotao="adicionar" @click="openModal('adicionar')"/>
        </div>
      </tbody>
    </table>
  </table>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import ModalShortComponent from './ModalShortComponent.vue';

export default {
  components: {
    ButtonComponent,
    ModalShortComponent
  },
  props: {
    tableTitle: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isModalActive: false,
      modalType: null,
      modalTitle: '',
      nomeIngrediente: '',
      precoIngrediente: '',
      porcentagemDesconto: '',
    };
  },
  methods: {
    openModal(type) {
      this.isModalActive = true
      this.modalType = type

      if (type === 'excluir') {
        this.modalTitle = `Deseja mesmo excluir o ingrediente ${this.nome}?`
      } else if (type === 'adicionar') {
        this.modalTitle = 'Adicionar Ingrediente'
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
        nome: this.nomeIngrediente,
        preco: this.precoIngrediente,
        porcentagemDesconto: this.porcentagemDesconto,
      })
      this.closeModal()
    },

    validarNumero() {
      if (this.precoIngrediente < 0) {
        this.precoIngrediente = 0;
      }
    },
  },
}
</script>

<style scoped>
table {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  border-radius: 10px;
  width: 50rem;
  border-collapse: collapse;
  margin-top: 15px;
}

th,
td {
  padding: 8px;
  color: var(--preto-principal);
  font-weight: 600;
  padding: 1rem;
}

th {
  background-color: var(--cor-hover);
  border-radius: 10px 10px 0 0;
}

.linha-par {
  background-color: var(--branco);
}

.linha-impar {
  background-color: var(--rosa-claro);
}

p {
  color: var(--preto-principal);
}

.icons:hover {
  cursor: pointer;
  filter: var(--filtro-rosa-escuro);
}
</style>
