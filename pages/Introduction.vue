<template>
  <div class="introduction">
    <div class="left-side">
      <img class="left-side__img" src="/images/introduction-img.jpg" alt="" />
    </div>
    <div class="right-side">
      <h1>Me</h1>
      <p class="introduction-text">
        I'm <span class="first-name">Edouard</span>, Graphic student in Paris
        and Assistant Art Director at Redfuse On the way to become Art Director.
        I also like Video and Photography and everything around.
      </p>

      <div class="page-links">
        <EdPageLink align="left" message="Home" />
        <EdPageLink message="Some projects" />
      </div>
    </div>
  </div>
</template>

<script>
import EdLine from "~/components/EdLine.vue";
import EdPageLink from "~/components/EdPageLink.vue";

export default {
  name: "Introduction",
  components: {
    EdLine,
    EdPageLink,
  },
  data() {
    return {
      professions: ["Art direction", "Photography", "Director", "Web Design"],
      projects: [
        { title: "Photography", slug: "photography" },
        { title: "Video Resume", slug: "resume" },
        { title: "Short Film", slug: "short-film" },
        { title: "3D Poster", slug: "3d-poster" },
        { title: "Unfilperdu", slug: "unfilperdu" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.introduction {
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
  h1 {
    font-family: "Qaitan";
    font-size: 94px;
  }

  .first-name {
    font-style: italic;
    font-size: 120%;
  }
}
</style>
