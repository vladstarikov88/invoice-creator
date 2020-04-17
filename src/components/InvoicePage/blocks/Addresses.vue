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
        <td class="text-bold">Vladislav starikov</td>
        <td class="text-bold">Tlusty & Co. s.r.o.</td>
      </tr>
      <tr>
        <td>
          <a href="mailto:vlad.starikov.88@gmail.com">
            vlad.starikov.88@gmail.com
          </a>
        </td>
        <td>
          <a href="mailto:mail@tlustyco.com">
            mail@tlustyco.com
          </a>
        </td>
      </tr>
      <tr>
        <td>
          Lenin st. 166,
          Bataysk,
          Rostov region,
          Russia 346887
        </td>
        <td>
          <span>Rybná 716/24, 10100 Praha 10,</span>
          <span>Česká republika</span>
          <br>
          <span>Company Registration Number: 06576478</span>
          <br>
          <span>TAX ID: CZ06576478</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.address-table {
  tr {
    display: flex;
    td, th {
      flex: 1;
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

</style>
