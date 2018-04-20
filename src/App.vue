<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>
</style>
