<template>
  <div>
    <ModalShortComponent v-if="modalType === 'excluir'" :isModalActive="isModalActive" :title="modalTitle"
      @closeModal="closeModal">
      <template v-slot:content>
        <div class="is-flex is-justify-content-center" style="gap:1px;">
          <ButtonComponent textoBotao="sim" @click="excluir"><img src="@/assets/icons/check.svg" /></ButtonComponent>
          <ButtonComponent textoBotao="cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
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
            <input class="input" v-model="nomeIngrediente" placeholder="nome" maxlength="30" />
          </div>
          <div>
            <p>preço do ingrediente:</p>
            <input class="input" type="number" @input="validarNumero" v-model="precoIngrediente" placeholder="preço" />
          </div>
          <div>
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="salvar" @click="salvar"><img src="@/assets/icons/check.svg" /></ButtonComponent>
            <ButtonComponent textoBotao="cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>

    <ModalShortComponent v-else-if="modalType === 'editar'" :isModalActive="isModalActive" :title="modalTitle"
      @closeModal="closeModal">
      <template v-slot:content>
        <div class="p-2 is-size-2 is-flex is-flex-direction-column" style="gap: 1rem;">
          <div class="">
            <p>nome do ingrediente:</p>
            <input class="input" v-model="nomeIngrediente" placeholder="nome" maxlength="30" />
          </div>
          <div>
            <p>preço do ingrediente:</p>
            <input class="input" type="number" @input="validarNumero" v-model="precoIngrediente" placeholder="preço" />
          </div>
          <div>
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="salvar" @click="salvar"><img src="@/assets/icons/check.svg" /></ButtonComponent>
            <ButtonComponent textoBotao="cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>

  </div>
  <table>
    <thead>
      <tr class="has-text-centered">
        <th class="p-5" colspan="3">
          <h2 class="is-size-3 has-text-weight-semibold">{{ tableTitle }}</h2>
        </th>
      </tr>
    </thead>
    <tbody class="is-flex is-flex-direction-column table-container">

      <tr class="is-flex table-row" v-for="(ingrediente, index) in tableData" :key="ingrediente.id"
        :class="{ 'linha-par': index % 2 === 0, 'linha-impar': index % 2 !== 0 }">
        <td class="table-cell-maior">{{ ingrediente.nomeIngrediente }}</td>
        <td class="table-cell">{{ ingrediente.precoIngrediente }}</td>
        <td class="is-flex table-cell is-justify-content-flex-end" style="gap: 0.6rem;">
          <img class="icons" src="@/assets/icons/edit.svg" @click="openModal('editar')" style="width: 26px;" />
          <img class="icons" src="@/assets/icons/delete.svg" @click="openModal('excluir')" />
        </td>
      </tr>
      <div class="is-flex is-justify-content-flex-end pr-2"
        style="background-color: var(--rosa-salmao); border-radius: 0 0 10px 10px;">
        <ButtonComponent textoBotao="adicionar" @click="openModal('adicionar')" />
      </div>
    </tbody>
  </table>
</template>

<script>
import ingredienteService from '@/services/ingredienteService';
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
  },
  data() {
    return {
      isModalActive: false,
      modalType: null,
      modalTitle: '',
      nomeIngrediente: '',
      precoIngrediente: '',
      porcentagemDesconto: '',
      tableData: []
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
      } else if (type === 'editar') {
        this.modalTitle = 'Editar Ingrediente'
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
      console.log('Ingrediente salvo:', {
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
    async carregarDados() {
      try {
        this.tableData = await ingredienteService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter ingredientes:', error)
      }
    }
  },
  mounted() {
    this.carregarDados();
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

.table-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .table-row {
    display: flex;
    justify-content: space-between;
  }

  .table-cell-maior{
    flex: 2;
    min-width: 200px;
    margin-right: 0.6rem;
  }

  .table-cell {
    flex: 1;
    margin-right: 0.6rem;
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
