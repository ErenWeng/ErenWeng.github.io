<template>
  <div><TagsPage :tags-list="tagsList" /></div>
</template>

<script>
export default {
  name: 'Tags',
  async asyncData({ $content, error }) {
    try {
      const tagsList = await $content('tags')
        .only(['name', 'description'])
        .sortBy('name', 'asc')
        .fetch()
      return {
        tagsList,
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
