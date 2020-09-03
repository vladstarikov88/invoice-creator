<template>
  <div>
    <h3>Notes</h3>
    <h4 class="notes-header">Money transfer to the account bellow:</h4>
    <table class="notes-table">
      <tbody>
        <template
          v-for="detail in bankAccountDetails"
        >
          <tr :key="detail.name">
            <th>{{detail.name}}</th>
            <td>{{detail.value}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { bankAccountDetails } from '@/_data';

export default {
  data() {
    return {
      bankAccountDetails,
    };
  },
};
</script>

<style lang="scss" scoped>
.notes-header {
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0 0 0.5rem;
  margin: 0;
}
.notes-table {
  margin-bottom: 4rem;
  th {
    font-weight: 300;
    padding-right: 1.5rem;
    padding-bottom: 0.15rem;
  }
}
</style>
