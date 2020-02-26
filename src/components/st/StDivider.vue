<template>
  <div
    :style="{
      'border-bottom': `${height/16}em solid ${color}`,
      opacity,
    }"
    class="st-divider"
  >
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#535E64',
    },
    opacity: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 4,
    },
  },
};
</script>

<style lang="scss">
.st-divider {
  border-bottom: 4px solid red;
}
</style>
