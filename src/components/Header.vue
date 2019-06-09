<template>
    <v-toolbar app dark>
      <v-toolbar-title class="headline">
        <h1 class="display-1">
        <span class="font-weight-light">Accu</span>
        <span class="orange--text font-weight-light">Contax</span>
        </h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small color="orange"
        href="https://github.com/neodigm/accucontax"
        @click.prevent="sound()">
        <v-icon>code</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      message: ""
    }),
    methods: {
      sound: () => {
        console.log("DDDDDDDDDDDDDDDDUUUUUUUUUUUCCCCCCCCCCCCCKKKKKKKKKKKKK");
      }
    }
  }
</script>

<style>

</style>
