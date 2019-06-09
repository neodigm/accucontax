<template>
  <v-app>
    <Header></Header>

    <v-content>


   <v-container class="fluid">
    <v-layout justify-center row fill-height wrap>

      <v-flex xs12 sm12 md6>
        <CardAvatar></CardAvatar>
      </v-flex>
      <v-flex xs12 sm12 md6>

        <v-card light tile hover color="mx-3 grey lighten-4" min-height="256px">
          <v-card-title class="info white--text">
            <v-icon left>account_circle</v-icon>
            <span>Avatar | Selfie</span>
          </v-card-title>
          <v-card-text>#a</v-card-text>
          <v-btn class="primary" >Click me</v-btn>
        </v-card>
      </v-flex>

    </v-layout>
   </v-container>

      <v-btn class="primary" >Click me</v-btn>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import CardAvatar from './components/CardAvatar'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CardAvatar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  body::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  body::-webkit-scrollbar-track {
    background: rgba(112, 111, 112, .2);
  }
  body::-webkit-scrollbar-thumb {
    background: #1c4a6c;
  }
.v-card--hover {cursor: default;}
</style>