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
            <h3>nome da promoção:</h3>
            <input class="input" v-model="nomePromocao" placeholder="nome" maxlength="100" />
          </div>
          <div class="">
            <h3>descrição da promoção:</h3>
            <input class="input" v-model="descricaoPromocao" placeholder="descrição" maxlength="255" />
          </div>
          <div class="">
            <h3>lanches da promoção:</h3>
            <div v-for="lanche in lanches" :key="lanche.id" class="is-flex is-justify-content-space-between">
              <div class="is-flex is-align-items-center">
                <p class="has-text-weight-regular is-size-5" style="flex-basis: 2; word-wrap: break-word;">{{
                  lanche.nomeLanche }}</p>
              </div>
              <div>
                <CounterComponent @increment="adicionar(lanche.idLanche)" @decrement="subtrair(lanche.idLanche)" />
              </div>
            </div>
          </div>
          <div>
            <h3>preço da promoção:</h3>
            <input class="input" @input="validarNumero" type="number" v-model="precoPromocao" placeholder="preço" />
          </div>
          <div>
            <h3>porcentagem do desconto:</h3>
            <input class="input" @input="validarNumero" type="number" v-model="porcentagemDesconto"
              placeholder="porcentagem" />
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="salvar" @click="salvarPromocao"><img src="@/assets/icons/check.svg" />
            </ButtonComponent>
            <ButtonComponent textoBotao="cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>

    <ModalShortComponent  v-else-if="modalType === 'editar'" :isModalActive="isModalActive" :title="modalTitle"
      @closeModal="closeModal">
      <template v-slot:content>
        <div class="p-2 is-size-2 is-flex is-flex-direction-column" style="gap: 1rem;">
          <div class="">
            <h3>nome da promoção:</h3>
            <input class="input" v-model="nomePromocao" placeholder="nome" maxlength="100" />
          </div>
          <div class="">
            <h3>descrição da promoção:</h3>
            <input class="input" v-model="descricaoPromocao" placeholder="descrição" maxlength="255" />
          </div>
          <div class="">
            <h3>lanches da promoção:</h3>
            <div v-for="lanche in lanches" :key="lanche.id" class="is-flex is-justify-content-space-between">
              <div class="is-flex is-align-items-center">
                <p class="has-text-weight-regular is-size-5" style="flex-basis: 2; word-wrap: break-word;">{{
                  lanche.nomeLanche }}</p>
              </div>
              <div>
                <CounterComponent @increment="adicionar(lanche.idLanche)" @decrement="subtrair(lanche.idLanche)" />
              </div>
            </div>
            </div>
          <div>
            <h3>preço da promoção:</h3>
            <input class="input" @input="validarNumero" type="number" v-model="precoPromocao" placeholder="preço" />
          </div>
          <div>
            <h3>porcentagem do desconto:</h3>
            <input class="input" @input="validarNumero" type="number" v-model="porcentagemDesconto"
              placeholder="porcentagem" />
          </div>

          <div class="is-flex" style="gap: 1rem;">
            <ButtonComponent textoBotao="salvar" @click="salvarPromocao"><img src="@/assets/icons/check.svg" /></ButtonComponent>
            <ButtonComponent textoBotao="cancelar" @click="cancelar"><img src="@/assets/icons/close.svg" />
            </ButtonComponent>
          </div>
        </div>
      </template>
    </ModalShortComponent>

    <div class="is-flex">
      <SidebarComponent />

      <div class="mb-6 is-flex is-flex-grow-1 is-flex-direction-column is-justify-content-center">
        <BannerComponent titulo="promoções">
          <div class="card-container is-flex is-flex-wrap is-justify-content-space-between mt-4" style="gap: 3rem;">

            <CardComponent v-for="promocao in promocoes" :key="promocao.id" :texto="promocao.nomePromocao"
              style="background-color: var(--rosa-claro);">
              <div class="is-flex is-flex-direction-column p-2"
                style="background-color: var(--rosa-claro); border-radius: 0 0 9px 9px;">
                <p class="is-size-5 is-align-self-flex-start">
                  {{ promocao.descricaoPromocao }}
                </p>
                <p class="is-align-self-flex-end has-text-weight-bold p-4">{{ formatarPreco(promocao.precoPromocao) }}</p>
                <div class="is-flex p-2 is-align-self-flex-end">
                  <img class="icons" src="@/assets/icons/edit.svg" @click="openModal('editar', promocao)" style="width: 26px;" />
                  <img class="icons" src="@/assets/icons/delete.svg" @click="openModal('excluir', promocao)" />
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
import CounterComponent from '@/components/CounterComponent.vue';
import promocaoService from '@/services/promocaoService';
import { formatarPreco } from '@/utils';
import lancheService from '@/services/lancheService';

