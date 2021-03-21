<template>
  <li class="article_card">
    <nuxt-link :to="`/blog/article/${slug}`" class="article_link">
      <div v-if="img" class="img_info">
        <img :src="img" />
      </div>
      <div class="article_info">
        <h2 class="title truncate">
          {{ title }}
        </h2>
        <p class="dec truncate-m">
          {{ description }}
        </p>
        <div class="btm_section">
          <div class="tags">
            <span v-for="(tag, i) in tags" :key="i" class="tag">
              {{ tag }}
            </span>
          </div>
          <span class="date truncate">
            {{ formatDate(createdAt) }}
          </span>
        </div>
      </div>
    </nuxt-link>
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
      type: [String, Array],
      default: () => {},
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
  border-radius: 8px;
  background-color: var(--main-bgc);
  transition: 0.4s;
  border: 1px solid var(--grey-light);
  &:hover {
    background-color: var(--hover-bgc);
    box-shadow: 4px 4px 8px 0 var(--grey-light);
  }
}
.article_link {
  display: flex;
  .img_info {
    margin: 8px;
    min-width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 4px;
    display: grid;
    place-items: center;
    @media (max-width: 568px) {
      display: none;
    }
    img {
      width: 120px;
      min-height: 100%;
      object-fit: cover;
      filter: sepia(30%) brightness(1.1) contrast(0.8);
    }
  }
}
.article_info {
  padding: 10px;
  display: grid;
  grid-template-rows: 32px 54px 1fr;
  gap: 4px;
  width: 100%;
  @media (max-width: 568px) {
    grid-template-rows: 32px 2.2fr 1fr;
  }
  .title {
    font-size: 24px;
    color: var(--green-dark);
  }
  .dec {
    font-size: 14px;
    line-height: 1.5rem;
    color: var(--green-dark);
    opacity: 0.7;
    text-indent: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    @media (max-width: 568px) {
      -webkit-line-clamp: 4;
    }
  }
  .btm_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 568px) {
      flex-flow: column;
      justify-content: start;
      align-items: start;
    }
    .tags {
      display: flex;
      align-items: center;
    }
    .tag {
      margin: 0 2px;
      padding: 2px 8px;
      display: inline-block;
      font-size: 12px;
      opacity: 0.5;
      color: var(--green-dark);
      border: 1px solid var(--grey-light);
      border-radius: 4px;
    }
    .date {
      font-size: 12px;
      color: var(--green-dark);
      opacity: 0.7;
      margin-left: 6px;
      @media (max-width: 568px) {
        margin-top: 8px;
      }
    }
  }
}
</style>
