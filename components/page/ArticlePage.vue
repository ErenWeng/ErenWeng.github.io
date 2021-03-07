<template>
  <div class="article_page">
    <p>article_page</p>
    <nuxt-content :document="article" />
    <PrevNext :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: {
    article: {
      type: Object,
      default: () => {},
    },
    prev: {
      type: Object,
      default: () => {},
    },
    next: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.article_page {
  position: relative;
}
</style>
