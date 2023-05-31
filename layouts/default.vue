<template>
  <div>
    <div class="mobile">
      Mobile screen - WIP
    </div>
    <div class="container mx-auto grid grid-cols-6">
      <div>
        <Navigation />
      </div>
      <div class="content-container flex">
        <div class="content-container-body h-full">
            <slot />
        </div>
        <div class="content-container-right p-5">
            <Trends />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mobile {
  display: none;
}
.container {
  max-width: 1229px;
  display: grid;
}
.content-container {
  width: 990px;
  /* position: absolute;
  right: 0; */
}
.content-container-body {
  max-width: 605px;
  border-left: 1px solid #6e767d;
  border-right: 1px solid #6e767d;
}
.content-container-right {
  position: relative;
  width: 350px;
}
@media screen and (max-width: 768px) {
  .mobile {
    display: block;
    color: #ffffff;
    padding: 30px;
  }
  .container {
    display: none;
  }
  .content-container {
    display: none;
  }
}
</style>