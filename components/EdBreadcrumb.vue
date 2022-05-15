<template>
  <div id="breadcrumb">
    <EdPageLink
      v-if="!hideLeft"
      class="previous-project"
      align="left"
      :link="previousLink.link"
      :message="previousLink.message"
    />
    <EdPageLink
      v-if="!hideRight"
      class="next-project"
      :link="nextLink.link"
      :message="nextLink.message"
    />
  </div>
</template>

<script>
export default {
  props: {
    previousLink: {
      type: Object,
      default: () => {
        return {
          link: "/",
          message: "Previous",
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
    hideLeft: {
      type: Boolean,
      default: false,
    },
    hideRight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
#breadcrumb {
  display: flex;
  width: calc(100% - 300px);
  padding: 0 150px;
  position: absolute;
  bottom: 50px;

  .previous-project {
    margin-right: auto;
  }

  .next-project {
    margin-left: auto;
  }
}
</style>