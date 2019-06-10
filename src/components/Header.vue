<template>
    <div>
      <v-toolbar app dark class="secondary" height="86px">
        <v-toolbar-side-icon @click="doDrawer()" />
        <v-toolbar-title class="headline">
          <h1 class="display-1">
          <span class="font-weight-light">Accu</span>
          <span class="primary--text font-weight-light">Contax</span>
          </h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
        <v-btn fab small color="primary" dark v-on="on"
          href="https://github.com/neodigm/accucontax"
          @click.prevent="getGit()"
          aria-label="Github Repo">
          <v-icon>code</v-icon>
        </v-btn>
        </template>
        <span>Github Repo</span>
        </v-tooltip>

      </v-toolbar>

      <v-navigation-drawer app class="info"
      v-model="drawer">
        <p>test</p>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    getGit() {
      this.$store.commit("setSound", 5);
      setTimeout(function(){
        window.location.href = "https://github.com/neodigm/accucontax";
      }, 2000);
    },
    doDrawer(){
      this.drawer = !this.drawer;
      this.$store.commit("setSound", (( this.drawer ) ? 6 : 2) );
    }
  },
};
</script>

<style>

</style>
