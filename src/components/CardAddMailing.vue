<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="headline font-weight-light info white--text">
            <v-icon class="white--text" left>markunread_mailbox</v-icon>
            <span>Mailing Address</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap>
    <v-flex xs12 sm12 md12>
        <v-text-field
        label="* Street Address" hint="Building Number and Street Name"
        box
        ></v-text-field>
    </v-flex>

    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field
        label="* City"
        box
        ></v-text-field>
    </v-flex>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-select
            :items="usStates"
            label="State"
            box
          ></v-select>
    </v-flex>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field
        label="* Zip-code"
        box
        ></v-text-field>
    </v-flex>

</v-layout>

        <v-card-actions fixed>
            <v-btn small class="info">Same as Billing</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="doShow()">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
                Please enter your mailing address. This is the address of your home of where you receive your mail. Enter the building number and street name on the first line. All fields are required. See our privacy policy for questions about how we use this information.
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardAddBilling',
  data() {
    return {
      show: false,
      items: ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.', 'Prof.', 'Rev.'],
    };
  },
  computed: {
    usStates() {
      return this.$store.state.usStates;
    },
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
