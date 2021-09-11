<template>
  <v-card class="ma-3 pa-4">
    <div class="tweetCard--userInfo my-1 mx-2">
      <span>{{ tweet.name }}</span>
      <span>
        <span class="mr-1">{{ time }}</span>
        <v-icon v-if="isDeletable" @click="deleteTweet">mdi-delete</v-icon>
      </span>
    </div>
    <v-divider></v-divider>
    <div class="mt-2 mx-2">
      {{ tweet.body }}
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Tweet from '@/types/tweet'

export default Vue.extend({
  name: 'TweetCard',
  props: {
    tweet: { type: Object as Vue.PropType<Tweet>, required: true },
  },

  computed: {
    time(): string {
      return `${this.tweet.date.getFullYear()}-${this.tweet.date.getMonth()}-${this.tweet.date.getDate()}`
    },
    isDeletable(): boolean {
      return this.tweet.userId === this.$accessor.login.id
    },
  },
  methods: {
    async deleteTweet() {
      await axios.post('api/tweet/delete', {
        id: this.tweet.id,
        userId: this.$accessor.login.id,
      })
      this.$emit('delete', this.tweet.id)
    },
  },
})
</script>

<style lang="scss" scoped>
.tweetCard--userInfo {
  display: flex;
  justify-content: space-between;
}
</style>
