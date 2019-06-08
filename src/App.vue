<template>
  <v-app>
    <Header></Header>
    <v-content>
      <HelloWorld/>
      <v-btn>Click me</v-btn>
    </v-content>
    <v-footer
      dark
      height="auto"
      fixed
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
  
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 — Scott C. Krause
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
