<template>
  <div>
    <g-image
      v-for="(image, index) in images"
      :key="image.id"
      :class="{'hidden': index !== activeIndex}"
      :src="image.filename"
      @click="$emit('update-image')"/>
  </div>
</template>

<script>
export default {
  name: 'image-group',
  props: {
    images: {
      type: Array,
      require: true
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>
