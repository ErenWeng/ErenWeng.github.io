<template>
  <div :class="['about_page', { animation: !$store.state.isLoading }]">
    <section class="myself">
      <div class="card_header">
        <div class="img">
          <img src="@/static/selfie.jpg" alt="selfie" />
        </div>
        <h1 class="fullName">
          {{ about.fullName }}
        </h1>
      </div>
      <div class="bio">
        <p>{{ about.bio }}</p>
      </div>
      <hr class="hr" />
      <ul v-if="contact" class="contact">
        <li v-for="item in contact" :key="item.icon" class="contact_list">
          <a
            :href="item.link"
            :alt="item.icon"
            :title="item.title"
            target="_blank"
            class="contact_icon"
          >
            <component :is="item.icon" size="32" weight="light" />
          </a>
        </li>
      </ul>
    </section>
    <section class="skill">
      <div class="skill_block">
        <div class="title">Tools I use at work :</div>
        <ul v-for="tool in workTools" :key="tool" class="skill_list">
          <li>{{ tool }}</li>
        </ul>
      </div>
      <div class="skill_block">
        <div class="title">Tools I tried (unfamiliar) :</div>
        <ul v-for="tool in triedTools" :key="tool" class="skill_list">
          <li>{{ tool }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { PhGithubLogo, PhLinkedinLogo, PhEnvelope } from 'phosphor-vue'

export default {
  name: 'AboutPage',
  components: {
    PhGithubLogo,
    PhLinkedinLogo,
    PhEnvelope,
  },
  data() {
    return {
      contact: [
        {
          icon: 'PhGithubLogo',
          link: 'https://github.com/ErenWeng',
          title: 'Github',
        },
        {
          icon: 'PhLinkedinLogo',
          link: 'https://github.com/ErenWeng',
          title: 'Linkedin',
        },
        {
          icon: 'PhEnvelope',
          link: 'mailto:f245986@gmail.com',
          title: 'email: f245986@gmail.com',
        },
      ],
      workTools: [
        'Vue.js / Nuxt.js ( learning )',
        'Javascript ( ES6↑ ) / TypeScript ( learning )',
        'AJAX / RESTful API',
        'HTML / SCSS / SASS',
        'Bootstrap / ElementUI',
        'Git / Gitlab / Github',
        'Ubuntu',
      ],
      triedTools: [
        'slim / pug',
        'jQuery',
        'Ruby on Rails',
        'MySQL / PostgreSQL',
        'Github Page / Github Actions',
        'SVN',
      ],
      about: {
        fullName: 'Eren',
        bio: 'I am a passionate Front-End Developer, I love Vue.js ♥ ',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.about_page {
  position: relative;
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  ul,
  li {
    padding: 0;
  }
  .myself {
    flex: 1 0 210px;
  }
  &.animation {
    animation: appear 0.8s cubic-bezier(0.15, 0.75, 0, 1) both;
  }
}
.card_header {
  position: relative;
  display: grid;
  grid-template-rows: 140px 30px;
  justify-items: center;
  transition: 0.3s;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    filter: blur(40px);
    background: linear-gradient(
      135deg,
      var(--green-light) 35%,
      var(--green-dark)
    );
    transition: 0.6s;
  }
  &:hover,
  &:focus {
    &::before {
      opacity: 0.8;
    }
  }
  .img {
    z-index: 2;
    display: grid;
    width: 140px;
    height: 140px;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      object-fit: contain;
      filter: hue-rotate(60deg);
    }
  }
  .fullName {
    margin: 0.5rem;
    z-index: 2;
    font-size: 30px;
    color: white;
  }
}
.bio {
  text-align: center;
  margin: 16px 0;
  color: var(--green-dark);
}
.hr {
  border: 0;
  border-top: 1px solid var(--grey-light);
  margin: 10px;
}
.contact {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .contact_list {
    display: grid;
    .contact_icon {
      height: 32px;
      width: 32px;
      color: var(--green-dark);
      transition: 0.3s;
      &:hover {
        color: var(--green-light);
      }
    }
  }
}
.skill {
  flex: 0 1 100%;
  padding: 0 16px;
  margin-left: 16px;
  .skill_block {
    margin-bottom: 32px;
  }
  .title {
    margin-left: -16px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    font-size: 24px;
    color: var(--green-dark);
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .skill_list {
    li {
      list-style-type: '- ';
      font-size: 14px;
      line-height: 2rem;
      color: var(--green-dark);
      opacity: 0.6;
    }
  }
}
@keyframes appear {
  0%,
  20% {
    opacity: 0;
  }
  80%,
  100% {
    opacity: 1;
  }
}
</style>
