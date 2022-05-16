<template>
  <div id="introduction">
    <div class="left-side">
      <img src="/images/introduction-img.jpg" class="left-side__img" alt="">
    </div>
    <div class="right-side">
      <h1>Me</h1>
      <p class="introduction-text">
        I'm <span class="first-name">Edouard</span>,<br />
        Graphic student in Paris and Assistant Art Director at Redfuse.<br />
        On the way to become Art Director.<br />
        I also like Video and Photography and everything around.
      </p>

      <div class="page-links">
        <EdPageLink align="left" message="Home" />
        <EdPageLink link="/photography" message="Some projects" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  head() {
    return {
      title: "Ed - Introduction",
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
  mounted() {
    // const leftSide = document.querySelector('.left-side');
    // const img = new Image();
    // img.src = "/images/introduction-img.jpg";
    // img.alt = "";
    // img.classList = ["left-side__img"];
    // img.setAttribute(`data-v-${Object.keys(leftSide.dataset)[0].slice(1,Object.keys(leftSide.dataset)[0].length)}`,'')

    // leftSide.appendChild(img);
  },
};
</script>

<style lang="scss" scoped>
#introduction {
  display: grid;
  grid-template-columns: 40% calc(60% - 40px);
  gap: 40px;
  margin: 100px 122px;
  height: calc(100vh - 200px);
}

.left-side {
  overflow: hidden;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }
}

.right-side {
  padding-left: 50px;
  padding-top: 50px;
  position: relative;

  h1 {
    font-family: "Qaitan";
    font-size: 94px;
  }

  .introduction-text {
    width: 50%;
    line-height: 2em;
    margin-top: 50px;
    animation: name duration timing-function delay iteration-count direction
      fill-mode;
  }

  .first-name {
    font-style: italic;
    font-size: 120%;
    font-weight: 500;
  }

  .page-links {
    position: absolute;
    bottom: 0;
    width: calc(100% - 50px);
    display: flex;
    justify-content: space-between;
  }
}
</style>
