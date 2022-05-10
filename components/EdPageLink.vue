<template>
  <div class="page-link">
    <EdLine width="2px" length="100px" v-if="align == 'left'" />
    <NuxtLink :to="link">{{ message }}</NuxtLink>
    <EdLine width="2px" length="100px" v-if="align == 'right'" />
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
  },
};
</script>

<style lang="scss" scoped>
.page-link {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: flex-end;
  
  a {
    font-family: "Montserrat";
    text-decoration: none;
    color: black;
    font-weight: 800;
  }

  .line {
    margin-bottom: 8px;
  }
}
</style>