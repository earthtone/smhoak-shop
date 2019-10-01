<template>
  <main class="layout font-thin">
    <header class="header">
      <a @mouseover="setOverlay" href="https://smhoak.city" class="uppercase ml-3 z-10">
        smhoak city
        <span class="overlay-text uppercase text-red-700 inset-0 underline absolute pl-8 text-2xl leading-none" :class="{'hidden':!displayOverlayText}">
          back
        </span>
      </a>
    </header>
    <slot/>
  </main>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'layout',
  data () {
    return {
      displayOverlayText: false
    }
  },
  methods: {
    setOverlay () {
      this.displayOverlayText = !this.displayOverlayText
    }
  }
}
</script>

<style src="../main.css"/>
