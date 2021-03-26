<template>
  <section class="relative w-full h-auto py-8">
    <div
      class="flex flex-row flex-wrap justify-start items-start w-full max-w-screen-lg mx-auto px-8"
    >
      <form
        class="w-full h-auto flex flex-col justify-start items-start md:w-8/12 md:mx-auto"
      >
        <FormHeader topline="Topline" headline="Headline" />
        From
        <FormFooter
          :progress="progress"
          has-prev-button
          has-next-button
          @formFooter:prev="onPrev($event)"
          @formFooter:next="onNext($event)"
        />
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Taxable } from '~/interfaces/index'

export default Vue.extend({
  data() {
    const taxable: Taxable | null = null

    return {
      taxable,
    }
  },
  computed: {
    progress() {
      return 0
    },
  },
  methods: {
    onPrev(_evt) {},
    onNext(_evt) {},
  },
})
</script>

<style lang="scss">
//
</style>
