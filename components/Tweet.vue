<template>
  <v-row>
    <v-col>
      <tweet-card v-for="tweet in tweets" :key="tweet.id" :tweet="tweet">
      </tweet-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Tweet, { parseTweet } from '@/types/tweet'

export default Vue.extend({
  name: 'TweetView',
  data() {
    return {
      index: 0,
      volume: 0,
      tweets: [] as Tweet[],
    }
  },
  async mounted() {
    const res = await axios.post('api/tweet/init')
    this.tweets = parseTweet(res)
  },
  methods: {},
})
</script>
