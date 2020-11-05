<template>
  <v-card>
    <v-card-title>Order Details</v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      disable-filtering
      disable-pagination
      disable-sort
      dense
      no-data-text="There are no items in your cart"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          name: 'name',
        },
        {
          text: 'Item Price',
          name: 'itemPrice',
        },
        {
          text: 'Quantity',
          name: 'quantity',
        },
        {
          text: 'Item Total',
          name: 'itemTotal',
        },
      ],
      items: [
        {
          id: '123',
          name: 'this is name',
          itemPrice: 123,
        },
      ],
    }
  },
}
</script>