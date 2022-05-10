<template>
  <div id="video_resume">
    <div class="page-view view-1">
      <h1 class="project-title">Video Resume</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoResume",
  head() {
    return {
      title: "Ed - Video Resume",
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