<template>
  <v-row>
    <v-col>
      <v-card class="pa-4 ma-3">
        <v-textarea v-model="body" label="tweet body"></v-textarea>
        <v-btn rounded @click="addTweet">send</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Tweet from '@/types/tweet'

export default Vue.extend({
  name: 'TweetForm',
  data() {
    return {
      body: '',
      tweets: [] as Tweet[],
    }
  },
  methods: {
    async addTweet() {
      const now = Date.now().toString()
      await axios.post('api/tweet/add', {
        tweet: {
          body: this.body,
          userId: this.$accessor.login.id,
          timestamp: `${now.slice(0, 10)}.${now.slice(10)}`,
        },
      })
    },
  },
})
</script>
