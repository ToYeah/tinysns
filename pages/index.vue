<template>
  <v-row>
    <v-col>
      <v-text-field v-model="username" label="username"> </v-text-field>
      <v-text-field v-model="password" label="password"> </v-text-field>
      <v-btn rounded @click="tryLogin">login</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async tryLogin() {
      const res = await axios.post('api/login', {
        username: this.username,
        password: this.password,
      })
      this.$accessor.login.setid(Number(res.data.id))
    },
  },
})
</script>
