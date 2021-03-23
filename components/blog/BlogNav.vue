<template>
  <nav class="blog_nav">
    <ul class="nav_list">
      <li v-for="page of blogPage" :key="page.name" class="nav_item">
        <nuxt-link
          v-if="page.route !== '/tag'"
          :to="`/blog${page.route}`"
          :class="[
            'tab',
            {
              active: $route.path === `/blog${page.route}`,
            },
          ]"
          @click.native="$emit('toggleSidebar')"
        >
          {{ page.name }}
        </nuxt-link>
        <div
          v-else
          :class="[
            'tab',
            {
              active:
                $route.path.match(`/blog${page.route}`) &&
                !$store.state.toggleTagList,
            },
          ]"
          @click="$store.dispatch('toggleTagList')"
        >
          {{ page.name }}
          <ph-caret-down
            :size="14"
            weight="thin"
            :class="[
              'toggle_tag_list_icon',
              { toggle: $store.state.toggleTagList },
            ]"
          />
        </div>
        <transition name="showTag">
          <ul
            v-if="page.route === '/tag' && $store.state.toggleTagList"
            class="tag_list"
          >
            <li v-for="tag of $store.state.tagsCount" :key="tag.name">
              <nuxt-link
                :to="{
                  path: `/blog${page.route}/${tag.slug}`,
                  query: { tag: tag.name },
                }"
                :class="[
                  'sub_tab',
                  {
                    active: $route.path === `/blog${page.route}/${tag.slug}`,
                  },
                ]"
                @click.native="$emit('toggleSidebar')"
              >
                {{ tag.name }} {{ tag.count }}
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
import { PhCaretDown } from 'phosphor-vue'

export default {
  name: 'BlogNav',
  components: {
    PhCaretDown,
  },
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
    .sub_tab {
      margin-left: 12px;
      padding-left: 12px;
      display: block;
      line-height: 1.5rem;
      color: var(--green-dark);
      font-size: 13px;
      font-weight: 300;
      cursor: pointer;
      margin-top: 8px;
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
