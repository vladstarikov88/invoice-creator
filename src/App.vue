<template>
  <div id="app">
    <div class="wrapper">
      <invoice-page />
    </div>
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
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