export default {
  name: 'PromocoesView',
  components: {
    BannerComponent,
    CardComponent,
    ButtonComponent,
    SidebarComponent,
    ModalShortComponent,
    CounterComponent
  },
  data() {
    return {
      isModalActive: false,
      modalType: null,
      modalTitle: '',
      nomePromocao: '',
      precoPromocao: '',
      porcentagemDesconto: '',
      descricaoPromocao: '',
      promocoes: [],
      lanches: [],
      idPromocaoExcluir: null,
      idPromocaoEditar: null,
      lanchesPromocao: [],
      contadorLanches: {}
    }
  },
  mounted() {
    this.carregarPromocoes(),
      this.carregarLanches()
  },
  methods: {
    async carregarPromocoes() {
      try {
        this.promocoes = await promocaoService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter lanches:', error)
      }
    },
    openModal(type, promocao) {
      this.isModalActive = true
      this.modalType = type

      if (type === 'excluir' && promocao && promocao.idPromocao) {
        this.idPromocaoExcluir = promocao.idPromocao
        this.modalTitle = `Deseja mesmo excluir a promoção ${promocao.nomePromocao}?`
      } else if (type === 'adicionar') {
        this.modalTitle = 'Adicionar Promoção'
        this.lanchesPromocao = []
        this.nomePromocao = ''
        this.precoPromocao = ''
        this.porcentagemDesconto = ''
        this.descricaoPromocao = ''
      } else if (type === 'editar') {
        this.idPromocaoEditar = promocao.idPromocao
        this.nomePromocao = promocao.nomePromocao
        this.descricaoPromocao = promocao.descricaoPromocao
        this.precoPromocao = promocao.precoPromocao
        this.porcentagemDesconto = promocao.descontoPromocao
        this.lanchesPromocao = []
        this.modalTitle = 'Editar Promoção'
        this.contarLanches()
      }
    },

    contarLanches() {
      this.lanchesPromocao.forEach((lanche) => {
        const id = lanche.idLanche

        this.contadorLanches[id] = (this.contadorLanches[id] || 0) + 1
      })

      console.log(this.contadorLanches)
    },
    closeModal() {
      this.isModalActive = false
      this.modalType = null
    },
    cancelar() {
      this.closeModal()
    },
    excluir() {
      if (this.modalType === 'excluir') {
        const idPromocao = this.idPromocaoExcluir
        if (!idPromocao) {
          alert('ID da promoção a ser excluída não encontrado.')
          return
        }
        promocaoService.deletar(idPromocao)
          .then(() => {
            this.promocoes = this.promocoes.filter(promocao => promocao.id !== idPromocao)
            this.carregarPromocoes()
            alert(`Promoção excluída com sucesso!`)
          })
          .catch((error) => {
            alert(error.message)
          })
          .finally(() => {
            this.closeModal()
            this.idPromocaoExcluir = null
          })
      }
    },
    salvarPromocao() {
      if (!this.nomePromocao || !this.descricaoPromocao || this.lanchesPromocao.length == 0) {
        alert('Por favor, preencha todos os campos.')
        return
      }

      const novaPromocao = {
        idPromocao: null,
        nomePromocao: this.nomePromocao,
        precoPromocao: this.precoPromocao,
        descricaoPromocao: this.descricaoPromocao,
        descontoPromocao: this.porcentagemDesconto,
        lanches: this.lanchesPromocao.map(lancheId => ({ idLanche: lancheId }))
      }
      if (this.modalType === 'adicionar') {
        this.cadastrar(novaPromocao)
      } else {
        novaPromocao.idPromocao = this.idPromocaoEditar
        this.atualizar(novaPromocao)
      }

    },

    cadastrar(promocao) {
      promocaoService.cadastrar(promocao)
        .then(() => {
          this.carregarPromocoes()
          alert(`promoção ${this.nomePromocao} cadastrada com sucesso!`)

        })
        .catch((error) => {

          alert('Erro ao cadastrar promoção', error)
        })

      this.closeModal()
    },

    atualizar(promocao) {
      promocaoService.atualizar(promocao)
        .then(() => {
          this.carregarPromocoes()
          alert(`Promoção ${this.nomePromocao} editada com sucesso!`)
        })
        .catch((error) => {

          alert('Erro ao editar promoção', error)
        })

      this.closeModal()
    },

    validarNumero() {
      if (this.porcentagemDesconto < 0 || this.precoPromocao < 0) {
        this.porcentagemDesconto = Math.max(this.porcentagemDesconto, 0)
        this.precoPromocao = Math.max(this.precoPromocao, 0)
      }
    },
    formatarPreco(valor) {
      return formatarPreco(valor)
    },
    async carregarLanches() {
      try {
        this.lanches = await lancheService.obterTodos()
      } catch (error) {
        console.error('Erro ao obter lanches:', error)
      }
    },
    adicionar(idLanche) {
      this.lanchesPromocao.push(idLanche)
    },

    subtrair(idLanche) {
      for (var idLanchePromocao of this.lanchesPromocao) {
        if (idLanchePromocao == idLanche) {
          var index = this.lanchesPromocao.indexOf(idLanchePromocao)
          this.lanchesPromocao.splice(index, 1)
          return
        }
      }

    }
  },
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

p {
  color: var(--preto-principal);
}

h3 {
  font-weight: 600;
  color: var(--preto-principal);
}

.icons:hover {
  cursor: pointer;
  filter: var(--filtro-rosa-escuro);
}
</style>