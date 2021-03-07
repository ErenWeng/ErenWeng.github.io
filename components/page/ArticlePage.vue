<template>
  <div class="article_page">
    <p>article_page</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: {
    article: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.article_page {
  position: relative;
}
</style>
