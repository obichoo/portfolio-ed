<template>
  <div id="homepage">
    <div class="left-side">
      <img class="left-side__img" src="/images/homepage-img.png" alt="" />
    </div>
    <div class="right-side">
      <div class="top-section">
        <div class="professions-list--container" v-view.once>
          <ul class="professions-list">
            <li
              class="professions-list__item"
              v-for="profession in professions"
              :key="profession"
            >
              <p>{{ profession }}</p>
            </li>
          </ul>
        </div>
        <EdLine axis="vertical" length="70%" width="2px" />
        <div class="subject" v-view.once>
          <h1 class="subject__first-name">ED</h1>
          <h2 class="subject__last-name">BAILLON</h2>
        </div>
      </div>
      <div class="projects">
        <ul v-view.once>
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
  head() {
    return {
      title: "Ed - Homepage",
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
  components: {
    EdLine,
    EdPageLink,
  },
  data() {
    return {
      professions: ["Art direction", "Photography", "Director", "Web Design"],
      projects: [
        { title: "Photography", slug: "photography" },
        { title: "Video Resume", slug: "video-resume" },
        { title: "Short Film", slug: "short-film" },
        { title: "3D Poster", slug: "3d-poster" },
        { title: "Unfilperdu", slug: "unfilperdu" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#homepage {
  display: grid;
  grid-template-columns: 40% calc(60% - 40px);
  gap: 40px;
  padding: 100px 122px;
  height: calc(100vh - 200px);

  @include xl {
    padding: 50px;
    height: calc(100vh - 100px);
  }

  @include lg {
    display: flex;
    flex-direction: column;
  }

  @include md {
    padding: 30px;
    height: calc(100vh - 60px);
  }

  @include sm {
    gap: 0;
  }
}

.left-side {
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @include lg {
    width: 100%;
    height: 200px;
  }
}

.right-side {
  display: grid;
  grid-template-rows: 70% 10% 5%;
  gap: 7.5%;

  @include sm {
    grid-template-rows: 1fr 1fr;
    gap: 3%;
  }

  .top-section {
    display: flex;
    align-items: center;

    @include lg {
      justify-content: center;
    }

    .professions-list--container {
      width: 130px;
      overflow: hidden;
      padding-right: 5%;

      @include lg {
        padding-right: 5vw;
      }

      @include md {
        width: 75px;
      }

      .professions-list {
        &__item:nth-child(1) {
          transition: transform 0.5s ease 0.7s;
        }
        &__item:nth-child(2) {
          transition: transform 0.5s ease 0.8s;
        }
        &__item:nth-child(3) {
          transition: transform 0.5s ease 0.9s;
        }
        &__item:nth-child(4) {
          transition: transform 0.5s ease 1s;
        }
        &__item {
          transform: translateX(200px);

          @include lg {
            text-align: right;
          }

          @include md {
            font-size: 12px;
          }
        }
      }

      &.view-in {
        .professions-list {
          &__item {
            transform: translateX(0px);
          }
        }
      }
    }

    .subject {
      width: 470px;
      overflow: hidden;

      @include xl {
        width: 280px;
      }

      @include lg {
        width: 320px;
      }

      @include md {
        width: 200px;
      }

      @include sm {
        width: 150px;
      }

      &__first-name,
      &__last-name {
        padding-left: 5%;
        margin-left: -470px;
        transition: margin-left 0.5s ease 0.2s;

        @include lg {
          padding-left: 5vw;
        }
      }

      &__last-name {
        transition: margin-left 0.5s ease 0.5s;
      }

      &.view-in {
        .subject__first-name,
        .subject__last-name {
          margin-left: 0px;
        }
      }
    }
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

      @include xl {
        font-size: 7em;
      }

      @include md {
        font-size: 4em;
      }

      @include sm {
        font-size: 2.5em;
      }
    }

    &__last-name {
      font-size: 5rem;

      @include xl {
        font-size: 3em;
      }

      @include md {
        font-size: 2em;
      }

      @include sm {
        font-size: 1.5em;
      }
    }
  }

  .projects {
    @include lg {
      margin: auto;
      margin-top: 50px;
    }

    @include sm {
      margin-top: 0;
    }

    ul {
      display: flex;
      justify-content: space-between;
      width: 630px;
      padding-left: 0;

      @include xl {
        width: 500px;
      }

      @include md {
        font-size: 12px;
        width: 346px;
        gap: 20px;
      }

      @include sm {
        flex-direction: column;
        align-items: center;
        width: 50px;
      }

      .project {
        transform: translateX(100vw);

        &:nth-child(1) {
          transition: transform 0.5s ease 0.4s;
        }

        &:nth-child(2) {
          transition: transform 0.7s ease 0.6s;
        }

        &:nth-child(3) {
          transition: transform 0.9s ease 0.8s;
        }

        &:nth-child(4) {
          transition: transform 1.1s ease 1s;
        }

        &:nth-child(5) {
          transition: transform 1.3s ease 1.2s;
        }
      }

      &.view-in {
        .project {
          transform: translateX(0vw);
        }
      }
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

  @include lg {
    .page-link {
      position: absolute;
      bottom: 50px;
      right: 50px;
    }
  }
}
</style>
