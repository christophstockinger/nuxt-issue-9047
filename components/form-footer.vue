<template>
  <footer
    class="flex flex-col flex-nowrap justify-start items-center w-full h-auto mt-8 sm:flex-row sm:items-center"
  >
    <div class="w-full sm:w-5/12 md:w-3/12">
      <p
        v-if="progressValue"
        class="font-sans font-normal text-xs text-darkgrey"
      >
        Fortschritt: {{ progressValue }}
      </p>
    </div>
    <div
      class="flex flex-col justify-start items-start w-full sm:w-7/12 sm:flex-row sm:justify-end sm:items-center md:w-9/12"
    >
      <UiButton
        v-if="hasPrevButton"
        tag="button"
        type="button"
        label="Zurück"
        class="c-FormFooter-button"
        secondary
        @click.native="prev()"
      />
      <UiButton
        v-if="hasNextButton"
        tag="button"
        type="button"
        label="Weiter"
        class="c-FormFooter-button"
        @click.native="next()"
      />
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { isNil } from 'lodash'

export default Vue.extend({
  props: {
    progress: {
      type: [String, Number, null],
      default: null,
    },
    hasPrevButton: {
      type: Boolean,
      default: false,
    },
    hasNextButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    progressValue() {
      if (!isNil(this.progress)) return `${this.progress}%`
      return null
    },
  },
  methods: {
    prev() {
      this.$emit('formFooter:prev')
    },
    next() {
      this.$emit('formFooter:next')
    },
  },
})
</script>

<style lang="scss">
.c-FormFooter {
  &-button {
    @apply w-full mb-4 sm:mb-0 sm:w-auto sm:mr-8 last:mb-0 last:sm:mr-0 #{!important};
  }
}
</style>
