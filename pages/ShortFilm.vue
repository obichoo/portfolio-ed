<template>
  <div id="short_film">
    <div class="page-view view-1">
      <h1 class="project-title">Short Film</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortFilm",
  head() {
    return {
      title: "Ed - Short Film",
    };
  },
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return $nuxt.$store.state.pages[from.fullPath] <
      $nuxt.$store.state.pages[to.fullPath]
      ? "slide-left"
      : "slide-right";
  },
};
</script>

<style lang="scss" scoped>
</style>