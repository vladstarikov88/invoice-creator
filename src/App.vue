<template>
  <div
    id="app"
    @click.middle="handler"
  >
    <div class="wrapper">
      <invoice-page />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { mapState } from 'vuex';

import InvoicePage from '@/components/InvoicePage';

export default {
  name: 'App',
  components: {
    InvoicePage,
  },
  computed: {
    ...mapState('global', ['invoiceNumber']),
  },
  methods: {
    handler() {
      const periodMonth = dayjs()
        .subtract(1, 'month')
        .format('MMM')
        .toUpperCase();

      const invoiceName = `${this.invoiceNumber}-${periodMonth}-Starikov`;
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
