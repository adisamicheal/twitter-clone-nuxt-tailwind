<script setup lang="ts">
const props = defineProps({
    isVerified: Boolean,
    username: String,
    name: String,
    dateOfTweet: String,
    profilePicture: String,
    commentCount: String,
    retweetCount: String,
    likeCount: String,
    tweet: String,
    tweetImages: Array
})
</script>
<template>
  <div class="tweet flex gap-3 p-5 cursor-pointer">
    <div class="tweet-left w-11 h-11 flex-none">
      <!-- <img :src="`~/assets/images/${profilePicture}`" alt="profile picture"> -->
      <img class="rounded-full w-full" src="~/assets/images/twitter-profile-photo.jpeg" alt="Micheal Adisa">
    </div>
    <div class="tweet-right flex-1">
        <div class="tweet-right__user flex items-center gap-1">
            <span class="font-bold">{{ name }}</span>
            <span v-if="isVerified">
                <img src="~/assets/images/Verified.svg" alt="verified">
            </span>
            <span>.</span>
            <span class="text-grey text-base">{{ username }}</span>
            <span class="text-grey text-base">{{  dateOfTweet }}</span>
        </div>
        <p  class="mt-2 text-base" v-html="tweet" />
        <div class="tweet-right__actions flex items-center gap-20 mt-5">
            <div class="comment w-11 flex items-center gap-4">
                <img src="~/assets/images/Reply.svg" alt="reply">
                <span class="text-grey text-sm">{{ commentCount }}</span>
            </div>
            <div class="retweet w-11 flex items-center gap-4">
                <img src="~/assets/images/Retweet.svg" alt="retweet">
                <span class="text-grey text-sm">{{ retweetCount }}</span>
            </div>
            <div class="react w-11 flex items-center gap-4">
                <img src="~/assets/images/React.svg" alt="react">
                <span class="text-grey text-sm">{{ likeCount }}</span>
            </div>
            <div class="share w-11 flex items-center gap-4">
                <img src="~/assets/images/Share.svg" alt="share">
            </div>
        </div>
    </div>
  </div>
</template>


<style>
.tweet {
    border-top: 1px solid #6e767d;
}
</style>