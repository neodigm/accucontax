[![License: BSD](https://badgen.net/badge/license/BSD/orange)](https://opensource.org/licenses/BSD-3-Clause)
---
AccuLynx Contact Landing Page with Audio

Open [AccuContax](https://neodigm.github.io/accucontax/dist/) in your browser.

A sample Vue.js and Material Design ⚡ SPA with immersive sound provided by the Web Audio API.

Utilizing the observable power of Vue.js and the fluid [Vuetify](https://vuetifyjs.com/en/introduction/roadmap/) Material Design system a user can easily manage multiple addresses, unlimited phone numbers, and prioritize email addresses.

Quality is assured with integrated Cypress end to end testing.

<p align="center">
  <a target="_blank" href="https://neodigm.github.io/accucontax/dist/">
  <img src="https://neodigm.github.io/accucontax/vuetify_material_scott_krause.webp" title="Vue.js and Material Design">
  </a>
</p>

<details>
    <summary>What is Vuetify?</summary>
Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. Unlike other frameworks, Vuetify is designed from the ground up to be easy to learn and rewarding to master with hundreds of carefully crafted components from the Material Design specification.
</details>

<details>
    <summary>What is Cypress end 2 end testing?</summary>
The Cypress architectural improvements unlock the ability to do TDD with full end-to-end tests for the very first time. Cypress has been built so that testing and development can happen simultaneously. You can develop faster while driving the entire dev process with tests because: you can see your application; you still have access to the developer tools; and changes are reflected in real time. The end result is that you will have developed more, your code will be better, and it will be completely tested. If you opt for our , parallelization and automated load balancing will further supercharge your test speeds.
</details>

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
