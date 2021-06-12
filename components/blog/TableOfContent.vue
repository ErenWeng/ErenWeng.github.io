<template>
  <client-only>
    <scrollactive
      highlight-first-item
      active-class="scroll_active"
      tag="ul"
      class="nav"
      :scroll-offset="0"
      :offset="0"
      :click-to-scroll="true"
    >
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="[
          'dot',
          'truncate',
          {
            li_depth_2: link.depth === 2,
          },
        ]"
      >
        <a
          :href="`#${link.id}`"
          :class="[
            'scrollactive-item',
            {
              link_depth_2: link.depth === 2,
              link_depth_3: link.depth === 3,
            },
          ]"
        >
          {{ link.text }}
        </a>
      </li>
    </scrollactive>
  </client-only>
</template>

<script>
export default {
  name: 'TableOfContent',
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    window.addEventListener('scroll', scrollThrottler, false)

    let scrollTimeout = null
    function scrollThrottler() {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          scrollTimeout = null
          actualScrollHandler()
        }, 200)
      }
    }
    function actualScrollHandler() {
      const activeTab = document.querySelector('.scroll_active')
      if (activeTab) {
        const active = decodeURI(activeTab.href.split('#')[1])
        const sections = [
          ...document.querySelectorAll(
            '.nuxt-content h2[id], .nuxt-content h3[id]'
          ),
        ]
        const result = sections.filter((section) => {
          return section.id === active
        })
        result[0].classList.add('active_title')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 0;
}
.scrollactive-item {
  color: var(--green-dark);
  opacity: 0.5;
  font-size: 13px;
  line-height: 1.5rem;
  border-left: 2px solid transparent;
}
.scroll_active {
  opacity: 1;
  color: var(--green-light);
  border-left: 2px solid var(--green-light);
}
.dot {
  list-style: none;
  color: var(--grey-dark); // for dot ...
}
.li_depth_2 {
  padding-top: 2px;
}
.link_depth_2 {
  padding-left: 8px;
}
.link_depth_3 {
  padding-left: 24px;
}
</style>
