<template>
  <div id="unfilperdu">
    <div class="page-view view-1">
      <div class="fil-perdu">
        <svg
          id="ejWPRNA5ODl1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 640 480"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            d="M35.739603,200.45622q32.005616,22.17933,80.856291,22.740832c48.850675.561502,107.788815-24.651914,91.805579-44.63941s-41.842281-13.720563-60.642218,10.107036s73.4186,37.917862,140.656255,57.273206s69.848375,17.813299,80.014038,37.059133-40.480425,35.744139-53.904194,5.895771s4.543312-61.079463,34.532374-93.490086s90.121074,21.056326,90.963327,21.056326s51.377435,36.21688,95.174592,42.954904q43.797157,6.738024,91.80558-42.954904"
            fill="none"
            stroke="#EA604F"
            stroke-width="1.28"
          />
        </svg>
      </div>

      <h1 class="project-title">Unfilperdu</h1>
      <EdBreadcrumb
        :previousLink="{ link: '/3d-poster', message: 'Previous' }"
        :nextLink="{ link: '/', message: 'Home' }"
      />
    </div>

    <div class="page-view view-2 centered">
      <p class="subtitle">You want a new brand with embroidery ?</p>
    </div>

    <div class="page-view view-3 centered">
      <img class="logo" src="/images/unfilperdu/logo.jpg" alt="" />
    </div>

    <div class="page-view view-4 centered">
      <p class="subtitle">I created unfilperdu</p>
    </div>

    <div class="page-view view-5">
      <div class="images-row images-row-2 first-row">
        <img src="/images/unfilperdu/unfilperdu-view-5-1.jpg" alt="" />
        <img src="/images/unfilperdu/unfilperdu-view-5-2.jpg" alt="" />
      </div>

      <div class="images-row images-row-2 second-row">
        <img src="/images/unfilperdu/unfilperdu-view-5-3.jpg" alt="" />
        <img src="/images/unfilperdu/unfilperdu-view-5-4.jpg" alt="" />
      </div>

      <div class="images-row images-row-1 third-row">
        <img src="/images/unfilperdu/unfilperdu-view-5-5.png" alt="" />
      </div>
    </div>

    <EdFooter
      :previousLink="{ link: '/3d-poster', message: 'Previous' }"
      :nextLink="{ link: '/', message: 'Home' }"
    />
  </div>
</template>

<script>
export default {
  name: "Unfilperdu",
  head() {
    return {
      title: "Ed - Unfilperdu",
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
#unfilperdu {
  .fil-perdu {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      opacity: 0;
      animation: show 0s linear 1 forwards 0.6s;

      path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 3s ease 1 forwards 0.5s;
      }
    }

    @keyframes dash {
      from {
        stroke-dashoffset: 1000;
      }
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .project-title,
  p {
    font-family: "Jinky";
  }

  p {
    font-size: 90px;
    max-width: 80vw;

    @include md {
      font-size: 45px;

    }
  }

  .view-3 {
    .logo {
      width: 30%;
    }
  }

  .view-5 {
    padding: 0 5%;
    width: 90%;

    .images-row:not(.third-row) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      grid-gap: 5%;
      gap: 5%;
      height: calc(50vw - 1em);
    }

    .third-row {
      img {
        width: 100%;
        margin-bottom: 50px;
        margin-top: 50px;
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
</style>