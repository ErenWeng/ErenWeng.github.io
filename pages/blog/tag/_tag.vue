<template>
  <div>
    <ArticleListPage :articles="filArticles" />
  </div>
</template>

<script>
export default {
  name: 'TagFilter',
  async asyncData({ $content, params, error }) {
    try {
      const filtags = await $content('tags')
        .where({ slug: { $contains: params.tag } })
        .limit(1)
        .fetch()
      const tag = filtags.length > 0 ? filtags[0] : {}
      const filArticles = await $content('articles', params.slug)
        .only([
          'title',
          'description',
          'img',
          'slug',
          'author',
          'tags',
          'createdAt',
        ])
        .where({ tags: { $contains: tag.name } })
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        filArticles,
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
