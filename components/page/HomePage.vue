<template>
  <div class="home_page">
    <transition-group v-show="showContent" class="article_list" tag="ul">
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
    </transition-group>
    <div class="pagination_bar">
      <button
        v-for="pageNo in sliceArray.length"
        :key="pageNo"
        :class="['page_button', { active: activePage === pageNo - 1 }]"
        @click="handlePaginationBtn(pageNo)"
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
      articlesCount: 4,
      showContent: true,
    }
  },
  created() {
    if (process.client) {
      this.handleSliceArray()
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
    handlePaginationBtn(pageNo) {
      if (this.activePage !== pageNo - 1) {
        this.activePage = pageNo - 1
        this.scrollToTop()
        this.showContent = false
        setTimeout(() => {
          this.showContent = true
        }, 300)
      }
    },
    handleSliceArray() {
      for (let i = 0; i < this.articles.length; i = i + this.articlesCount) {
        this.sliceArray.push(this.articles.slice(i, i + this.articlesCount))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home_page {
  position: relative;
  height: 100%;
  .article_list {
    display: grid;
    gap: 12px;
    animation: show_content 0.8s cubic-bezier(0.15, 0.75, 0, 1) both;
  }
  .pagination_bar {
    position: absolute;
    bottom: -36px;
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
      color: $green-dark;
      background-color: $main-bgc;
      transition: 0.4s;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: $hover-bgc;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
      }
      &.active {
        color: $main-bgc;
        border: 1px solid $green-light;
        background-color: $green-light;
      }
    }
  }
}
@keyframes show_content {
  0%,
  20% {
    transform: translateX(5vw);
    opacity: 0;
  }
  80%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
