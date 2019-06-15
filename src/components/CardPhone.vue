<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="title font-weight-light info white--text">
            <v-icon class="white--text" left>phone</v-icon>
            <span>Phone Numbers</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap
v-for="(item, idx) in aItems" :key="idx"
 :class="{ delete: item.delete }">
    <v-flex xs12 sm5 md5>
        <v-text-field class="field-input__grid--2" mask="phone"
        label="* Phone Number" hint="Enter a valid phone number"
        box
        v-model="item.item"
        ></v-text-field>
    </v-flex>
    <v-flex class="field-input__grid--2" xs6 sm4 md4>
        <v-select
            :items="types"
            label="Salutation"
            box
            ></v-select>
    </v-flex>
    <v-flex xs6 sm3 md3>
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
                Enter one or more phone number. Please indicate which number is your preference or primary. Click [ Add Another ] to create an additional phone numbers. See our privacy policy for questions about how we use this information.
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardPhone',
  data() {
    return {
        show: false,
        aItems: [
            {item:"", primary:true, delete:false},
            {item:"", primary:false, delete:false},
        ],
        types: [
            "Work", "Mobile", "Home"
        ]
    };
  },
  computed: {
    appFields() {
      return this.$store.state.appFields;
    }
  },
  methods: {
        doAddAnother(){
            this.playAudioFile( 5 );
            this.aItems.push( {item:"", primary:false, delete:false} );
        },
        doShow() {
            this.show = !this.show;
            this.playAudioFile((this.show) ? 2 : 1);
        },
        doPrimary( oItem ){
            this.playAudioFile( 6 );
            this.aItems.map(function( it ){ it.primary = false; });
            oItem.primary = true;
        },
        doDelete( oItem ){
            this.playAudioFile( 7 );
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
