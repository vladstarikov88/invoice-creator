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
        <td>Software development 01/2020</td>
        <td>{{unitPrice}}.00 €</td>
        <td class="align-right">112</td>
        <td>{{formatCurrency(unitPrice * quantity)}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td />
        <td />
        <td class="align-right">Total</td>
        <td>{{formatCurrency(unitPrice * quantity)}}</td>
      </tr>
      <tr>
        <td />
        <td
          colspan="2"
          class="align-right text-bold">Balance due</td>
        <td class="text-bold">{{formatCurrency(unitPrice * quantity)}}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  data() {
    return {
      unitPrice: 0,
      quantity: 0,
      currency: '€',
    };
  },
  methods: {
    formatCurrency(number) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'EUR',
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
