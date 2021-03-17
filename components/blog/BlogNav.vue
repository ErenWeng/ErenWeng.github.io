<template>
  <nav class="blog_nav">
    <ul class="nav_list">
      <!-- active: $route.path === `/blog${page.route}`, -->
      <li v-for="page of blogPage" :key="page.name" class="nav_item">
        <nuxt-link
          :to="page.route === '/tag' ? '' : `/blog${page.route}`"
          :class="[
            'tab',
            {
              active:
                $route.path === `/blog${page.route}` ||
                ($route.path.match(`/blog${page.route}`) &&
                  page.route === '/tag' &&
                  !$store.state.toggleTagList),
            },
          ]"
          @click.native="
            {
              page.route === '/tag' ? $store.dispatch('toggleTagList') : false
            }
          "
        >
          {{ page.name }}
        </nuxt-link>
        <transition name="showTag">
          <ul
            v-show="$store.state.toggleTagList"
            v-if="page.route === '/tag'"
            class="tab_list"
          >
            <li v-for="tag of $store.state.tagsCount" :key="tag.name">
              <nuxt-link
                :to="`/blog${page.route}/${tag.slug}`"
                :class="[
                  'sub_tab',
                  { active: $route.path === `/blog${page.route}/${tag.slug}` },
                ]"
                @click.native="$emit('toggleSidebar')"
              >
                {{ tag.name }}
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BlogNav',
  data() {
    return {
      tagsCount: [],
      blogPage: [
        { name: 'Articles', route: '' },
        { name: 'Tags', route: '/tag' },
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
.nav_list {
  padding-bottom: 40px;
  padding-left: 12px;
  .nav_item {
    margin-bottom: 8px;
    transition: 0.2s;
    .tab {
      padding-left: 12px;
      display: block;
      line-height: 2rem;
      color: $green-dark;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.2s;
      border-right: 3px solid $main-bgc;
      &:hover {
        color: $green-light;
      }
      &.active {
        border-right: 3px solid $green-light;
        background: linear-gradient(
          90deg,
          $main-bgc,
          rgba($green-light, $alpha: 0.05)
        );
        color: $green-light;
      }
    }
    .sub_tab {
      margin-left: 12px;
      padding-left: 12px;
      display: block;
      line-height: 1.5rem;
      color: $green-dark;
      font-size: 14px;
      font-weight: 300;
      cursor: pointer;
      margin-top: 8px;
      transition: 0.2s;
      &:hover {
        color: $green-light;
      }
      &.active {
        border-right: 3px solid $green-light;
        background: linear-gradient(
          90deg,
          $main-bgc,
          rgba($green-light, $alpha: 0.05)
        );
        color: $green-light;
      }
    }
  }
}
.showTag-enter-active,
.showTag-leave-active {
  max-height: 1000px;
  transform: translateY(0%);
  transition: 0.5s;
}
.showTag-enter,
.showTag-leave-to {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-15%);
  transition: 0.5s;
}
</style>
