<template>
  <table>
    <thead>
      <tr class="has-text-centered">
        <th class="p-5" colspan="3">
          <h2 class="is-size-3 has-text-weight-semibold">{{ tableTitle }}</h2>
        </th>
      </tr>
    </thead>
    <tbody class="">
      <tr class="is-flex is-justify-content-space-between" v-for="(item, index) in tableData" :key="item.id"
        :class="{ 'linha-par': index % 2 === 0, 'linha-impar': index % 2 !== 0 }">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td class="is-flex" style="gap: 0.6rem;">
          <img src="@/assets/icons/edit.svg" style="width: 26px; cursor: pointer;"/>
          <img src="@/assets/icons/delete.svg" style="cursor: pointer;"/>
        </td>
      </tr>
      <button>oiii</button>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    tableTitle: {
      type: String,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  }
};
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
</style>
