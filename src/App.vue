<template>
  <v-app>
    <Header />

    <v-content>
   <v-container class="fluid">
     <form autocomplete="off" novalidate="novalidate">
      <v-layout justify-center row fill-height wrap my-2>
        <v-flex xs12 sm12 md6>
          <CardAvatar />
        </v-flex>
        <v-flex xs12 sm12 md6>
          <CardName />
        </v-flex>
      </v-layout>
      <v-layout justify-center row fill-height wrap my-2>
        <v-flex xs12 sm12 md6>
          <CardAvatar />
        </v-flex>
        <v-flex xs12 sm12 md6>
          <CardAvatar />
        </v-flex>
      </v-layout>
      <v-layout justify-center row fill-height wrap my-2>
        <v-flex xs12 sm12 md6>
          <CardAddBilling />
        </v-flex>
        <v-flex xs12 sm12 md6>
          <CardAvatar />
        </v-flex>
      </v-layout>
     </form>
   </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CardAvatar from './components/CardAvatar.vue';
import CardName from './components/CardName.vue';
import CardAddBilling from './components/CardAddBilling.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CardAvatar,
    CardName,
    CardAddBilling,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    appFields() {
      return this.$store.state.appFields;
    },
    playSound() {
      return this.$store.state.playSound;
    },
  },
  watch: {
    playSound() {
      this.playAudioFile( this.playSound );
    }
  },
  methods: {
    setSound(){
      this.$store.commit("setSound", 3);
    }
  }
};
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
