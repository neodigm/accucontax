<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="title font-weight-light info white--text">
            <v-icon class="white--text" left>markunread_mailbox</v-icon>
            <span>Mailing Address</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap>
    <v-flex xs12 sm12 md12>
        <v-text-field v-model="appFields[ STREET_ADDRESS ].value"
        label="* Street Address" hint="Building Number and Street Name"
        box
        ></v-text-field>
    </v-flex>

    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field v-model="appFields[ CITY ].value"
        label="* City"
        box
        ></v-text-field>
    </v-flex>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-select  v-model="appFields[ STATE ].value"
            :items="usStates"
            label="* State"
            box
          ></v-select>
    </v-flex>
    <v-flex class="field-input__grid--2" xs12 sm12 md4>
        <v-text-field v-model="appFields[ ZIP_CODE ].value"
        label="* Zip-code"
        box
        ></v-text-field>
    </v-flex>

</v-layout>

        <v-card-actions fixed>
            <v-btn small class="info"
            @click="doCopyAdd()">Same as Billing</v-btn>
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
        STREET_ADDRESS : 10, CITY: 11, STATE: 12, ZIP_CODE: 13,        
        show: false,
        items: ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Ms.', 'Prof.', 'Rev.'],
    };
  },
  computed: {
    appFields() {
      return this.$store.state.appFields;
    },
    usStates() {
      return this.$store.state.usStates;
    },
  },
  methods: {
        doCopyAdd(){
            this.playAudioFile( 4 );
            for( var i=14; i <= 17; i++){
                if( this.appFields[ i ].value ){
                    this.appFields[ (i-4) ].value = this.appFields[ i ].value; 
                }
            }
        },
        doShow() {
            this.show = !this.show;
            this.playAudioFile((this.show) ? 2 : 1);
        },
  },
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
