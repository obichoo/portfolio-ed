<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html {
  overflow: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-left-enter,
.slide-left-leave,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-right-enter,
.slide-right-leave {
  transition: all 0.5s;
}

.slide-left-enter-active {
  transform: translateX(0);
}

.slide-left-leave-active {
  transform: translateX(-100vw);
}

.slide-left-enter {
  transform: translateX(100vw);
}

.slide-right-enter-active {
  transform: translateX(0);
}

.slide-right-leave-active {
  transform: translateX(100vw);
}

.slide-right-enter {
  transform: translateX(-100vw);
}
</style>
