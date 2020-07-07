<template>
  <div class="invoice-page">
    <st-divider
      color="#367DA2"
      :height="6"
    />

    <h1 style="margin-bottom: 2em">Invoice</h1>

    <addresses />

    <st-divider
      style="margin-bottom: 2em"
      color="#535E64"
      :opacity="0.25"
      :height="1"
    />

    <terms v-bind="$props" />

    <description v-bind="$props" />

    <notes />

    <st-divider
      color="#535E64"
      :opacity="0.5"
      :height="1"
    />
  </div>
</template>

<script>
import Addresses from './blocks/Addresses.vue';
import Terms from './blocks/Terms.vue';
import Description from './blocks/Description.vue';
import Notes from './blocks/Notes.vue';

export default {
  props: {
    pricePerHour: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'EUR',
    },
    terms: {
      type: Number,
      default: 0,
    },
    invoiceNumber: {
      type: String,
      default: 'INV0001',
    },
  },
  components: {
    Addresses,
    Terms,
    Description,
    Notes,
  },
};
</script>

<style lang="scss" scoped>
.invoice-page {
  height: 100%;
  max-width: 50rem;
}

.align-right {
  text-align: right;
}

@media print {
  @page {
    margin: 0;
  }
}
</style>
