<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  transition: {
    afterLeave(el) {
      console.log("afterLeave", el);
    },
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
