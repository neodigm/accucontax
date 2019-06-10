<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="headline font-weight-light info white--text">
            <v-icon class="white--text" left>account_circle</v-icon>
            <span>Avatar | Selfie</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap>
    <v-flex class="field-input__grid--2" xs12 sm12 md12 justify-center>
        <v-img src="avatar.png" aspect-ratio="1" center width="260"
        position="center center" justify-center style="margin: 0 auto"/>
    </v-flex>
</v-layout>

        <v-card-actions fixed>
            <v-spacer></v-spacer>
            <v-btn icon @click="doShow()">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
Please select a picture of yourself then drag & drop the file onto the silhouette above. You can find recent pictures taken from this device in the camera roll folder.
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardAvatar',
  data() {
    return {
      show: false,
      items: ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.', 'Prof.', 'Rev.'],
    };
  },
  methods: {
      doShow(){
          this.show = !this.show;
          this.playAudioFile( (this.show) ? 2 : 1 );
      }
  }
};
</script>

<style scoped>
/* framework overrides */
.layout {
    padding: 6px !important;
}
.field-input__grid--2 .v-input {
    max-width: 99%;
    margin: 1px !important;
}
</style>
