<template>
  <div class="home_page">
    <div v-show="$route.query.tag" class="tag_prompt">
      Tagged - {{ $route.query.tag }}
    </div>
    <transition-group
      v-show="showContent"
      :class="['article_list', { animation: !$store.state.isLoading }]"
      tag="ul"
    >
      <ArticleCard
        v-for="(article, idx) in sliceArray[activePage]"
        :key="`key-${idx}`"
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
      articlesCount: 8,
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
        setTimeout(() => {
          this.showContent = true
        }, 300)
        this.activePage = pageNo - 1
        this.scrollToTop()
        this.showContent = false
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
  .tag_prompt {
    height: 32px;
    line-height: 32px;
    color: var(--green-dark);
    font-weight: 300;
    margin-bottom: 8px;
  }
  .article_list {
    display: grid;
    gap: 16px;
    &.animation {
      animation: show_content 0.8s cubic-bezier(0.15, 0.75, 0, 1) both;
    }
  }
  .pagination_bar {
    position: absolute;
    bottom: -56px;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 8px;
    .page_button {
      height: 32px;
      width: 32px;
      border-radius: 4px;
      border: 1px solid var(--grey-light);
      color: var(--green-dark);
      background-color: var(--main-bgc);
      transition: 0.4s;
      font-size: 16px;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: var(--hover-bgc);
        box-shadow: 2px 2px 4px 0 var(--grey-light);
      }
      &.active {
        color: var(--main-bgc);
        border: 1px solid var(--green-light);
        background-color: var(--green-light);
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
