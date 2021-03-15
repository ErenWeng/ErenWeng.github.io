<template>
  <div class="about_page">
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
            target="_blank"
            :alt="item.icon"
            class="contact_icon"
          >
            <component
              :is="getIconComponentName(item.icon)"
              size="32"
              weight="light"
            />
          </a>
        </li>
        <!-- for component:is -->
        <Gitlab style="display: none" />
      </ul>
    </section>
    <section class="skill">
      <div class="title">Tools I use at work :</div>
      <ul v-for="tool in workTools" :key="tool" class="skill_list">
        <li>{{ tool }}</li>
      </ul>
    </section>
    <section class="skill">
      <div class="title">Tools I tried :</div>
      <ul v-for="tool in triedTools" :key="tool" class="skill_list">
        <li>{{ tool }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { PhGithubLogo, PhLinkedinLogo } from 'phosphor-vue'

export default {
  name: 'AboutPage',
  components: {
    PhGithubLogo,
    PhLinkedinLogo,
  },
  data() {
    return {
      contact: [
        {
          icon: 'github',
          link: 'https://github.com/ErenWeng',
        },
        {
          icon: 'linkedin',
          link: 'https://github.com/ErenWeng',
        },
        {
          icon: 'gitlab',
          link: 'https://github.com/ErenWeng',
        },
      ],
      workTools: [
        'Vue.js / Nuxt.js ( learning )',
        'Javascript ( ES6↑ ) / TypeScript ( learning )',
        'HTML / SCSS / SASS',
        'AJAX / RESTful API',
        'Git / Gitlab / Github',
        'Ubuntu',
      ],
      triedTools: [
        'slim / pug',
        'Bootstrap / ElementUI',
        'jQuery',
        'Ruby on Rails',
        'MySQL / PostgreSQL',
        'Heruko',
        'SVN',
      ],
      about: {
        fullName: 'Eren',
        bio: 'I am a passionate Front-End Developer, I love Vue.js ♥ ',
      },
    }
  },
  methods: {
    getIconComponentName(contactType) {
      if (contactType === 'github') {
        return 'ph-github-logo'
      } else if (contactType === 'linkedin') {
        return 'ph-linkedin-logo'
      } else if (contactType === 'gitlab') {
        return 'Gitlab'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about_page {
  min-height: 100%;
  max-width: 80%;
  padding: 8px;
  margin: auto;
  position: relative;
  .myself {
    padding: 8px;
  }
}
.card_header {
  position: relative;
  display: grid;
  grid-template-rows: 140px 30px;
  justify-items: center;
  background-color: #fff;
  color: #303133;
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
    background: linear-gradient(135deg, $green-light 35%, $green-dark);
    transition: 0.6s;
  }
  &:hover,
  &:focus {
    box-shadow: 0 2px 12px 2px rgba($color: $green-light, $alpha: 0.25);
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
    z-index: 2;
    font-size: 30px;
    color: white;
  }
}
.bio {
  text-align: center;
  margin: 16px 0;
  color: $green-dark;
}
.hr {
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
      color: $green-dark;
      transition: 0.3s;
      ::v-deep {
        .st12 {
          fill: $green-dark;
          transform: scale(1.4) translate(-88px, -72px);
          transition: 0.3s;
        }
      }
      &:hover {
        color: $green-light;
        ::v-deep {
          .st12 {
            fill: $green-light;
          }
        }
      }
    }
  }
}
.skill {
  padding: 16px 8px;
  margin-left: 16px;
  .title {
    margin-left: -16px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    font-size: 24px;
    color: $green-dark;
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .skill_list {
    li {
      list-style-type: '- ';
      font-size: 14px;
      line-height: 2rem;
      color: $green-dark;
      opacity: 0.6;
    }
  }
}
</style>
