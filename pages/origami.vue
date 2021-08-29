<template>
  <div class="bg-navy-blue min-h-screen px-4">
    <div class="flex flex-col min-h-screen">
      <div class="mt-16">
        <h1 class="text-white text-center">
          Transformez votre flyer en bateau
        </h1>
      </div>
      <div class="my-10">
        <div class="max-w-4xl mx-auto">
          <div class="wrapper">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/QyZK3Q_Xqkw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <nuxt-link to="/" tag="h1" class="text-white text-center cursor-pointer hover:underline">
          Découvrir le spéctacle
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
