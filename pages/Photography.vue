<template>
  <div id="photography">
    <div class="page-view view-1">
      <h1 class="project-title">Photography</h1>
      <EdPageLink class="next-project" link="/video-resume" message="Next" />
    </div>

    <div class="page-view view-2">
      <img src="/images/photography/photography-view-2-1.jpg" alt="" />
      <img src="/images/photography/photography-view-2-2.jpg" alt="" />
    </div>

    <div class="page-view view-3">
      <h1 class="project-title">More ?</h1>
    </div>

    <div class="page-view view-4">
      <div class="images-row images-row-2">
        <img src="/images/photography/photography-view-4-1.jpg" alt="" />
        <img src="/images/photography/photography-view-4-2.jpg" alt="" />
      </div>

      <div class="images-row images-row-3">
        <img src="/images/photography/photography-view-4-3.jpg" alt="" />
        <img src="/images/photography/photography-view-4-4.jpg" alt="" />
        <img src="/images/photography/photography-view-4-5.jpg" alt="" />
      </div>

      <div class="images-row images-row-3">
        <img src="/images/photography/photography-view-4-6.jpg" alt="" />
        <img src="/images/photography/photography-view-4-7.jpg" alt="" />
        <img src="/images/photography/photography-view-4-8.jpg" alt="" />
      </div>

      <div class="images-row images-row-2">
        <img src="/images/photography/photography-view-4-9.jpg" alt="" />
        <img src="/images/photography/photography-view-4-10.jpg" alt="" />
      </div>

      <div class="images-row images-row-3">
        <img src="/images/photography/photography-view-4-11.jpg" alt="" />
        <img src="/images/photography/photography-view-4-12.jpg" alt="" />
        <img src="/images/photography/photography-view-4-13.jpg" alt="" />
      </div>
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
  .project-title {
    font-family: "Qaitan";
  }

  .view-2 {
    img {
      display: block;

      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  .view-4 {
    padding: 0 20px;
    width: calc(100% - 40px);

    .images-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }
  }
}
</style>
