<template>
<ul>
  <li v-for="picture in pictures" :key="picture">
    <g-image :src="picture"/>
  </li>
</ul>
</template>

<script>
export default {
  name: 'picture-carousel',
  props: ['pictures']
}
</script>
