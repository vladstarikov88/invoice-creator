<template>
  <table class="address-table">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-bold">{{fromWhom.name}}</td>
        <td class="text-bold">{{toWhom.name}}</td>
      </tr>
      <tr>
        <td>
          <a :href="`mailto:${fromWhom.email}`">
            {{fromWhom.email}}
          </a>
        </td>
        <td>
          <a :href="`mailto:${toWhom.email}`">
            {{toWhom.email}}
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <span class="pre">{{fromWhom.address}}</span>
        </td>
        <td>
          <span class="pre">{{toWhom.address}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { fromWhom, toWhom } from '@/_data';

export default {
  data() {
    return {
      fromWhom,
      toWhom,
    };
  },
};
</script>

<style lang="scss">
.address-table {
  tr {
    display: flex;
    td, th {
      flex: 1;
      width: 18rem;
    }
    th {
      font-weight: 300;
      font-size: 1rem;
    }
    td {
      padding: 0.15rem 0;
      line-height: 1.25em;
    }
  }
}

.pre {
  white-space: pre;
}

</style>
