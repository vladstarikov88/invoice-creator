<template>
  <div id="app">
    <invoice-page />
  </div>
</template>

<script>
import InvoicePage from '@/components/InvoicePage';

export default {
  name: 'App',
  components: {
    InvoicePage,
  },
};
</script>

<style lang="scss">
#app {
  padding: 4rem;
  height: 100%;
}
</style>
