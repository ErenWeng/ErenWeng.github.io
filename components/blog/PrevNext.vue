<template>
  <div class="prev_next">
    <div v-if="prev" class="prev_section">
      <nuxt-link :to="`/blog/article/${prev.slug}`" class="prev_content">
        <h3 class="title">
          {{ prev.title }}
        </h3>
        <p class="dec">
          {{ prev.description }}
        </p>
        <ph-arrow-left :size="20" weight="thin" class="ph-arrow-left" />
      </nuxt-link>
    </div>
    <span v-else class="prev_no_content">&nbsp;</span>
    <div v-if="next" class="next_section">
      <nuxt-link :to="`/blog/article/${next.slug}`" class="next_content">
        <h3 class="title">
          {{ next.title }}
        </h3>
        <p class="dec">
          {{ next.description }}
        </p>
        <ph-arrow-right :size="20" weight="thin" class="ph-arrow-right" />
      </nuxt-link>
    </div>
    <span v-else class="next_no_content">&nbsp;</span>
  </div>
</template>

<script>
import { PhArrowLeft, PhArrowRight } from 'phosphor-vue'

export default {
  name: 'PrevNext',
  components: {
    PhArrowLeft,
    PhArrowRight,
  },
  props: {
    prev: {
      type: Object,
      default: () => {},
    },
    next: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.prev_next {
  margin: 24px 0;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(160px, 1fr));
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    .prev_no_content,
    .next_no_content {
      display: none;
    }
  }
}
.prev_section,
.next_section {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  &:hover {
    background-color: $hover-bgc;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
}
.prev_content,
.next_content {
  display: grid;
  padding: 16px;
  grid-template-rows: 32px 96px 24px;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 24px;
    line-height: 32px;
    color: $green-dark;
    font-weight: 300;
  }
  .dec {
    font-size: 14px;
    line-height: 1.5rem;
    color: $green-dark;
    opacity: 0.7;
    text-indent: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }
  .ph-arrow-left,
  .ph-arrow-right {
    color: $green-dark;
    align-self: end;
  }
  .ph-arrow-right {
    justify-self: end;
  }
}
</style>
