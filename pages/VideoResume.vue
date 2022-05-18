<template>
  <div id="video_resume">
    <div class="page-view view-1">
      <div>
        <h1 v-view.once class="project-title">Video Resume</h1>
        <img
          class="title-svg play-btn"
          src="/images/video-resume/play-btn.svg"
          alt=""
          v-view.once
        />
        <img
          class="title-svg resume"
          src="/images/video-resume/cv-icon.svg"
          alt=""
          v-view.once
        />
      </div>
      <EdBreadcrumb
        :previousLink="{ link: '/photography', message: 'Previous' }"
        :nextLink="{ link: '/short-film' }"
      />
    </div>

    <div class="page-view dark view-2 centered">
      <h2 class="subtitle filmmaker" v-view.once>I'm a filmmaker and ?</h2>
    </div>

    <div class="page-view dark view-3">
      <img src="/images/video-resume/video-resume-thumbnail.jpg" alt="" />
    </div>

    <div class="page-view dark view-4">
      <p class="subtitle">Ok so ?</p>
      <p class="subtitle">I wanted to create a video about myself</p>
      <p class="subtitle">So I take my camera and 2-3 friends to shoot me</p>
      <p class="subtitle">Then I did some editing and this is the result</p>
    </div>

    <div class="page-view dark view-5">
      <iframe
        src="https://www.youtube.com/embed/paw3l5THGks"
        frameborder="0"
        class="ytb-video"
      ></iframe>
    </div>

    <EdFooter
      dark
      :previousLink="{ link: '/photography', message: 'Previous' }"
      :nextLink="{ link: '/short-film' }"
    />
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
#video_resume {
  .project-title {
    font-family: "Gilmer";
    font-weight: 900;
    color: black;
    width: 0px;
    text-align: center;
    transition: width 0.5s ease 1s;
    overflow: hidden;

    &.view-in {
      width: 1000px;
    }
  }

  .filmmaker {
    font-family: "Gilmer";
    position: relative;
    overflow: hidden;
    color: black;
    display: inline-block;
    transition: color 0s linear 1.3s;

    &::before {
      content: "";
      position: absolute;
      width: 0%;
      margin-left: 0%;
      height: 48px;
      background-color: white;
      transition: width 0.3s ease 1s, margin-left 0.3s ease 1.4s;
    }

    &.view-in {
      color: white;

      &::before {
        width: 100%;
        margin-left: 100%;
      }
    }
  }

  .title-svg {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ease 0.5s, opacity 0s ease 1s, width 0.3s ease 0.8s;

    &.play-btn {
      width: 650px;
      margin-left: -80px;
    }

    &.resume {
      width: 80px;
      margin-left: 300px;
    }

    &.view-in {
      opacity: 0;
      width: 0;

      &.resume {
        margin-left: -100px;
        transform: translate(-50%, -50%);
      }

      &.play-btn {
        margin: 0;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  .view-3 {
    img {
      width: 100%;
    }
  }

  .view-4 {
    display: block;

    p {
      font-weight: 600;
    }
  }

  .view-5 {
    display: flex;
    align-items: center;
  }
}
</style>
