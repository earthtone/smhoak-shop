<template>
  <Layout>
    <div class="flex flex-col lg:flex-row w-full items-center justify-around md:max-w-6xl md:mx-auto">
      <image-group
        class="flex w-full min-w-6xl h-full min-h-screen justify-center items-center mx-6"
        :images="$page.pictures.edges.map(n => n.node)"
        :activeIndex="activeIndex"
        @update-image="setIndex"/>
      <article class="flex flex-col w-full h-full lg:-mt-24 px-6 mb-12 lg:items-start">
        <h3 class="text-2xl mb-6 lg:mb-12">{{ $page.shirt.title }}</h3>
        <p>
        {{ $page.shirt.price | currency }}. half of each purchase goes to {{ $page.shirt.charity }}.
        </p>
        <p>
        {{ $page.shirt.shipping | currency }} shipping within the continental US. now offering a free local Pick-Up option at Deep Cuts Records in Ridgewood. outside that? dm me on something.
        </p>
        <p>order window opens {{ $page.shirt.orderWindow[0] }}.</p>
        <p>order window closes {{ $page.shirt.orderWindow[1] }}.</p>
        <p>shipping {{ $page.shirt.shippingDate }}.</p>
        <p>next piece in the collection {{ $page.shirt.nextPieceDate }}.</p>
      </article>
    </div>
    <footer class="px-6">
      <paypal-form
        :paypalAccount="paypalAccount"
        :productName="$page.shirt.title"
        :productNumber="$page.shirt.productNumber"
        :pickupPrice="pickupPrice"
        :deliveryPrice="deliveryPrice"
        class="max-w-md mx-auto border border-gray-900 mb-6" />
    </footer>
  </Layout>
</template>
<page-query>
query Details {
  shirt: shirtDetails (path: "/src/data/003/") {
    productNumber
  	path
    title
    charity
		pickup
    orderWindow
    shippingDate
    nextPieceDate
    price
    shipping
    fileInfo {
      path
      name
      directory
      extension
    }
  }

  pictures: allShirtImages {
    edges {
      node {
        id
        filename
      }
    }
  }
}
</page-query>

<script>
import { compose } from '@earthtone/tiny-compose'
import ImageGroup from '@/components/image-group.vue'
import PaypalForm from '@/components/paypal-form.vue'

export default {
  name: 'index-page',
  components: {
    PaypalForm,
    ImageGroup
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    front () {
      return this.$page.pictures.edges[0].node.filename
    },
    paypalAccount () {
      return process.env.GRIDSOME_PAYPAL_ACCOUNT
    },
    pickupPrice () {
      return parseFloat(this.$page.shirt.price).toFixed(2)
    },
    deliveryPrice () {
      return parseFloat(this.$page.shirt.price + this.$page.shirt.shipping).toFixed(2)
    }
  },
  methods: {
    setIndex () {
      this.activeIndex = ( this.activeIndex + 1 ) % this.$page.pictures.edges.length
    }
  }
}
</script>
<style scoped>
article p {
  @apply my-2 max-w-xs;
}
</style>
