<template>
  <div class="page-link">
    <EdLine
      v-if="align == 'left'"
      :color="color"
      :length="windowWidth <= 1024 ? '25px' : '100px'"
    />
    <NuxtLink :class="{ dark: color == 'white' }" :to="link">{{
      message
    }}</NuxtLink>
    <EdLine
      v-if="align == 'right'"
      :color="color"
      :length="windowWidth <= 1024 ? '25px' : '100px'"
    />
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Next",
    },
    link: {
      type: String,
      default: "/",
    },
    align: {
      type: String,
      default: "right",
    },
    color: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      windowWidth: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-link {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: flex-end;

  @include lg {
    font-size: 12px;
  }

  @include sm {
    font-size: 10px;
  }

  a {
    font-family: "Montserrat";
    text-decoration: none;
    color: black;
    font-weight: 800;
  }

  .line {
    margin-bottom: 8px;

    @include lg {
      margin-bottom: 6px;
    }
  }
}
</style>
