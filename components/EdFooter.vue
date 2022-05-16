<template>
  <div id="footer" :class="{ dark: dark }">
    <EdPageLink
      :link="previousLink.link"
      :message="previousLink.message"
      align="left"
      :color="dark ? 'white' : 'black'"
    />
    <a class="ed-mail" href="mailto:edouardbaillon@gmail.com"
      >edouardbaillon@gmail.com</a
    >
    <EdPageLink
      :link="nextLink.link"
      :message="nextLink.message"
      :color="dark ? 'white' : 'black'"
    />
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    previousLink: {
      type: Object,
      default: () => {
        return {
          link: "/",
          message: "Home",
        };
      },
    },
    nextLink: {
      type: Object,
      default: () => {
        return {
          link: "/",
          message: "Next",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  width: calc(100% - 200px);
  justify-content: space-between;
  padding: 75px 100px;

  &.dark {
    background-color: #000;

    &::v-deep {
      a {
        color: white;
      }
    }
  }

  .ed-mail {
    font-family: "Montserrat";
    color: black;
    text-decoration: none;
    font-weight: 700;

    @include lg {
      font-size: 12px;
    }

    @include sm {
      font-size: 10px;
    }
  }
}
</style>
