<template>
  <div class="home_page">
    <ul class="article_list">
      <ArticleCard
        v-for="(article, idx) in $store.state.articles"
        :key="idx"
        :title="article.title"
        :description="article.description"
        :img="article.img"
        :tags="article.tags"
        :slug="article.slug"
        :created-at="article.createdAt"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    this.$store.dispatch('getAllArticles')
  },
}
</script>

<style lang="scss" scoped>
.home_page {
  position: relative;
  .article_list {
    display: grid;
    gap: 24px;
    margin: 8px auto;
  }
}
</style>
