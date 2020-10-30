<template>
  <div>
    <h3>Notes</h3>

    <table-details-info
      title="Money transfer to the account bellow:"
      :details-list="bankAccountDetails"
      style="margin-bottom: 2rem"
    />
    <table-details-info
      dense
      title="Correspondent Banks (pick one if needed):"
      :details-list="correspondentBanks"
    />
  </div>
</template>

<script>
import { bankAccountDetails, correspondentBanks } from '@/_data';
import TableDetailsInfo from '../components/TableDetailsInfo.vue';

export default {
  components: {
    TableDetailsInfo,
  },
  data() {
    return {
      bankAccountDetails,
      correspondentBanks,
    };
  },
};
</script>
