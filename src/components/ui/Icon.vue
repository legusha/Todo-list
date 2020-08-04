<template>
  <span
    @click="$emit('action')"
    v-html="symbol"
    :class="uiClass"
    class="cursor-point"
  ></span>
</template>

<script>
import { ui } from '@/mixin'
export default {
  name: 'Icon',
  mixins: [ui],
  props: {
    symbol: {
      type: String,
      required: true
    }
  }
}
</script>
