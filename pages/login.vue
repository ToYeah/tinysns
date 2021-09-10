<template>
  <div>
    <v-text-field v-model="username" label="username"></v-text-field>
    <v-text-field v-model="password" label="password"></v-text-field>
    <v-btn rounded @click="tryLogin">login</v-btn>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
export default Vue.extend({
  components: {},
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
      this.$router.push('/')
    },
  },
})
</script>
