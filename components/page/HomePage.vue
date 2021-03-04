<template>
  <div class="home_page">
    <div v-for="(article, idx) in $store.state.articles" :key="idx" class="">
      <div class="title">
        {{ article.title }}
      </div>
      <div class="time">
        {{ article.createdAt }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    this.$store.dispatch('getAllArticles')
  },
}
</script>

<style lang="scss" scoped>
.home_page {
  position: relative;
}
</style>
