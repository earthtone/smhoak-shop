<template>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_xclick">
    <input type="hidden" name="business" :value="paypalAccount">
    <input type="hidden" name="lc" value="US">
    <input type="hidden" name="item_name" :value="productName">
    <input type="hidden" name="item_number" :value="productNumber">
    <input type="hidden" name="button_subtype" value="services">
    <input type="hidden" name="no_note" value="0">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
    <table>
    <tr><td><input type="hidden" name="on0" value="whatchoo want?">whatchoo want?</td></tr><tr><td><select name="os0">
          <option :value="`${productNumber} delivery`">{{ productNumber }} delivery {{ deliveryPrice | currency }} USD</option>
          <option :value="`${productNumber} ridgewood pickup`">{{ productNumber }} ridgewood pickup {{ pickupPrice | currency }} USD</option>
    </select> </td></tr>
    <tr><td><input type="hidden" name="on1" value="size?">size?</td></tr><tr><td><select name="os1">
        <option value="XS">XS </option>
        <option value="S">S </option>
        <option value="M">M </option>
        <option value="L">L </option>
        <option value="XL">XL </option>
        <option value="XXL">XXL </option>
    </select> </td></tr>
    <tr><td><input type="hidden" name="on2" value="shipping address?">shipping address?</td></tr><tr><td><input type="text" name="os2" maxlength="200"></td></tr>
    <tr><td><input type="hidden" name="on3" value="email?">email?</td></tr><tr><td><input type="text" name="os3" maxlength="200"></td></tr>
    </table>
    <input type="hidden" name="option_select0" :value="`${productNumber} delivery`">
    <input type="hidden" name="option_amount0" value="30.00">
    <input type="hidden" name="option_select1" :value="`${productNumber} ridgewood pickup`">
    <input type="hidden" name="option_amount1" value="20.00">
    <input type="hidden" name="option_index" value="0">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
</template>

<script>
export default {
  name: 'paypal-form',
  props: {
    paypalAccount: {
      type: String,
      require: true
    },
    productName: {
      type: String,
      required: true
    },
    productNumber: {
      type: String,
      required: true
    },
    pickupPrice: {
      type: String,
      required: true
    },
    deliveryPrice: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
form table {
  @apply w-full;
}

form table tr td {
  @apply px-3;
}

input[type="image"] {
  @apply w-32 mx-3 my-3;
}
select, input[type="text"] {
  @apply w-full border-gray-900 my-3;
}

select {
  @apply border p-3;
}

input[type="text"] {
  @apply border-b;
}
</style>
