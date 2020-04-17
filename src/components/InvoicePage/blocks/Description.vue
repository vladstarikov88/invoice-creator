<template>
  <table class="description-table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Unit price</th>
        <th class="align-right">Qty</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Software development for {{ developmentPeriod }}</td>
        <td>{{formatCurrency(pricePerHour)}}</td>
        <td class="align-right">{{ quantity }}</td>
        <td>{{formatCurrency(pricePerHour * quantity)}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td />
        <td />
        <td class="align-right">Total</td>
        <td>{{formatCurrency(pricePerHour * quantity)}}</td>
      </tr>
      <tr>
        <td />
        <td
          colspan="2"
          class="align-right text-bold">Balance due</td>
        <td class="text-bold">{{formatCurrency(pricePerHour * quantity)}}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      developmentPeriod: '',
      pricePerHour: 12,
      quantity: 179,
      currency: 'EUR',
    };
  },
  created() {
    this.developmentPeriod = dayjs()
      .subtract(1, 'month')
      .format('MM/YYYY');
  },
  methods: {
    formatCurrency(number) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: this.currency,
      }).format(number);
    },
  },
};
</script>

<style lang="scss">
.description-table {
  width: 100%;
  th, td {
    padding: 0.5rem;
  }
  th {
    background-color: #535E64;
    -webkit-print-color-adjust: exact;
    color: #fff;
  }

  tbody {
    td {
      border-bottom: 1px solid rgba(83, 94, 100, 0.5);
    }
  }
}
</style>
