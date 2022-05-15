<template>
  <div id="threed_poster">
    <div class="page-view view-1">
      <h1 class="project-title text_shadows">3D Poster</h1>
      <EdBreadcrumb
        :previousLink="{ link: '/short-film', message: 'Previous' }"
        :nextLink="{ link: '/unfilperdu' }"
      />
    </div>

    <div class="page-view view-2 centered">
      <p class="subtitle">I want to do 3D</p>
    </div>

    <div class="page-view view-3 centered">
      <p class="subtitle">So I do 3D with Cinema 4D</p>
    </div>

    <div class="page-view view-4 centered">
      <img class="fullwidth-img" src="/images/3d-poster/view-4.jpg" alt="" />
    </div>

    <div class="page-view view-3 centered">
      <p class="subtitle">
        And after I use Octane Render to have a better render
      </p>
    </div>

    <div class="page-view view-4">
      <img
        class="large-img"
        src="/images/3d-poster/3d-poster-view-4-1.jpg"
        alt=""
      />
      <img
        class="small-img"
        src="/images/3d-poster/3d-poster-view-4-2.jpg"
        alt=""
      />
    </div>

    <div class="page-view view-5 centered">
      <p class="subtitle">So I learned 3D</p>
      <img src="/images/3d-poster/check.png" alt="" />
    </div>

    <EdFooter
      :previousLink="{ link: '/short-film', message: 'Previous' }"
      :nextLink="{ link: '/unfilperdu' }"
    />
  </div>
</template>

<script>
export default {
  name: "threed-poster",
  head() {
    return {
      title: "Ed - 3D Poster",
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
#threed_poster {
  .project-title {
    text-shadow: #ffd26a 0px 10px;
  }

  .project-title,
  p {
    font-family: "Flood";
  }

  .view-4 {
    .large-img {
      width: 70%;
      display: block;
      margin: auto;
    }

    .small-img {
      margin-left: 7.5%;
      width: 35%;
      transform: translateY(-50%);
    }
  }

  .view-5 {
    img {
      position: absolute;
    }
  }

  .text_shadows {
    --color-secondary: #be9c4b;
    --color-tertiary: #d4b05d;
    --color-quaternary: #e7bf62;
    --color-quinary: #ffd26a;
    text-shadow: none;
    animation: shadows 1s ease-out 1 1s forwards, move 1s ease-out 1 1s forwards;
  }

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    20% {
      text-shadow: 3px 3px 3px var(--color-secondary);
    }
    40% {
      text-shadow: 3px 3px 3px var(--color-secondary),
        6px 6px 3px var(--color-tertiary);
    }
    60% {
      text-shadow: 3px 3px 3px var(--color-secondary),
        6px 6px 3px var(--color-tertiary), 9px 9px 3px var(--color-quaternary);
    }
    80% {
      text-shadow: 3px 3px 3px var(--color-secondary),
        6px 6px 3px var(--color-tertiary), 9px 9px 3px var(--color-quaternary),
        12px 12px 5px var(--color-quinary);
    }
    100% {
      text-shadow: 3px 3px 3px var(--color-secondary),
        6px 6px 3px var(--color-tertiary), 9px 9px 3px var(--color-quaternary),
        12px 12px 5px var(--color-quinary);
    }
  }

  @keyframes move {
    0% {
      transform: translate(calc(-50%), calc(-50%));
    }
    80% {
      transform: translate(calc(-50% - 12px), calc(-50% - 12px));
    }
    100% {
      transform: translate(calc(-50% - 12px), calc(-50% - 12px));
    }
  }
}
</style>