<template>
  <div class="page-link">
    <a :href="link">{{ message }}</a>
    <EdLine width="2px" length="100px" />
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
  },
};
</script>

<style lang="scss" scoped>
.page-link {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;

  a {
    font-family: "Montserrat";
    text-decoration: none;
    color: black;
    font-weight: 800;
  }
}
</style>