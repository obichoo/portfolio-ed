<template>
  <div
    :class="{
      line: true,
      vertical: axis == 'vertical',
      horizontal: axis == 'horizontal',
    }"
    :style="`--line-width: ${width}; --line-length: ${length}; --line-color: ${color}`"
  ></div>
</template>

<script>
export default {
  props: {
    length: {
      type: String,
      default: '100px',
    },
    width: {
      type: String,
      default: '1px',
    },
    axis: {
      type: String,
      default: 'horizontal'
    },
    color: {
      type: String,
      default: 'black'
    }
  },
};
</script>

<style scoped>
.line {
  
  background-color: var(--line-color);
  display: inline-block;
}

.vertical {
  width: var(--line-width);
  height: var(--line-length);
}

.horizontal {
  width: var(--line-length);
  height: var(--line-width);
}
</style>
