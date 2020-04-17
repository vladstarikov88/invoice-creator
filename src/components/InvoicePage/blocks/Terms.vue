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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      invoiceNumber: '',
      terms: 3,
      todayDate: '',
      dueDate: '',
    };
  },
  methods: {
    ...mapActions('global', [
      'setInvoiceNumber',
    ]),
  },
  created() {
    const invoiceNumber = 4;
    const dateFormat = 'MMM DD, YYYY';

    this.todayDate = dayjs()
      .format(dateFormat);
    this.dueDate = dayjs()
      .add(this.terms, 'day')
      .format(dateFormat);

    const repeatValue = 4 - String(invoiceNumber).length;
    this.invoiceNumber = `INV${'0'.repeat(repeatValue)}${invoiceNumber}`;
    this.setInvoiceNumber(this.invoiceNumber);
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
