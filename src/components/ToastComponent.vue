<template>
  <transition name="fade">
    <div v-if="show" class="toast is-flex p-5 tag is-primary is-light is-large" style="gap: 4px;">
      <img src="@/assets/icons/oktoast.svg" style="width: 24px;" />
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
    }
  },
  methods: {
    showAutomaticToast() {
      const toastShown = localStorage.getItem('toastShown');

      if (!toastShown) {
        this.show = true;

        localStorage.setItem('toastShown', 'true');

        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    },
  },
  mounted() {
    this.showAutomaticToast();
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 100px;
  right: 100px;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
