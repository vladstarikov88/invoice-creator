<template>
  <div
    id="app"
    @click.middle="handler"
  >
    <div class="wrapper">
      <invoice-page
        :pricePerHour="pricePerHour"
        :quantity="hoursWorked"
        :terms="invoicePeriod"
        :invoice-number="preparedInvoiceNumber"
        :development-period="developmentPeriod"
        :currency="currencyName"
      />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import InvoicePage from '@/components/InvoicePage';
import {
  pricePerHour,
  hoursWorked,
  invoicePeriod,
  rawInvoiceNumber,
  developmentPeriod,
  currencyName,
} from './_data';

export default {
  name: 'App',
  components: {
    InvoicePage,
  },
  data() {
    return {
      pricePerHour,
      hoursWorked,
      invoicePeriod,
      rawInvoiceNumber,
      developmentPeriod,
      currencyName,

      preparedInvoiceNumber: '',
      invoiceName: '',
    };
  },
  created() {
    this.preparedInvoiceNumber = this.getInvoiceNumber();
    this.invoiceName = this.getInvoiceName();
    document.title = this.invoiceName;
  },
  methods: {
    getInvoiceNumber() {
      const repeatValue = 4 - String(this.rawInvoiceNumber).length;
      return `INV${'0'.repeat(repeatValue)}${this.rawInvoiceNumber}`;
    },
    getInvoiceName() {
      const [month, year] = this.developmentPeriod.split('/');
      const periodMonth = dayjs(`${year}-${month}-01`)
        .format('MMM')
        .toUpperCase();

      return `${this.preparedInvoiceNumber}-${periodMonth}-Starikov`;
    },
    handler() {
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
