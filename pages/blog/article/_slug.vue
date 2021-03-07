<template>
  <div>
    <ArticlePage :article="article" :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  name: 'Article',
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      const tagsList = await $content('tags')
        .only(['name', 'slug'])
        .where({ name: { $containsAny: article.tags } })
        .fetch()
      const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
      const [prev, next] = await $content('articles')
        .only(['title', 'slug', 'description', 'img'])
        .sortBy('createdAt', 'desc')
        .surround(params.slug)
        .fetch()
      return {
        article,
        tags,
        prev,
        next,
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
