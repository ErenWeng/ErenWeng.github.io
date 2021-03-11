<template>
  <div class="home_page">
    <ul class="article_list">
      <ArticleCard
        v-for="(article, idx) in sliceArray[activePage]"
        :key="idx"
        :title="article.title"
        :description="article.description"
        :img="article.img"
        :tags="article.tags"
        :slug="article.slug"
        :created-at="article.createdAt"
      />
    </ul>
    <button
      v-for="pageNo in sliceArray.length"
      :key="pageNo"
      @click="activePage = pageNo - 1"
    >
      {{ pageNo }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliceArray: [],
      activePage: 0,
      articlesCount: 3,
    }
  },
  created() {
    if (process.client) {
      for (let i = 0; i < this.articles.length; i = i + this.articlesCount) {
        this.sliceArray.push(this.articles.slice(i, i + this.articlesCount))
      }
    }
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
