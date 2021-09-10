<template>
  <v-row>
    <v-col>
      <tweet></tweet>
      <tweet-form></tweet-form>
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
