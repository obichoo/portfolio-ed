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
      <p class="subtitle">
        Camera
        <img class="text-icon" src="/images/short-film/camera.png" alt="" />
      </p>
    </div>

    <div class="page-view view-5 dark centered">
      <img class="fullwidth-img" src="/images/short-film/view-5.jpg" alt="" />
    </div>

    <div class="page-view view-6 dark centered">
      <p class="subtitle">
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

    h1 {
      font-size: 140px;
      white-space: nowrap;
      transform-origin: 0px 150px;
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
    transition: opacity 0.3s linear 1s;

    &.view-in--gt-half {
      opacity: 1;
    }
  }
}

// @keyframes shine {
//   0% {
//     background-position-x: -500%;
//   }
//   50% {
//     background-position-x: 500%;
//   }
//   100% {
//     background-position-x: -500%;
//   }
// }

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