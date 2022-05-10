<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  transition(to, from) {
    console.log(
      $nuxt.$store.state.pages[from.name],
      $nuxt.$store.state.pages[to.name]
    );
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s;
}

.slide-left-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100vw);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
}

.slide-right-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
