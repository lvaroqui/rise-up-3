<template>
  <div>
    <div class="first text-navy-blue">
      <div class="container">
        <div>
          <img class="mx-auto" src="~/assets/svg/Logo.svg" width="800" />
          <h1 class="text-2xl sm:text-4xl">Abordage imminent . . .</h1>
        </div>
        <Arrow class="arrow" />
      </div>
    </div>
    <div class="bg-navy-blue">
      <div class="container pt-6 pb-12">
        <div class="text-blue mx-4">
          <h1 class="p-4">Rise Up : Qui sommes-nous ?</h1>
          <p>
            RISE UP est une association dédiée à la création de
            <span class="bold">comédie musicale</span>
            inter-écoles & universités parisiennes. Le projet rassemble
            <span class="bold"> des étudiants de tous horizons </span> (école de
            commerce, d'ingénieur, de cinéma, ...) et des
            <span class="bold">jeunes actifs passionnés</span>
            par le monde de la comédie musicale.
          </p>
          <img
            src="~/assets/img/team.jpg"
            class="max-w-full lg:max-w-4xl mx-auto m-4 shadow-xl"
          />
          <h2 class="p-4">Une équipe organisée</h2>
          <h3 class="pb-2">Troupe</h3>
          <p>
            On y compte les solistes, les
            <span class="bold">instrumentistes</span>, les
            <span class="bold">choristes</span> et les
            <span class="bold">danseurs</span>. Ce sont eux qui incarnent le
            spectacle et que vous verrez sur scène.
          </p>
          <h3 class="p-2">Direction Artistique</h3>
          <p>
            On leur doit la <span class="bold">création</span> et la
            <span class="bold">réalisation</span>. Non seulement ils ont tout
            créé, mais en plus ils
            <span class="bold">dirigent la troupe</span> et lui permettent
            d'exprimer tout son potentiel.
          </p>
          <h3 class="p-2">Organisation</h3>
          <p>
            Le <span class="bold">bureau</span>, la
            <span class="bold">communication</span>, la
            <span class="bold">logistique</span>, les
            <span class="bold">sponsors</span>. L'équipe de l'ombre qui s'occupe
            du "pourquoi" et du "comment".
          </p>
          <h3 class="p-2">Direction Technique</h3>
          <p>
            C'est simple, <span class="bold">sans eux</span>,
            <span class="bold">pas de spectacle</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Arrow from '~/assets/svg/Arrow.svg?inline'

export default Vue.extend({
  components: { Arrow },
})
</script>

<style lang="postcss" scoped>
.first {
  @apply bg-gradient-to-tr from-blue to-white;
}

.container {
  @apply min-h-screen flex justify-center text-center mx-auto;
}

.bold {
  @apply text-coral font-bold;
}

.arrow {
  position: absolute;
  bottom: 2em;
  animation: bounce 1s alternate infinite;
  @apply fill-current;
}

@keyframes bounce {
  from {
    transform: translateY(0) rotate(0.1deg);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
