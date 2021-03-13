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
    <div class="pagination_bar">
      <button
        v-for="pageNo in sliceArray.length"
        :key="pageNo"
        class="page_button"
        @click=";[(activePage = pageNo - 1), scrollToTop()]"
      >
        {{ pageNo }}
      </button>
    </div>
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
      articlesCount: 5,
    }
  },
  created() {
    if (process.client) {
      for (let i = 0; i < this.articles.length; i = i + this.articlesCount) {
        this.sliceArray.push(this.articles.slice(i, i + this.articlesCount))
      }
    }
  },
  methods: {
    scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 40)
      }, 10)
    },
  },
}
</script>

<style lang="scss" scoped>
.home_page {
  position: relative;
  height: 100%;
  padding-bottom: 56px;
  .article_list {
    display: grid;
    gap: 24px;
    margin: 8px auto;
  }
  .pagination_bar {
    position: absolute;
    bottom: 8px;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
    .page_button {
      height: 32px;
      width: 32px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: $main-bgc;
      transition: 0.4s;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: $hover-bgc;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
