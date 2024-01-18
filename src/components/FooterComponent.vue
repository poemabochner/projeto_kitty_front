<template>
  <footer v-if="showFooter" class="footer py-5 is-flex is-justify-content-space-between has-text-weight-semibold">
    <div class="footer__lado-esquerdo is-flex is-align-items-center" style="gap: 2rem;">
      <img class="footer__lado-esquerdo-icon" src="@/assets/icons/instagram.svg" alt="ícone do instagram"
        ref="iconRef1" />
      <img class="footer__lado-esquerdo-icon" src="@/assets/icons/tiktok.svg" alt="ícone do tiktok" ref="iconRef2" />
      <img class="footer__lado-esquerdo-icon" src="@/assets/icons/whatsapp.svg" alt="ícone do whatsapp" ref="iconRef3" />
    </div>
    <p>©2024, kitty lanches</p>
  </footer>
</template>

<script>
import { iconExpand } from '@/utils';

export default {
  name: 'FooterComponent',

  beforeUpdate() {
    this.$nextTick(() => {
      this.addIconListeners()
    })
  },

    methods: {
      addIconListeners() {
        const iconRef1 = this.$refs.iconRef1
        const iconRef2 = this.$refs.iconRef2
        const iconRef3 = this.$refs.iconRef3

        if (iconRef1) {
          iconExpand(iconRef1)
        }
        if (iconRef2) {
          iconExpand(iconRef2)
        }
        if (iconRef3) {
          iconExpand(iconRef3)
        }
      },
  },

  computed: {
    showFooter() {
      return this.$route.meta.showFooter
    },
  },
}

</script>

<style scoped>
.footer {
  font-family: var(--fonte-secundaria);
  color: var(--branco);
  background-color: var(--cor-hover);
  padding-right: 5rem;
  padding-left: 5rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.footer__lado-esquerdo-icon {
  transition: transform 0.3s ease;
}

.footer__lado-esquerdo-icon:hover {
  cursor: pointer;
  filter: var(--filtro-branco-azulado);
}
</style>