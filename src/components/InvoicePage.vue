<template>
  <div class="invoice-page">
    <st-divider
      color="#367DA2"
      :height="6"
    />

    <h1>Invoice</h1>

    <div style="margin-bottom: 4em"/>

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

    <st-divider
      color="#535E64"
      :opacity="0.25"
      :height="1"
    />

    <div style="margin-bottom: 2em"/>

    <table class="term-table">
      <tbody>
        <tr>
          <th>Number</th>
          <td>INV0002</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>Feb 19, 2020</td>
        </tr>
        <tr>
          <th>Terms</th>
          <td>3 days</td>
        </tr>
        <tr>
          <th>Due</th>
          <td>Feb 22, 2020</td>
        </tr>
      </tbody>
    </table>

    <table class="description-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Unit price</th>
          <th class="align-right">Qty</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Software development 01/2020</td>
          <td>{{unitPrice}}.00 €</td>
          <td class="align-right">112</td>
          <td>{{formatCurrency(unitPrice * quantity)}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td />
          <td class="align-right">Total</td>
          <td>{{formatCurrency(unitPrice * quantity)}}</td>
        </tr>
        <tr>
          <td />
          <td
            colspan="2"
            class="align-right text-bold">Balance due</td>
          <td class="text-bold">{{formatCurrency(unitPrice * quantity)}}</td>
        </tr>
      </tfoot>
    </table>

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

    <st-divider
      color="#535E64"
      :opacity="0.5"
      :height="1"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      unitPrice: 0,
      quantity: 0,
      currency: '€',
    };
  },
  methods: {
    formatCurrency(number) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'EUR',
      }).format(number);
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-page {
  height: 100%;
}

table {
  font-size: 0.8rem;
  text-align: left;
  margin-bottom: 2rem;
  border-collapse: collapse;
  border-spacing: 0px;
}

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

.term-table {
  th {
    padding-right: 1.5rem;
    padding-bottom: 0.15rem;
  }
}

.description-table {
  width: 100%;
  th, td {
    padding: 0.5rem;
  }
  th {
    background-color: #535E64;
    -webkit-print-color-adjust: exact;
    color: #fff;
  }

  tbody {
    td {
      border-bottom: 1px solid rgba(83, 94, 100, 0.5);
    }
  }

  tfoot {
  }
}

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

.align-right {
  text-align: right;
}

@media print {
  @page {
    margin: 0;
  }
}
</style>
