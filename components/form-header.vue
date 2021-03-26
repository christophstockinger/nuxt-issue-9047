<template>
  <header class="w-full h-auto mb-6">
    <p class="w-full font-sans font-normal text-xs uppercase text-black mb-2">{{ topline }}</p>
    <h4 class="w-full font-sans font-extrabold text-2xl text-black">{{ headline }}</h4>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    topline: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
  }
})
</script>

<style lang="scss">
//
</style>
