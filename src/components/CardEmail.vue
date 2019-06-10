<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="title font-weight-light info white--text">
            <v-icon class="white--text" left>email</v-icon>
            <span>Email Addresses</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap
v-for="(item, idx) in aItems" :key="idx"
 :class="{ delete: item.delete }">
    <v-flex xs12 sm12 md9>
        <v-text-field class="field-input__grid--2"
        label="* EMail Address" hint="Enter a valid email address"
        box
        ></v-text-field>
    </v-flex>
    <v-flex xs12 sm12 md3>
        <v-btn small left :class="{ primary: item.primary }"
        @click="doPrimary( item )">Primary</v-btn>
        <v-btn small left fab class="red--text"
        @click="doDelete( item )">
            <v-icon>delete_forever</v-icon>            
        </v-btn>
    </v-flex>
</v-layout>

        <v-card-actions fixed>
            <v-btn small class="info"
            @click="doAddAnother()">Add Another</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="doShow()">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
                Enter one or more email addresses. Please indicate which email is your preference or primary. Click [ Add Another ] to create an additional email address.
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardEmail',
  data() {
    return {
        show: false,
        aItems: [
            {item:"", primary:true, delete:false},
            {item:"", primary:false, delete:false},
        ],
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
        doAddAnother(){
            this.playAudioFile( 4 );
            this.aItems.push( {item:"", primary:false, delete:false} );
        },
        doShow() {
            this.show = !this.show;
            this.playAudioFile((this.show) ? 2 : 1);
        },
        doPrimary( oItem ){
            this.playAudioFile( 4 );
            this.aItems.map(function( it ){ it.primary = false; });
            oItem.primary = true;
        },
        doDelete( oItem ){
            this.playAudioFile( 4 );
            oItem.delete = true;
        }
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
.delete { display:none; }
</style>
