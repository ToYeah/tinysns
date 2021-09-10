<template>
  <v-row>
    <v-col>
      <tweet-form></tweet-form>
      <tweet></tweet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Tweet from '~/components/Tweet.vue'
import TweetForm from '~/components/TweetForm.vue'

export default Vue.extend({
  components: { Tweet, TweetForm },
  middleware({ store, redirect }) {
    if (!store.state.login.id) redirect('/login')
  },
})
</script>
