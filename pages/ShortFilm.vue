<template>
  <div id="short_film">
    <div class="page-view view-1">
      <div v-view.once class="project-title">
        <h1>Sh<span class="red-character">o</span>rt Film</h1>
      </div>
      <EdBreadcrumb
        :previousLink="{ link: '/video-resume', message: 'Previous' }"
        :nextLink="{ link: '/3d-poster' }"
      />
    </div>

    <div class="page-view view-2 dark centered">
      <div class="light" v-view.once>
        <p class="subtitle">
          Light<img
            class="text-icon"
            src="/images/short-film/light.png"
            alt=""
          />
        </p>
      </div>
    </div>

    <div class="page-view view-3 dark centered">
      <img class="fullwidth-img" src="/images/short-film/view-3.png" alt="" />
    </div>

    <div class="page-view view-4 dark centered">
      <p v-view.once class="camera subtitle">
        Camera
        <img class="text-icon" src="/images/short-film/camera.png" alt="" />
      </p>
    </div>

    <div class="page-view view-5 dark centered">
      <img class="fullwidth-img" src="/images/short-film/view-5.jpg" alt="" />
    </div>

    <div class="page-view view-6 dark centered">
      <p v-view.once class="action subtitle">
        Action !
        <img class="text-icon" src="/images/short-film/action.png" alt="" />
      </p>
    </div>

    <div class="page-view view-6 dark centered">
      <iframe
        class="ytb-video"
        src="https://www.youtube.com/embed/MLFv9a59nz0"
        frameborder="0"
      ></iframe>
    </div>

    <EdFooter
      dark
      :previousLink="{ link: '/video-resume', message: 'Previous' }"
      :nextLink="{ link: '/3d-poster' }"
    />
  </div>
</template>

<script>
export default {
  mounted() {},
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
#short_film {
  overflow-x: hidden;
  width: 100vw;
}

#short_film {
  h1,
  p {
    font-family: "Gilbert";
  }

  .project-title {
    line-height: 1em;
    opacity: 0;
    width: 560px;
    transform-origin: left;
    transition: all 1s ease 0.5s, opacity 0.1s ease 0.5s;
    transform: translate(-80vw, -40vh) rotate(-90deg);

    @include lg {
      width: 280px;
    }

    h1 {
      font-size: 140px;
      white-space: nowrap;
      transform-origin: 0px 150px;

      @include lg {
        font-size: 70px;
      }
    }

    &.view-in {
      opacity: 1;
      transform: translate(-50%, -60%);

      h1,
      &::before {
        animation: clap 0.5s ease-in 2s 1 forwards;
      }

      &::before,
      &::after {
        opacity: 0;
      }

      @keyframes clap {
        0% {
          transform: rotate(0deg);
        }

        40% {
          transform: rotate(-20deg);
        }

        50% {
          transform: rotate(-30deg);
        }

        70% {
          transform: rotate(0deg);
        }
      }
    }

    &::before {
      transition: opacity 0.2s ease 2.5s;
      opacity: 1;
      content: "";
      position: absolute;
      left: 0;
      width: 12.5%;
      height: 50px;
      background-color: black;
      top: 100%;
      box-shadow: 70px 0px 0px 0px rgb(245, 245, 245), 140px 0px 0px 0px black,
        210px 0px 0px 0px rgb(245, 245, 245), 280px 0px 0px 0px black,
        350px 0px 0px 0px rgb(245, 245, 245), 420px 0px 0px 0px black,
        490px 0px 0px 0px rgb(245, 245, 245);
      transform-origin: 0px 50px;

      @include lg {
        box-shadow: 35px 0px 0px 0px rgb(245, 245, 245), 70px 0px 0px 0px black,
          105px 0px 0px 0px rgb(245, 245, 245), 140px 0px 0px 0px black,
          175px 0px 0px 0px rgb(245, 245, 245), 210px 0px 0px 0px black,
          245px 0px 0px 0px rgb(245, 245, 245);
      }
    }

    &::after {
      transition: opacity 0.2s ease 2.5s;
      opacity: 1;
      content: "";
      margin-top: 50px;
      position: absolute;
      width: 100%;
      height: 250px;
      background-color: black;
      top: 100%;
      left: 0;
      transform: rotate(0deg);
      transform-origin: 5px 50px;

      @include lg {
        height: 100px;
      }
    }
  }

  p {
    font-size: 60px;
  }

  .red-character {
    color: #ff2323;
  }

  img.text-icon {
    width: 100px;
    margin-left: 30px;
    transform: translateY(25%);
  }

  .light {
    background: linear-gradient(90deg, rgb(0, 0, 0), #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position-x: -40%;
    background-repeat: no-repeat;
    background-size: 80%;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s linear 0.5s;

    &.view-in--gt-half,
    &.view-in {
      opacity: 1;
    }
  }

  .camera.view-in {
    animation: flicker-in 2s linear both;

    @keyframes flicker-in {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
      }
      11% {
        opacity: 1;
      }
      12% {
        opacity: 0;
      }
      20% {
        opacity: 0;
      }
      21% {
        opacity: 1;
      }
      26% {
        opacity: 0;
      }
      30% {
        opacity: 0;
      }
      31% {
        opacity: 1;
      }
      35% {
        opacity: 1;
      }
      36% {
        opacity: 0;
      }
      45% {
        opacity: 0;
      }
      41% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      55% {
        opacity: 1;
      }
      57% {
        opacity: 0;
      }
      60% {
        opacity: 1;
      }
      61% {
        opacity: 0;
      }
      65% {
        opacity: 0;
      }
      66% {
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      77% {
        opacity: 0;
      }
      78% {
        opacity: 1;
      }
      85% {
        opacity: 1;
      }
      81% {
        opacity: 0;
      }
      86% {
        opacity: 0;
      }
      87% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .action.view-in {
    animation: slide-in-elliptic-top-fwd 0.7s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;

    @keyframes slide-in-elliptic-top-fwd {
      0% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        opacity: 1;
      }
    }
  }

  #footer {
    @include md {
      padding: 70px 20px;
      width: calc(100% - 40px);
    }
  }
}

@keyframes bulb-light {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>