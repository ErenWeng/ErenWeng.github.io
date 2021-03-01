<template>
  <div class="error">
    <div class="error_content">
      <div v-if="error.statusCode === 404">
        <p class="error404">404</p>
        <p class="title">Error: Page Not Found</p>
        <ul class="error_txt">
          <li class="first_txt">Why am I seeing this?</li>
          <li class="txt">The page was moved</li>
          <li class="txt">The page no longer exists</li>
          <li class="txt">You were looking for your kittens and got lost</li>
          <li class="txt">You like 404 pages</li>
        </ul>
      </div>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="back_home">
        <div class="txt">back to Home page</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  position: relative;
  display: grid;
  place-content: center;
}
.error_content {
  max-width: 400px;
  display: grid;
  place-content: center;
  text-align: center;
  .error404 {
    font-size: 80px;
    color: $green-dark;
    font-weight: 300;
  }
  .title {
    color: $green-dark;
    font-size: 20px;
    font-weight: 400;
    padding: 8px 0;
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .error_txt {
    text-align: left;
    padding: 16px 0;
    margin-bottom: 36px;
    margin-left: 20px;
    line-height: 1.6;
    .first_txt {
      color: $green-dark;
      opacity: 0.7;
      font-size: 14px;
      font-weight: 400;
      margin-left: -16px;
      margin-bottom: 8px;
    }
    .txt {
      list-style-type: '- ';
      color: $green-dark;
      opacity: 0.7;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .back_home {
    justify-self: center;
    display: grid;
    place-items: center;
    height: 36px;
    margin-top: 40px;
    transition: 0.2s;
    width: 160px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      margin: auto;
      border-bottom: 1px solid $green-dark;
      transform: scaleX(0.1);
      transition: 0.4s ease-out;
    }
    .txt {
      color: $green-dark;
      font-size: 14px;
      font-weight: 400;
      transition: 0.2s;
    }
    &:hover {
      color: $green-light;
      &::after {
        border-bottom: 1px solid $green-light;
        transform: scaleX(1);
      }
      .txt {
        color: $green-light;
      }
    }
  }
}
</style>
