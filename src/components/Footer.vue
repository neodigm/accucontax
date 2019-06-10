<template>

    <v-footer app fixed dark class="secondary" height="74px">
      <v-card class="flex" flat tile>
        <v-card-actions class="secondary justify-center">

            <v-btn class="primary"
             @click="doSnack()">
                <v-icon left>supervisor_account</v-icon>
                <span>Create Contact</span>
            </v-btn>

        </v-card-actions>
      </v-card>
<v-snackbar
v-model="snackbar"
:timeout="timeout"
:top="true"
:vertical="true"
>
{{ text }}
<v-btn
    color="primary"
    flat
    @click="snackbar = false"
>
    Close
</v-btn>
</v-snackbar>
    </v-footer>

</template>

<script>
export default {
  data: () => ({
    message: '',
    snackbar: false,
    y: 'top',
    x: null,
    mode: '',
    timeout: 5600,
    text: 'Please enter all required information.',
  }),
  methods: {
    doSnack() {
      this.snackbar = !this.snackbar;
      this.playAudioFile(3);
    },
  },
};
</script>

<style>

</style>
