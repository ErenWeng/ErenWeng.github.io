<template>
  <div>
    <ArticleListPage :articles="articles" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content, params, error }) {
    try {
      const articles = await $content('articles', params.slug)
        .only([
          'title',
          'description',
          'img',
          'slug',
          'author',
          'tags',
          'createdAt',
        ])
        .sortBy('createdAt', 'desc')
        .fetch()
      return {
        articles,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
}
</script>
