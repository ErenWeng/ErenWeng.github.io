<template>
  <div class="home_page">
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
  </div>
</template>

<script>
import { PhGithubLogo, PhLinkedinLogo, PhEnvelope } from 'phosphor-vue'

export default {
  name: 'HomePage',
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
      about: {
        fullName: 'Eren',
        bio: 'I am a passionate Front-End Developer, I love Vue.js ♥ ',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.home_page {
  display: grid;
  place-items: center;
  height: 100%;
  ul,
  li {
    padding: 0;
  }
}
.card_header {
  position: relative;
  display: grid;
  grid-template-rows: 140px 30px;
  justify-items: center;
  transition: 0.3s;
  border-radius: 50%;
  overflow: hidden;
  padding: 20px;
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
    border: var(--green-light) 5px solid;
    img {
      position: relative;
      width: 100%;
      object-fit: contain;
      filter: hue-rotate(60deg);
    }
  }
  .fullName {
    margin: 0.5rem;
    z-index: 2;
    font-size: 30px;
    color: var(--green-light);
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
</style>
