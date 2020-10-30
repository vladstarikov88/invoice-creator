<template>
  <div
    class="table-details"
    :class="{dense}"
  >
    <h4 class="notes-header">{{title}}</h4>
    <table class="notes-table">
      <tbody>
        <template
          v-for="detail in detailsList"
        >
          <tr :key="detail.name">
            <th>{{detail.name}}</th>
            <td
              :style="`padding: ${detail.padding}`"
            >{{detail.value}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      deafult: '',
    },
    detailsList: {
      type: Array,
      default() {
        return [];
      },
    },
    dense: {
      type: Boolean,
      deafult: false,
    },
  },
};
</script>

<style lang="scss">
.notes-header {
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0 0 0.5rem;
  margin: 0;
}
.notes-table {
  margin-bottom: 1rem;
  th {
    font-weight: 300;
    padding-right: 1.5rem;
    padding-bottom: 0.15rem;
  }
}
.dense {
  color: #999;
  .notes-header {
    font-size: 0.6rem;
  }
  .notes-table {
    th, td {
      font-size: 0.5rem;
    }
  }
}
</style>
