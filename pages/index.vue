<template>
  <v-row>
    <v-col>
      <v-text-field v-model="username" label="username"> </v-text-field>
      <v-text-field v-model="password" label="password"> </v-text-field>
      <v-btn rounded @click="tryLogin">login</v-btn>
      <tweet></tweet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Tweet from '~/components/Tweet.vue'

export default Vue.extend({
  components: { Tweet },
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
