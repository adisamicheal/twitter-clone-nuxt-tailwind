<script setup lang="ts">

</script>
<template>
  <aside class="fixed pr-20 pb-8 mt-2 flex flex-col justify-between min-h-screen">
    <div>
        <div class="logo hover:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer p-2">
            <img class="w-full" src="~/assets/images/twitter.svg" alt="twitter logo">
        </div>
        <nav class="mt-7">
            <ul class="flex flex-col gap-5">
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/">
                        <img class="" src="~/assets/images/home.svg" alt="twitter logo">
                        <div class="text-xl">Home</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/explore">
                        <img class="" src="~/assets/images/explore.svg" alt="twitter logo">
                        <div class="text-xl">Explore</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/notifications">
                        <img class="" src="~/assets/images/notifications.svg" alt="twitter logo">
                        <div class="text-xl">Notifications</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/">
                        <img class="" src="~/assets/images/messages.svg" alt="twitter logo">
                        <div class="text-xl">Messages</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/">
                        <img class="" src="~/assets/images/bookmarks.svg" alt="twitter logo">
                        <div class="text-xl">Bookmarks</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/">
                        <img class="" src="~/assets/images/profile.svg" alt="twitter logo">
                        <div class="text-xl">Profile</div>
                    </NuxtLink>
                </li>
                <li class="hover:bg-gray-900 rounded-full cursor-pointer p-2">
                    <NuxtLink class="flex gap-5 items-center" to="/">
                        <img class="" src="~/assets/images/more.svg" alt="twitter logo">
                        <div class="text-xl">More</div>
                    </NuxtLink>
                </li>
            </ul>
            <button class="rounded-full py-3 mt-7 tweet-button">Tweet</button>
        </nav>
    </div>
    <div class="user flex space-x-4">
        <div class="flex cursor-pointer">
            <img class="w-11 h-11 rounded-full" src="~/assets/images/twitter-profile-photo.jpeg" alt="Micheal Adisa">
            <div class="name ml-2">
                <h4 class="text-sm">Micheal Adisa</h4>
                <p class="text-sm text-grey">@michellead</p>
            </div>
        </div>
        <img src="~/assets/images/more-2.svg" alt="more option">
    </div>
  </aside>
</template>


<style scoped>
.tweet-button {
    background: #1e9bf0;
    color: #fff;
    width: 100%;
}
</style>