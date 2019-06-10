<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="headline font-weight-light info white--text">
            <v-icon class="white--text" left>face</v-icon>
            <span>Name | Company</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-select
            :items="items"
            label="Salutation"
            box
          ></v-select>
    </v-flex>

    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field
        label="* First Name"
        box
        ></v-text-field>
    </v-flex>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field
        label="* Last Name"
        box
        ></v-text-field>
    </v-flex>
    <v-flex xs12 sm12 md12>
        <v-text-field
        label="Company"
        box
        ></v-text-field>
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
Please select a salutation then enter your first name, last name, and optionally your company name. The First and Last name information is required. The salutation and company name are optional. See our privacy policy for questions about how we use this information.
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardName',
  data() {
    return {
      show: false,
      items: ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.', 'Prof.', 'Rev.'],
    };
  },
  methods: {
      doShow(){
          this.show = !this.show;
          this.playAudioFile( 1 );
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
