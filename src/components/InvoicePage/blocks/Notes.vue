<template>
  <div>
    <h3>Notes</h3>
    <h4 class="notes-header">Money transfer to the account bellow:</h4>
    <table class="notes-table">
      <tbody>
        <tr>
          <th>Bank name:</th>
          <td>Wirecard Bank AG</td>
        </tr>

        <tr>
          <th>Bank address:</th>
          <td>Einsteinring 35 85609 Aschheim, Germany</td>
        </tr>

        <tr>
          <th>BIC:</th>
          <td>WIREDEMM</td>
        </tr>

        <tr>
          <th>IBAN:</th>
          <td>DE26512308006506230144</td>
        </tr>

        <tr>
          <th>Bank country:</th>
          <td>Germany</td>
        </tr>

        <tr>
          <th>Beneficiary name:</th>
          <td>Vladislav Starikov</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.notes-header {
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0 0 0.5rem;
  margin: 0;
}
.notes-table {
  margin-bottom: 4rem;
  th {
    font-weight: 300;
    padding-right: 1.5rem;
    padding-bottom: 0.15rem;
  }
}
</style>
