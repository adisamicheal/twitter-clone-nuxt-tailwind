<script setup>
import { ref } from "vue"

const trends = ref([
    {
        location: 'NIgeria',
        trend: "#NigeriaDecides2023",
        twwetsCount: "14k Tweets"
    },
    {
        location: 'Canada',
        trend: "#NoPlaceLike Home",
        twwetsCount: "2445 Tweets"
    },
    {
        location: 'United States',
        trend: "#WhoDoYouLikeThis",
        twwetsCount: "2445 Tweets"
    },
    {
        location: 'Germany',
        trend: "#AraAgbalaBerlin",
        twwetsCount: "3275 Tweets"
    }
])
</script>

<template>
  <div class="trends">
    <div class="absolute w-full trends-search bg-grey-2 flex align-center p-4 rounded-3xl fixed">
        <div>
            <img src="~/assets/images/Search.svg" alt="search icon">
        </div>
        <input type="text" class="bg-transparent placeholder:text-grey focus:outline-none px-2 ml-3" placeholder="Search Twitter">
    </div>
    <div class="absolute w-full mt-12">
        <div class="trends-list bg-grey-2 mt-4 p-4 rounded-3xl flex flex-col gap-5 mt-10">
            <div class="trends-list__heading flex items-center justify-between">
                <h1 class="font-bold">Trends for you</h1>
                <img src="~/assets/images/Settings.svg" alt="settings icon">
            </div>
            <div v-for="(trend, index) in trends" :key="index" class="flex justify-between cursor-pointer items-start">
                <div class="flex flex-col gap-2">
                    <p class="text-grey text-md">Trending in {{ trend.location }}</p>
                    <h1 class="font-bold">{{ trend.trend }}</h1>
                    <p class="text-grey text-md">{{  trend.twwetsCount }}</p>
                </div>
                <img src="~/assets/images/more-2.svg" alt="">
            </div>
        </div>
        <WhoToFollow />
    </div>
  </div>
</template>

<style>

</style>