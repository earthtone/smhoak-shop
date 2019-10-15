<template>
  <Layout>
    <div class="flex flex-col lg:flex-row w-full items-center justify-around md:max-w-6xl md:mx-auto">
      <div
        class="flex w-full min-w-6xl h-full min-h-screen justify-center items-center mx-6"
        @mouseover="closeup = true"
        @mouseleave="closeup = false"
        @click="closeup = !closeup">
          <g-image :class="{'hidden':closeup}" src="~/assets/current/ssci2-1.jpg" />
          <g-image :class="{'hidden':!closeup}" src="~/assets/current/thing.jpg" />
      </div>
      <article class="flex flex-col w-full h-full lg:-mt-24 px-6 mb-12 md:items-end lg:items-start">
        <h3 class="text-2xl mb-6 lg:mb-12">{{ $page.shirt.title }}</h3>
        <p>{{ $page.shirt.domesticShipping }} {{$page.shirt.pickup }}</p>
        <p>{{ $page.shirt.internationalShipping }}</p>
        <p>{{ $page.shirt.details }}</p>
        <p>{{ $page.shirt.subscription }}</p>
        <p>order window opens {{ $page.shirt.orderWindow[0] }}</p>
        <p>order window closes {{ $page.shirt.orderWindow[1] }}</p>
        <p>shipping {{ $page.shirt.shippingDate }}</p>
        <p>next piece in the collection {{ $page.shirt.nextPieceDate }}</p>
      </article>
    </div>
    <footer class="px-6">
      <paypal-form class="max-w-md mx-auto border border-gray-900 mb-6" />
    </footer>
  </Layout>
</template>
<page-query>
query Details {
  shirt: shirtDetails (path: "/src/data/002/") {
  	path
    title
    details
		pickup
		subscription
    domesticShipping
    internationalShipping
    orderWindow
    shippingDate
    nextPieceDate
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
import PictureCarousel from '@/components/picture-carousel.vue'
import PaypalForm from '@/components/paypal-form.vue'

export default {
  name: 'index-page',
  components: {
    PaypalForm,
    PictureCarousel
  },
  data () {
    return {
      closeup: false
    }
  }
}
</script>
<style scoped>
article p {
  @apply my-3 max-w-xs;
}
</style>
