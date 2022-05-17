<template>
  <div id="photography">
    <div class="page-view view-1">
      <div>
        <img
          v-view.once
          class="focus"
          src="/images/photography/camera-focus.svg"
          alt=""
        />
        <h1 v-view.once class="project-title">Photography</h1>
      </div>
      <EdBreadcrumb
        :previousLink="{ link: '/introduction', message: 'Introduction' }"
        :nextLink="{ link: '/video-resume' }"
      />
    </div>

    <div class="page-view view-2">
      <img
        class="solo-image"
        src="/images/photography/photography-view-2-1.jpg"
        alt=""
      />
      <img
        class="solo-image"
        src="/images/photography/photography-view-2-2.jpg"
        alt=""
      />
    </div>

    <div class="page-view view-3 centered">
      <h2 v-view.once class="more">
        More <span class="q-mark">?</span>
      </h2>
    </div>

    <div class="page-view view-4">
      <div class="images-row images-row-2 break-images-row">
        <img src="/images/photography/photography-view-4-1.jpg" alt="" />
        <img src="/images/photography/photography-view-4-2.jpg" alt="" />
      </div>

      <div class="images-row images-row-3 break-images-row">
        <img src="/images/photography/photography-view-4-3.jpg" alt="" />
        <img src="/images/photography/photography-view-4-4.jpg" alt="" />
        <img src="/images/photography/photography-view-4-5.jpg" alt="" />
      </div>

      <div class="images-row images-row-3 break-images-row">
        <img src="/images/photography/photography-view-4-6.jpg" alt="" />
        <img src="/images/photography/photography-view-4-7.jpg" alt="" />
        <img src="/images/photography/photography-view-4-8.jpg" alt="" />
      </div>

      <div class="images-row images-row-2">
        <img src="/images/photography/photography-view-4-9.jpg" alt="" />
        <img src="/images/photography/photography-view-4-10.jpg" alt="" />
      </div>

      <div class="images-row images-row-3 break-images-row">
        <img src="/images/photography/photography-view-4-11.jpg" alt="" />
        <img src="/images/photography/photography-view-4-12.jpg" alt="" />
        <img src="/images/photography/photography-view-4-13.jpg" alt="" />
      </div>
    </div>

    <EdFooter
      :nextLink="{ link: '/video-resume' }"
      :previousLink="{ link: '/introduction', message: 'Home ' }"
    />
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
    if (
      $nuxt.$store.state.pages[from.fullPath] == 7 &&
      $nuxt.$store.state.pages[to.fullPath] == 1
    ) {
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
    filter: blur(10px);
    transition: filter 1s ease-in 0.5s;

    &.view-in {
      filter: blur(0px);
    }
  }

  .focus {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    height: 80%;
    object-fit: contain;
    opacity: 0.1;
    transition: opacity 0.2s linear 2s;

    &.view-in {
      opacity: 0;
    }
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
  }

  #footer {
    padding: 70px 20px;
    width: calc(100% - 40px);
  }

  .more {
    width: 0px;
    overflow: hidden;
    transition: all 0s ease .5s, width 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
    font-family: "Qaitan";
    font-size: 140px;
    white-space: nowrap;

    @include lg {
      font-size: 70px;
    }

    .q-mark {
      opacity: 0;
      transition-delay: 1.5s;
    }

    &.view-in--gt-half, &.view-in {
      width: 400px;

      @include lg {
        width: 200px;
      }

      .q-mark {
        opacity: 1;
      }
    }
  }
}
</style>
