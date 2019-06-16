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
          href="https://github.com/neodigm/accucontax" target="_blank"
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
        <v-list>
          <v-list-tile v-for=" link in links" :key="link.text"
          @click="doLaunch( link.route )">
            <v-list-tile-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text subheading">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: 'launch', text: 'Scott C. Krause', route: 'https://www.theScottKrause.com/' },
      { icon: 'code', text: 'Other Vue.js', route: 'https://neodigm.github.io/vue_voyagers/' },
      { icon: 'accessible', text: 'On Accessibility', route: 'https://www.linkedin.com/pulse/accessibility-ecommerce-scott-krause/' },
      { icon: 'album', text: 'Gists (Code)', route: 'https://gist.github.com/neodigm' },
      
    ],
  }),
  methods: {
    getGit() {
      this.$store.commit('setSound', 5);
      setTimeout(() => {
        window.location.href = 'https://github.com/neodigm/accucontax';
      }, 2000);
    },
    doDrawer() {
      this.drawer = !this.drawer;
      this.$store.commit('setSound', ((this.drawer) ? 6 : 2));
    },
    doLaunch(sURL) {
      this.$store.commit('setSound', 4);
      setTimeout(() => {
        window.location.href = sURL;
      }, 2000);
    },
  },
};
</script>

<style>

</style>
