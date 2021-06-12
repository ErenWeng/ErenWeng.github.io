<template>
  <nav class="blog_nav">
    <ul class="nav_list">
      <li v-for="page of blogPage" :key="page.name" class="nav_item">
        <nuxt-link
          :to="`${page.route}`"
          :class="['tab', { active: commonTab(page) }]"
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
        { name: 'Articles', route: '/blog' },
        { name: 'Tags', route: '/blog/tag' },
        // { name: 'Project', route: '/project' },
        { name: 'About', route: '/about' },
      ],
    }
  },
  methods: {
    commonTab(page) {
      return this.$route.path === `${page.route}`
    },
  },
}
</script>

<style lang="scss" scoped>
.blog_nav {
  position: relative;
}
.nav_list {
  padding-bottom: 40px;
  padding-left: 12px;
  .nav_item {
    list-style: none;
    margin-bottom: 8px;
    transition: 0.2s;
    .tab {
      padding-left: 12px;
      display: block;
      line-height: 2rem;
      color: var(--green-dark);
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.2s;
      border-right: 3px solid transparent;
      &:hover {
        color: var(--green-light);
      }
      &.active {
        border-right: 3px solid var(--green-light);
        background: linear-gradient(
          90deg,
          var(--main-bgc),
          rgba(var(--green-light), $alpha: 0.05)
        );
        color: var(--green-light);
      }
      .toggle_tag_list_icon {
        vertical-align: middle;
        transition: 0.3s;
        margin: 0 0 2px 4px;
        &.toggle {
          transition: 0.3s;
          transform: scaleY(-1);
        }
      }
    }
    .tag_list {
      list-style: none;
      padding: 0;
    }
    .sub_tab {
      margin-left: 12px;
      padding-left: 12px;
      display: block;
      line-height: 1.5rem;
      color: var(--green-dark);
      font-size: 13px;
      font-weight: 300;
      cursor: pointer;
      // margin-top: 8px;
      transition: 0.2s;
      &:hover {
        color: var(--green-light);
      }
      &.active {
        border-right: 3px solid var(--green-light);
        background: linear-gradient(
          90deg,
          var(--main-bgc),
          rgba(var(--green-light), $alpha: 0.05)
        );
        color: var(--green-light);
      }
    }
  }
}
</style>
