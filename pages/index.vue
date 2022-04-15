<template>
  <div class="homepage">
    <div class="left-side">
      <img class="left-side__img" src="/images/homepage-img.png" alt="" />
    </div>
    <div class="right-side">
      <ul class="professions-list">
        <li
          class="professions-list__item"
          v-for="profession in professions"
          :key="profession"
        >
          {{ profession }}
        </li>
      </ul>
      <div class="vline"></div>
      <div class="subject">
        <h1 class="subject__first-name">ED</h1>
        <h2 class="subject__last-name">BAILLON</h2>
      </div>
      <div class="projects">
        <NuxtLink
          class="project"
          :to="project.slug"
          v-for="(project, i) in projects"
          :key="project.slug"
        >
          <p class="project__number">0{{ i + 1 }}</p>
          <small class="project__title">{{ project.title }}</small>
        </NuxtLink>
      </div>
      <div class="">
        <NuxtLink class="" to="/">some projects</NuxtLink>
        <div class="hline"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.homepage {
  display: grid;
  grid-template-columns: 40% calc(60% - 40px);
  gap: 40px;
  margin: 100px 122px;
  height: calc(100vh - 200px);
}

.left-side {
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.right-side {
  .professions-list {
    &__item {
      list-style: none;
    }
  }

  .projects {
    .project {
      text-decoration: none;
      color: black;
      & * {
        opacity: 0.5;
      }
    }
  }
}
</style>
