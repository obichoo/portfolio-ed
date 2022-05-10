<template>
  <div id="3d_poster">
    <div class="page-view view-1">
      <h1 class="project-title">3D Poster</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "3DPoster",
  head() {
    return {
      title: "Ed - 3D Poster",
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