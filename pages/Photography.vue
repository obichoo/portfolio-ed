<template>
  <div id="photography">
    <div class="page-view view-1">
      <h1 class="project-title">Photography</h1>
      <EdPageLink class="next-project" link="/video-resume" message="Next" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Photography",
  head() {
    return {
      title: "Ed - Photography",
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
#photography {
  .view-1 {
    .project-title {
      font-family: "Qaitan";
    }

    
  }
}
</style>