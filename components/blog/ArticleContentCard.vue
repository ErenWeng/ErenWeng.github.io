<template>
  <div class="article_content">
    <img v-if="img" :src="img" class="article_img" />
    <div class="article_header">
      <h1 class="title">{{ title }}</h1>
      <p class="dec">{{ description }}</p>
      <div class="btm_section">
        <div class="tags">
          <span v-for="(tag, i) in tags" :key="i" class="tag">
            {{ tag }}
          </span>
        </div>
        <span class="date truncate">
          {{ formatDate(createdAt) }}
        </span>
      </div>
    </div>
    <article class="markdown_content">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleContentCard',

  props: {
    article: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    img: {
      type: String,
      default: () => '',
    },
    tags: {
      type: [String, Array],
      default: () => {},
    },
    slug: {
      type: String,
      default: () => '',
    },
    createdAt: {
      type: String,
      default: () => '',
    },
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
.article_img {
  margin-bottom: 16px;
  width: 100%;
  max-height: 280px;
  border-radius: 8px;
  object-fit: cover;
  filter: sepia(40%) brightness(1.1) contrast(0.8);
}
.article_content {
  background-color: var(--hover-bgc);
  border-radius: 8px;
  box-shadow: 1px 1px 4px 2px var(--grey-light);
  padding: 24px;
  @media (max-width: 768px) {
    padding: 8px;
  }
  .article_header {
    font-size: 24px;
    color: var(--green-dark);
    font-weight: 300;
    margin-bottom: 24px;
    .title {
      color: var(--green-dark);
      font-size: 2rem;
      font-weight: 300;
      border-bottom: 1px solid var(--grey-light);
      margin-bottom: 16px;
      padding-bottom: 8px;
    }
    .dec {
      color: var(--green-dark);
      font-size: 1rem;
      font-weight: 300;
      line-height: 2;
      text-indent: 2rem;
    }
    .btm_section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 0;
      @media (max-width: 568px) {
        flex-flow: column;
        align-items: flex-end;
      }
      .tags {
        display: flex;
        align-items: center;
      }
      .tag {
        margin: 0 2px;
        padding: 2px 8px;
        display: inline-block;
        font-size: 12px;
        opacity: 0.5;
        color: var(--green-dark);
        border: 1px solid var(--grey-light);
        border-radius: 4px;
      }
      .date {
        font-size: 12px;
        color: var(--green-dark);
        opacity: 0.7;
        margin-left: 6px;
        @media (max-width: 568px) {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
