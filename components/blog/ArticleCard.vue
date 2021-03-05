<template>
  <li class="article_card">
    <NuxtLink :to="`/blog/article/${slug}`" class="article_link">
      <div class="img" v-if="img">
        <img v-if="img" :src="img" />
      </div>
      <div class="article_info">
        <h2 class="title truncate">
          {{ title }}
        </h2>
        <p class="dec truncate-m">
          {{ description }}
        </p>
        <div class="btm_section">
          <div class="tag_section">
            <span v-for="(tag, i) in tags" :key="i" class="card tag">
              {{ tag }}
            </span>
          </div>
          <span class="date truncate">
            {{ formatDate(createdAt) }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
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
      type: String,
      default: () => '',
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
.article_card {
  position: relative;
}
</style>
