<template>
  <div class="article_page">
    <section class="article_container">
      <img
        v-if="article.img"
        :src="article.img"
        :alt="article.alt"
        class="article_img"
      />
      <article class="markdown_content">
        <nuxt-content :document="article" />
      </article>
      <PrevNext :prev="prev" :next="next" />
    </section>
    <aside class="table_of_content">
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </aside>
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
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .article_img {
    margin-bottom: 16px;
    width: 100%;
    max-height: 280px;
    border-radius: 8px;
    object-fit: cover;
    filter: sepia(40%) brightness(1.1) contrast(0.8);
  }
}
.table_of_content {
  position: sticky;
  height: 0;
  top: 40px;
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
