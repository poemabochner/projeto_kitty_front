<template>
  <SidebarComponent/>
  <div class="is-flex is-justify-content-center mt-4 mb-6">
    <DataTableComponent class="mb-5" tableTitle="ingredientes" :tableData="tableData" />
  </div>
  <div></div>
</template>

<script>
import DataTableComponent from '@/components/DataTableComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  components: {
    DataTableComponent, 
    SidebarComponent
  },
  data() {
    return {
      tableData: [
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
        { id: 'linguiça', name: 'R$: 2,99' },
      ]
    };
  }
};
</script>

<style scoped></style>