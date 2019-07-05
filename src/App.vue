<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
    <footerNav></footerNav>
  </div>
</template>

<script>
  import headerNav from './components/header-nav'
  import footerNav from './components/footer-nav'

  export default {
    name: 'App',
    components: {
      headerNav,
      footerNav
    }
  }
</script>

<style>

</style>
