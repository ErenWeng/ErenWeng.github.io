<template>
  <div>
    <Logo />
    <HomePage />
    <ul>
      <li>
        <Nuxt-link to="/">Home</Nuxt-link>
      </li>
      <li>
        <Nuxt-link to="/about">About</Nuxt-link>
      </li>
      <li>
        <Nuxt-link to="/project">Project</Nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
