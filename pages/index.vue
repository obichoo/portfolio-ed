<template>
  <div class="homepage">
    <div class="left-side">
      <img class="left-side__img" loading="eager" src="/images/homepage-img.png" alt="" />
    </div>
    <div class="right-side">
      <div class="top-section">
        <ul class="professions-list">
          <li
            class="professions-list__item"
            v-for="profession in professions"
            :key="profession"
          >
            <p>{{ profession }}</p>
          </li>
        </ul>
        <EdLine axis="vertical" length="70%" width="2px" />
        <div class="subject">
          <h1 class="subject__first-name">ED</h1>
          <h2 class="subject__last-name">BAILLON</h2>
        </div>
      </div>
      <div class="projects">
        <ul>
          <li
            class="project"
            v-for="(project, i) in projects"
            :key="project.slug"
          >
            <NuxtLink :to="project.slug">
              <span class="project__number">0{{ i + 1 }}</span>
              <span class="project__title">{{ project.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <EdPageLink message="Introduction" link="/introduction" />
    </div>
  </div>
</template>

<script>
import EdLine from "~/components/EdLine.vue";
import EdPageLink from "~/components/EdPageLink.vue";

export default {
  name: "Homepage",
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return $nuxt.$store.state.pages[from.name] <
      $nuxt.$store.state.pages[to.name]
      ? "slide-left"
      : "slide-right";
  },
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
  display: grid;
  grid-template-rows: 70% 10% 5%;
  gap: 7.5%;

  .top-section {
    display: flex;
    gap: 5%;
    align-items: center;
  }

  .professions-list {
    padding-left: 0;

    &__item {
      list-style: none;
    }
  }

  .subject {
    &__first-name {
      font-size: 10em;
    }

    &__last-name {
      font-size: 5rem;
    }
  }

  .projects {
    ul {
      display: flex;
      justify-content: space-between;
    }

    .project {
      list-style: none;
      font-weight: 900;

      a {
        display: flex;
        color: black;
        text-decoration: none;
        opacity: 0.5;
        flex-direction: column;
        width: max-content;

        span {
          text-align: center;
        }
      }
    }
  }
}
</style>
