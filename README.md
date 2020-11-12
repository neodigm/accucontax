[![License: BSD](https://badgen.net/badge/license/BSD/orange)](https://opensource.org/licenses/BSD-3-Clause)
---
AccuLynx Contact Landing Page

Open [AccuContax](https://neodigm.github.io/accucontax/dist/) in your browser.

A Vue.js and Material Design ⚡ SPA

<p align="center">
  <a target="_blank" href="https://neodigm.github.io/accucontax/dist/">
  <img src="https://neodigm.github.io/accucontax/vuetify_material_scott_krause.webp" title="Vue.js and Material Design">
  </a>
</p>

```javascript
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CardAvatar from './components/CardAvatar.vue';
import CardName from './components/CardName.vue';
import CardAddBilling from './components/CardAddBilling.vue';
import CardAddMailing from './components/CardAddMailing.vue';
import CardEmail from './components/CardEmail.vue';
import CardPhone from './components/CardPhone.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CardAvatar,
    CardName,
    CardAddBilling,
    CardAddMailing,
    CardEmail,
    CardPhone,
  },
  data() {
    return {};
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
      this.playAudioFile(this.playSound);
    },
  },
  methods: {
    setSound() {
      this.$store.commit('setSound', 4);
    },
  },
};
</script>
```

#
[Portfolio Blog](https://www.theScottKrause.com) |
[🚀 Résumé](https://thescottkrause.com/Arcanus_Scott_C_Krause_2020.pdf) |
[NPM](https://www.npmjs.com/~neodigm) |
[Github](https://github.com/neodigm) |
[LinkedIn](https://www.linkedin.com/in/neodigm24/) |
[Gists](https://gist.github.com/neodigm?direction=asc&sort=created) |
[Salesforce](https://trailblazer.me/id/skrause) |
[Code Pen](https://codepen.io/neodigm24) |
[Machvive](https://machvive.com/) |
[Arcanus 55](https://www.arcanus55.com/) |
[Repl](https://repl.it/@neodigm) |
[Twitter](https://twitter.com/neodigm24) |
[Keybase](https://keybase.io/neodigm) |
[Docker](https://hub.docker.com/u/neodigm) |
[W3C](https://www.w3.org/users/123844)
#


<p align="center">
  <a target="_blank" href="https://thescottkrause.com/d3_datavis_skills.html">
  <img src="https://repository-images.githubusercontent.com/178555357/2b6ad880-7aa0-11ea-8dde-63e70187e3e9" title="D3js Skills with Audio">
  </a>
</p>
