<template>
  <nav class="blog_nav">
    <ul class="nav_list">
      <li :class="['nav_item', { active: $route.path === '/' }]">
        <nuxt-link to="/" class="tab">Articles</nuxt-link>
      </li>
      <li :class="['nav_item', { active: $route.path === '/about' }]">
        <nuxt-link to="/about" class="tab">About</nuxt-link>
      </li>
      <li :class="['nav_item', { active: $route.path === '/project' }]">
        <nuxt-link to="/project" class="tab">Project</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BlogNav',
}
</script>

<style lang="scss" scoped>
.blog_nav {
  position: relative;
}
ul {
  margin-left: 12px;
  li {
    margin-left: 12px;
  }
}
.nav_list {
  padding-bottom: 40px;
  .nav_item {
    margin-bottom: 8px;
    transition: 0.2s;
    border-right: 3px solid transparent;
    .tab {
      display: block;
      line-height: 2rem;
      color: $green-dark;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: $green-light;
      }
    }
    &.active {
      border-right: 3px solid $green-light;
      .tab {
        color: $green-light;
      }
    }
  }
}
</style>
