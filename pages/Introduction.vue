<template>
  <div id="introduction">
    <div class="left-side">
      <img
        class="left-side__img"
        loading="eager"
        src="/images/introduction-img.jpg"
        alt=""
      />
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
import EdLine from "~/components/EdLine.vue";
import EdPageLink from "~/components/EdPageLink.vue";

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
    return $nuxt.$store.state.pages[from.fullPath] <
      $nuxt.$store.state.pages[to.fullPath]
      ? "slide-left"
      : "slide-right";
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
