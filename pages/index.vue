<script setup lang="ts">
import feeds from '~/assets/json/feeds.json'
import { ref, onMounted } from 'vue'
definePageMeta({
  layout: "default",
});

const tweets = ref(feeds)
const dayo = ref("dayo")

onMounted(() => {
  console.log('dayo =>>>>>',dayo);
})
</script>

<template>
  <div class="bg-scroll">
    <div class="header flex align-center justify-between p-5">
      <h1 class="text-xl">Home</h1>
      <img src="~/assets/images/Timeline-Prop.svg" alt="timeline">
    </div>
    <div class="tweet-card p-5">
      <div class="flex gap-5">
        <div class="prof-picture">
          <img class="w-12 h-12 rounded-full" src="~/assets/images/twitter-profile-photo.jpeg" alt="Micheal Adisa">
        </div>
        <textarea class="border-none tweet-box w-full bg-transparent focus:outline-none max-h-10 placeholder:text-slate-700 placeholder:text-xl p-2" placeholder="What's Happening" name="" id="" cols="30" rows="10"></textarea>
        <!-- <span class="textarea max-w-md border-none bg-transparent w-full focus:outline-none max-h-10 placeholder:text-slate-700 placeholder:text-xl" placeholder="What's Happening" role="textbox" contenteditable></span> -->
      </div>
      <div class="flex justify-between ml-20">
        <div class="actions flex items-center gap-3">
          <img class="cursor-pointer" src="~/assets/images/media-blue.svg" alt="">
          <img class="cursor-pointer" src="~/assets/images/gif-blue.svg" alt="">
          <img class="cursor-pointer" src="~/assets/images/poll-blue.svg" alt="">
          <img class="cursor-pointer" src="~/assets/images/emoji-blue.svg" alt="">
          <img class="cursor-pointer" src="~/assets/images/schedule-blue.svg" alt="">
        </div>
        <button class="rounded-full py-2 mt- w-20 tweet-button">Tweet</button>
      </div>
    </div>
    <div>
      <div v-for="(tweet, index) in tweets" :key="index">
        <Tweets 
          :isVerified="tweet.isVerified"
          :username="tweet.username"
          :name="tweet.name"
          :date-of-tweet="tweet.dateOfTweet"
          :profile-picture="tweet.profilePicture"
          :comment-count="tweet.commentCount"
          :retweet-count="tweet.retweetCount"
          :like-count="tweet.likeCount"
          :tweet="tweet.tweet"
          :tweet-images="tweet.tweetImages"
        />
      </div>
    </div>
  </div>
</template>


<style>
.tweet-button {
  background: #1e9bf0;
  color: #fff;
}
.tweet-card {
  border-top: 1px solid #6e767d;
}
.tweet-box {
  resize: none;
}
</style>