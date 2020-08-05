<template>
  <span
    @click="$emit('action')"
    :class="{...classMap, [symbol]: symbol}"
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
