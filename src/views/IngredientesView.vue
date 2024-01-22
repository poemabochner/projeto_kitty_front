<template>
<ToastComponent ref="toast" message="seja bem-vindo, administrador!"><img src="@/assets/icons/oktoast.svg" style="width: 24px;" /></ToastComponent>
  <div class="is-flex is-justify-content-space-between">
    <aside>
      <SidebarComponent />
    </aside>
    <div class="is-flex is-justify-content-center mt-4 mb-6">
      <DataTableComponent class="mb-5" tableTitle="ingredientes"/>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import DataTableComponent from '@/components/DataTableComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import ToastComponent from '@/components/ToastComponent.vue';
export default {
  components: {
    DataTableComponent,
    SidebarComponent,
    ToastComponent
  },
  data() {
    return {
      
    }
  },

  methods: {
  }
}
</script>

<style scoped></style>