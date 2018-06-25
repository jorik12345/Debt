<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <figure class="logo"><img src="./assets/logo.svg"></figure>
          <router-view></router-view>
        </v-container>
      </v-content>
      <navbar></navbar>
    </v-app>
  </div>
</template>

<script>
import Navbar from './views/Navigation.vue'

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
      msg: 'Does a Lanister always pays it debts?'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  max-width: 400px;
  margin: 24px auto;
  padding: 0 24px;
}

.navbar {
  margin-bottom: 24px;
}
</style>
