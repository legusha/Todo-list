<template>
  <span
    @click="$emit('action')"
    :class="{...classMap, [symbol]: symbol}"
    class="cursor-point"
  ></span>
</template>

<script>
import { classDynamic } from '@/mixin'
export default {
  name: 'Icon',
  mixins: [classDynamic],
  props: {
    symbol: {
      type: String,
      required: true
    }
  }
}
</script>
