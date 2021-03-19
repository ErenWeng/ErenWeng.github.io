<template>
  <div class="article_page">
    <section class="article_container">
      <ArticleContentCard
        :article="article"
        :title="article.title"
        :description="article.description"
        :img="article.img"
        :tags="article.tags"
        :slug="article.slug"
        :created-at="article.createdAt"
      />
      <PrevNext :prev="prev" :next="next" />
    </section>
    <aside class="table_of_content">
      <TableOfContent :article="article" />
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
}
.table_of_content {
  position: sticky;
  height: 0;
  top: 56px;
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
