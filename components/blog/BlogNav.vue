<template>
  <nav class="blog_nav">
    <ul class="nav_list">
      <li
        v-for="page in blogPage"
        :key="page.name"
        :class="['nav_item', { active: $route.path === `/blog${page.route}` }]"
      >
        <nuxt-link
          :to="`/blog${page.route}`"
          class="tab"
          @click.native="$emit('toggleSidebar')"
        >
          {{ page.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BlogNav',
  data() {
    return {
      blogPage: [
        { name: 'Articles', route: '' },
        { name: 'About', route: '/about' },
        { name: 'Project', route: '/project' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog_nav {
  position: relative;
}
ul {
  margin-left: 12px;
  li {
    padding-left: 12px;
  }
}
.nav_list {
  padding-bottom: 40px;
  .nav_item {
    margin-bottom: 8px;
    transition: 0.2s;
    border-right: 3px solid $main-bgc;
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
      background: linear-gradient(
        90deg,
        $main-bgc,
        rgba($green-light, $alpha: 0.05)
      );
      .tab {
        color: $green-light;
      }
    }
  }
}
</style>
