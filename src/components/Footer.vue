<template>

    <v-footer app fixed dark class="secondary" height="74px">
      <v-card class="flex" flat tile>
        <v-card-actions class="secondary justify-center">

            <v-btn class="primary">
                <v-icon left>supervisor_account</v-icon>
                <span>Create Contact</span>
            </v-btn>

        </v-card-actions>
      </v-card>
    </v-footer>

</template>

<script>
export default {
  data: () => ({
    message: '',
  }),
};
</script>

<style>

</style>
