<template>
  <div
    id="app"
    @click.middle="handler"
  >
    <div class="wrapper">
      <invoice-page
        :pricePerHour="pricePerHour"
        :quantity="quantity"
        :terms="terms"
        :invoice-number="preparedInvoiceNumber"
        :currency="currencyName"
      />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

import InvoicePage from '@/components/InvoicePage';

export default {
  name: 'App',
  components: {
    InvoicePage,
  },
  data() {
    return {
      pricePerHour: 12,
      quantity: 130,
      terms: 14,
      rawInvoiceNumber: 7,
      currencyName: 'EUR',

      preparedInvoiceNumber: '',
    };
  },
  created() {
    this.getInvoiceNumber(this.rawInvoiceNumber);
  },
  methods: {
    getInvoiceNumber(invoiceNumber) {
      const repeatValue = 4 - String(invoiceNumber).length;
      this.preparedInvoiceNumber = `INV${'0'.repeat(repeatValue)}${invoiceNumber}`;
    },
    handler() {
      const periodMonth = dayjs()
        .subtract(1, 'month')
        .format('MMM')
        .toUpperCase();

      const invoiceName = `${this.preparedInvoiceNumber}-${periodMonth}-Starikov`;
      document.title = invoiceName;
      window.print();
    },
  },
};
</script>

<style lang="scss">
#app {
  padding: 4rem;
  height: 100%;
}
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
