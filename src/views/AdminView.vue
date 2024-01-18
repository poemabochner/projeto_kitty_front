<template>
  <div class="is-flex is-justify-content-center mt-6">
    <DataTableComponent tableTitle="ingredientes" :tableData="tableData" />
  </div>
</template>

<script>
import DataTableComponent from '@/components/DataTableComponent.vue';

export default {
  components: {
    DataTableComponent
  },
  data() {
    return {
      tableData: [
        { id: 'linguiça', name: 'R$: 2,99'},
        { id: 'linguiça', name: 'R$: 2,99'},
        { id: 'linguiça', name: 'R$: 2,99'},
        { id: 'linguiça', name: 'R$: 2,99'},
        { id: 'linguiça', name: 'R$: 2,99'},
        { id: 'linguiça', name: 'R$: 2,99'},
      ]
    };
  }
};
</script>

<style scoped>
</style>