<template>
    <v-card light tile hover color="mx-3 grey lighten-4">
        <v-card-title class="headline font-weight-light info white--text">
            <v-icon class="white--text" left>account_circle</v-icon>
            <span>Avatar | Selfie</span>
        </v-card-title>

<v-layout justify-center row fill-height wrap>
    <v-flex xs12 sm12 md6>
        <v-text-field
        label="First Name"
        box length="99px"
        ></v-text-field>
    </v-flex>
    <v-flex xs12 sm12 md6>
        <v-text-field
        label="Last Name"
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
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
            <v-card-text v-show="show">
QQQQQQQQQQQQ
            </v-card-text>
        </v-slide-y-transition>
    </v-card>
</template>

<script>

export default {
  name: 'CardAvatar',
  data () {
    return {
        show: false
    }
  }
}
</script>

<style scoped>
.v-layout {
    padding: 8px;
}
.v-input__control {
    margin: 1px !important;
}
</style>