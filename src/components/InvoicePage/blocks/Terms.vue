<template>
  <table class="term-table">
    <tbody>
      <tr>
        <th>Number</th>
        <td>{{ invoiceNumber }}</td>
      </tr>
      <tr>
        <th>Date</th>
        <td>{{ todayDate }}</td>
      </tr>
      <tr>
        <th>Terms</th>
        <td>{{ terms }} days</td>
      </tr>
      <tr>
        <th>Due</th>
        <td>{{ dueDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import dayjs from 'dayjs';

import { dateFrom } from '@/_data';

export default {
  props: {
    terms: {
      type: Number,
      default: 0,
    },
    invoiceNumber: {
      type: String,
      default: 'INV0001',
    },
  },
  data() {
    return {
      todayDate: '',
      dueDate: '',
      dateFrom,
    };
  },
  created() {
    const dateFormat = 'MMM DD, YYYY';
    this.todayDate = dayjs(dateFrom)
      .format(dateFormat);
    this.dueDate = dayjs(dateFrom)
      .add(this.terms, 'day')
      .format(dateFormat);
  },
};
</script>

<style lang="scss" scoped>
.term-table {
  th {
    padding-right: 1.5rem;
    padding-bottom: 0.15rem;
  }
}
</style>
