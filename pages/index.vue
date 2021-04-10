<template>
  <div class="main bg-navy-blue">
    <div
      class="fixed w-full md:hidden h-10 bg-navy-blue-darker text-white fill-current bg-opacity-75"
    >
      <button @click="navOpen = !navOpen">{{ navOpen }}</button>
    </div>
    <div
      class="hidden md:block text-xl fixed h-full text-center bg-navy-blue-darker text-blue bg-opacity-75 w-16"
    >
      <a
        v-for="(entry, index) in navEntries"
        :key="entry.text"
        :href="entry.href"
        :class="[index != 0 ? `translate-y-16` : '']"
        class="transform -rotate-90 origin-bottom h-16 flex justify-center flex-col w-32 transition-colors duration-300 bg-opacity-0 cursor-pointer bg-blue hover:bg-opacity-25"
      >
        <div>{{ entry.text }}</div>
      </a>
    </div>
    <div class="min-h-screen">
      <Arrow
        class="arrow animate-bounce text-white fill-current"
        width="100px"
      />
    </div>
    <div id="histoire" class="min-h-screen pt-16 pb-16 pl-0 md:pl-16">
      <div class="px-8 md:px-16 ml-0 max-w-4xl">
        <h1 class="font-serif text-sand text-4xl md:text-5xl ml-4">
          Embarquez pour nassau
        </h1>
        <p class="mt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
      <div class="bg-coral h-64 mt-16"></div>
      <div id="asso" class="px-8 md:px-16 pt-16 ml-auto mr-0 max-w-4xl">
        <h1 class="font-serif text-sand text-4xl md:text-5xl mr-4 text-right">
          L'équipe
        </h1>
        <p class="mt-4 text-white text md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Arrow from '~/assets/svg/Arrow.svg?inline'

export default Vue.extend({
  components: { Arrow },
  data() {
    return {
      navOpen: false,
      navEntries: [
        { text: "L'Histoire", href: '#histoire' },
        { text: "L'asso", href: '#asso', class: 'translate-y-16' },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.arrow {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0.5em;
}
</style>
