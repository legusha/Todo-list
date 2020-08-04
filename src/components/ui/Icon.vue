<template>
  <span
    @click="$emit('action')"
    v-html="symbol"
    class="cursor-point"
  ></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    symbol: {
      type: String,
      required: true
    }
  }
}
</script>
