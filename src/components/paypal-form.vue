<template>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_xclick">
    <input type="hidden" name="business" :value="paypalAccount">
    <input type="hidden" name="lc" value="US">
    <input type="hidden" name="item_name" :value="productName">
    <input type="hidden" name="item_number" :value="productNum">
    <input type="hidden" name="amount" value="25.00">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="button_subtype" value="services">
    <input type="hidden" name="no_note" value="0">
    <input type="hidden" name="shipping" value="10.00">
    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_SM.gif:NonHostedGuest">
    <table>
    <tr><td><input type="hidden" name="on0" value="Sizes">Sizes</td></tr><tr><td><select name="os0">
        <option value="XS">XS </option>
        <option value="S">S </option>
        <option value="M">M </option>
        <option value="L">L </option>
        <option value="XL">XL </option>
        <option value="XXL">XXL </option>
    </select> </td></tr>
    <tr><td><input type="hidden" name="on1" value="SHIPPING ADDRESS">SHIPPING ADDRESS</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>
    <tr><td><input type="hidden" name="on2" value="EMAIL">EMAIL</td></tr><tr><td><input type="text" name="os2" maxlength="200"></td></tr>
    </table>
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
</template>

<script>
export default {
  name: 'paypal-form',
  computed: {
    paypalAccount: () => process.env.GRIDSOME_PAYPAL_ACCOUNT,
    productName: () => process.env.GRIDSOME_PRODUCT_NAME,
    productNumber: () => process.env.GRIDSOME_PRODUCT_NUMBER
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
