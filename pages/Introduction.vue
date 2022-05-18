<template>
  <div id="introduction">
    <div class="left-side">
      <img src="/images/introduction-img.jpg" class="left-side__img" alt="" />
    </div>
    <div class="right-side">
      <h1 v-view.once>Me</h1>
      <p class="introduction-text" v-view.once>
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
};
</script>

<style lang="scss" scoped>
#introduction {
  display: grid;
  grid-template-columns: 40% calc(60% - 40px);
  gap: 40px;
  margin: 100px 122px;
  height: calc(100vh - 200px);

  @include xl {
    grid-template-columns: 35% calc(65% - 40px);
  }

  @include lg {
    margin: 50px 70px;
    height: calc(100vh - 100px);
  }

  @include md {
    grid-template-columns: 1fr;
    grid-template-rows: 40vh 1fr;
    gap: 0;
  }

  @include sm {
    margin: 30px;
    height: calc(100vh - 60px);
  }
}

.left-side {
  overflow: hidden;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;

    @include md {
      object-position: 15% 10%;
    }
  }

  @include md {
    max-height: 35vh;
  }
}

.right-side {
  padding-left: 50px;
  padding-top: 50px;
  position: relative;

  @include xl {
    padding-left: 0;
  }

  @include md {
    padding-top: 0;
  }

  h1 {
    font-family: "Qaitan";
    font-size: 94px;
    color: white;
    transition: color 0.5s 1s;

    &.view-in {
      color: black;
    }
  }

  .introduction-text {
    margin-top: 50px;
    width: 500px;
    line-height: 0em;
    color: white;
    transition: color 2s ease 3s, line-height 1.5s ease 3s;

    @include lg {
      font-size: 14px;
      width: 300px;
    }

    @include md {
      margin-top: 20px;
    }

    &.view-in {
      line-height: 2em;
      color: black;

      .first-name {
        color: black;
      }
    }
  }

  .first-name {
    font-style: italic;
    font-size: 120%;
    font-weight: 500;
    position: relative;
    color: white;
    transition: color 1s ease 2s;
  }

  .page-links {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
