<template>
  <div class="container">
    <div>
      <h1>Rise Up 3</h1>
      <p>
        RISE UP est une association dédiée à la création de
        <span class="bold">comédie musicale</span>
        inter-écoles & universités parisiennes. Le projet rassemble
        <span class="bold"> des étudiants de tous horizons </span> (école de
        commerce, d'ingénieur, de cinéma, ...) et des
        <span class="bold">jeunes actifs passionnés</span>
        par le monde de la comédie musicale.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="postcss" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.bold {
  @apply text-teal font-bold;
}
</style>
