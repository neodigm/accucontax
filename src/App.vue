<template>
  <v-app>
    <Header></Header>

    <v-content>
      <v-btn>Click me</v-btn>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
