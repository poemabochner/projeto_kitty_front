<template>
  <transition name="fade">
    <div v-if="show" :class="toastClass" style="gap: 4px;">
      <slot></slot>
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  props: {
    message: {
      type: String,
      required: true
    },
    toastClass: {
      type: String,
      default: "toast is-flex p-5 tag is-primary is-light is-large",
    },
  },
  methods: {
    showAutomaticToast() {
      const toastShown = localStorage.getItem('toastShown')

      if (!toastShown) {
        this.show = true

        localStorage.setItem('toastShown', 'true')

        setTimeout(() => {
          this.show = false
        }, 1500)
      }
    },
  },
  mounted() {
    this.showAutomaticToast()
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 100px;
  right: 100px;
  z-index: 9999;
  animation: fadeInOut 1.5s forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
