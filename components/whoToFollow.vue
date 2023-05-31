<script setup lang="ts">
import { ref } from "vue"

const whoToFollow = ref([
    {
        username: "@michellead",
        name: "Micheal Adisa",
        isVerified: true
    },
    {
        username: "@ogbeniore",
        name: "Oreoluwa",
        isVerified: false
    },
    {
        username: "@_iamtope",
        name: "Agbà Cook",
        isVerified: false
    }
])
</script>

<template>
  <div class="bg-grey-2 mt-4 p-4 rounded-3xl flex flex-col gap-8">
    <h1>Who to follow</h1>
    <div v-for="(follow, index) in whoToFollow" :key="index" class="flex items-center justify-between">
        <div class="flex gap-2">
            <div class="w-11 h-11">
                <img class="rounded-full w-full" src="~/assets/images/twitter-profile-photo.jpeg" alt="Micheal Adisa">
            </div>
            <div>
                <p class="font-normal flex items-center gap-2">
                    <span>{{ follow.name }}</span>
                    <span v-if="follow.isVerified">
                        <img src="~/assets/images/Verified.svg" alt="" class="w-4">
                    </span>
                </p>
                <p class="text-grey text-md font-light">{{  follow.username  }}</p>
            </div>
        </div>
        <button type="submit">Follow</button>
    </div>
  </div>
</template>


<style>

</style>