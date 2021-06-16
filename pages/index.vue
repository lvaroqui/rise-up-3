<template>
  <div class="bg-navy-blue">
    <!-- Nav -->
    <div class="fixed w-full md:hidden z-20">
      <div class="bg-navy-blue-darker bg-opacity-90 text-white flex z-20">
        <div
          class="py-3 ml-3 nav-burger"
          :class="{ 'nav-active': navOpen }"
          @click="navOpen = !navOpen"
        >
          <div class="nav-burger-1" />
          <div class="nav-burger-2" />
          <div class="nav-burger-3" />
        </div>
      </div>
      <div
        class="bg-white font-serif bg-opacity-90 flex flex-col transition-all duration-300 transform"
        :class="navOpen ? '' : 'opacity-0'"
      >
        <a
          v-for="entry in navEntries"
          :key="entry.name"
          :href="entry.href"
          class="ml-3 py-3 text-2xl font-bold"
          @click="navOpen = false"
        >
          {{ entry.text }}
        </a>
      </div>
    </div>
    <div
      class="hidden md:block text-xl fixed h-full text-center bg-navy-blue-darker text-blue bg-opacity-75 w-16 z-20"
    >
      <a
        v-for="(entry, index) in navEntries"
        :key="entry.text"
        :href="entry.href"
        :class="[
          index != 0 ? `mt-16` : '',
          entry.active ? 'bg-opacity-25' : 'bg-opacity-0 ',
        ]"
        class="transform -rotate-90 origin-bottom h-16 flex justify-center flex-col w-32 transition-colors duration-300 cursor-pointer bg-blue"
      >
        <div>{{ entry.text }}</div>
      </a>
    </div>
    <!-- End Nav -->

    <!-- Ticket -->
    <a
      href="https://tam.notre-billetterie.fr/billets?kld=2122&spec=1771"
      class="fixed bottom-10 right-10 bg-teal px-6 py-2 flex justify-center items-center z-30 rounded-md bg-opacity-50"
    >
      <div class="mr-4 text-2xl text-white">Billetterie</div>
      <img src="~/assets/img/ticket.png" class="w-12" />
    </a>

    <div id="home" ref="home" class="min-h-screen">
      <div class="relative w-full h-screen overflow-hidden">
        <div class="flex flex-col h-screen md:ml-16 relative z-10">
          <div class="flex-grow" />
          <div class="flex flex-row justify-center items-center flex-wrap mb-4">
            <div class="flex justify-center items-center mr-4 md:mr-6">
              <div class="text-white md:text-xl myShadow text-right">
                Une comédie musicale <br />
                originale de
              </div>
            </div>
            <img src="~/assets/img/riseup.png" class="w-32" />
          </div>
          <div class="max-w-3xl mx-auto mb-6">
            <Title class="myShadow" />
          </div>
          <div class="max-w-3xl mx-auto text-white text-center text-sh">
            <p class="text-xl md:text-3xl font-serif my-3 myShadow">
              Les 17 et 18 septembre 2021 à 20h
            </p>
            <p class="text-2xl md:text-4xl font-serif my-3 myShadow">
              Au Théatre André Malraux
            </p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="ladder opacity-0 xl:opacity-100">
          <Ladder class="h-full myShadow" />
        </div>
        <div class="rope1">
          <Rope1 class="h-full myShadow" />
        </div>
        <div class="rope2">
          <Rope2 class="h-full myShadow" />
        </div>
        <div class="rope3">
          <Rope3 class="h-full myShadow" />
        </div>
        <div class="rope4">
          <Rope4 class="h-full myShadow" />
        </div>
        <Arrow
          class="arrow animate-bounce text-white fill-current myShadow"
          width="100px"
        />
      </div>
    </div>

    <div class="min-h-screen pb-16 pl-0 md:pl-16">
      <div
        id="histoire"
        ref="histoire"
        class="pt-16 px-8 md:px-16 ml-0 max-w-4xl"
      >
        <h1 class="font-serif text-sand text-4xl md:text-5xl ml-4">
          Embarquez pour nassau
        </h1>
        <p class="mt-4 text-white">
          <span class="ml-4" />Depuis dix ans, se tient à Nassau, sur l’île de
          New Providence, une république indépendante tenue par les pirates les
          plus terrifiants des Caraïbes. L’empire Britannique, bien décidé à
          reprendre le contrôle sur ces mers, organise un blocus complet de
          l’île et propose un ultimatum aux habitants: ils ont une nuit pour
          accepter un pardon royal et rejoindre les rangs de la couronne, ou ils
          mourront le lendemain.
          <br />
          <br />
          <span class="ml-4" />Chaque pirate encore présent doit prendre
          position et très vite le chaos règne à Nassau.
          <br />
          <br />
          <span class="ml-4" />Tout juste arrivée sur place, Mary Read se
          déguise en homme pour cacher son identité et fait la rencontre d’Anne
          Bonny, une jeune pirate tout feu tout flamme. Ensemble, elles vont
          tenter de survivre et trouver leur place dans un nouveau monde alors
          que l’âge d’or de la piraterie prend fin sous leurs yeux.
        </p>
      </div>
      <div id="asso" ref="asso" class="pt-16">
        <!-- <div class="bg-coral h-64"></div> -->
        <div class="px-8 md:px-16 pt-16 ml-auto mr-0 max-w-4xl">
          <h1 class="font-serif text-sand text-4xl md:text-5xl mr-4 text-right">
            L'équipe
          </h1>
          <p class="mt-4 text-white text md:text-right">
            <span class="ml-4 md:ml-0" />Rise-Up, le réseau inter-écoles des
            spectacles étudiants des universités de Paris, rassemble des
            étudiants parisiens de tous horizons autour d’un projet artistique
            ambitieux : monter une comédie musicale entièrement originale,
            accompagnée par un orchestre symphonique.
            <br />
            <br />
            <span class="ml-4 md:ml-0" />Composition des musiques, écriture du
            script, création des chorégraphies, fabrication des décors et
            costumes, gestion de la lumière et du son… le spectacle se veut
            exploiter les nombreux talents qui se cachent parmi les étudiants.
            <br />
            <br />
            <span class="ml-4 md:ml-0" />Rise-Up a la volonté de promouvoir la
            culture au sein du milieu étudiant, mais également l’envie de créer,
            de se dépasser, d’avancer ensemble sur des projets ambitieux même en
            cette période difficile. Cette année, ce sont plus de 80 personnes
            qui font partie de ce projet et qui joueront en septembre 2021 au
            théâtre André Malraux (Rueil Malmaison).
          </p>
        </div>
      </div>
      <div id="sponsor" ref="sponsor" class="pt-16 px-8 md:px-16 ml-0 mb-48">
        <h1 class="font-serif text-sand text-4xl md:text-5xl ml-4">
          Nos sponsors
        </h1>
        <div class="flex flex-wrap justify-around items-center my-16">
          <img src="~/assets/img/tam.png" class="w-64 my-4" />
          <img src="~/assets/img/crous-de-paris.png" class="w-64 my-4" />
          <img src="~/assets/img/agroparistech.jpg" class="w-64 my-4" />
          <img src="~/assets/img/paris-saclay.png" class="w-64 my-4" />
          <img src="~/assets/img/cvec.png" class="w-64 my-4" />
        </div>
      </div>
    </div>
    <div class="pl-0 md:pl-16 mt-16 bg-navy-blue-darker text-white">
      <div class="container mx-auto text-center py-10">
        <nuxt-link class="text-2xl" to="/legal">Mentions légales</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Arrow from '~/assets/svg/Arrow.svg?inline'
import Title from '~/assets/svg/Title.svg?inline'
import Ladder from '~/assets/svg/Ladder.svg?inline'
import Rope1 from '~/assets/svg/Rope1.svg?inline'
import Rope2 from '~/assets/svg/Rope2.svg?inline'
import Rope3 from '~/assets/svg/Rope3.svg?inline'
import Rope4 from '~/assets/svg/Rope4.svg?inline'

import { debounce } from '~/utils'

export default Vue.extend({
  components: { Arrow, Title, Ladder, Rope1, Rope2, Rope3, Rope4 },
  data() {
    return {
      navOpen: false,
      navEntries: [
        { text: 'Accueil', href: '#home', active: false },
        { text: "L'Histoire", href: '#histoire', active: false },
        { text: "L'asso", href: '#asso', active: false },
        { text: 'Sponsors', href: '#sponsor', active: false },
      ],
      observer: null as IntersectionObserver | null,
    }
  },
  mounted() {
    this.observe()
    window.addEventListener(
      'resize',
      debounce(() => {
        this.observe()
      }, 500)
    )
  },
  methods: {
    observerCallback(
      entries: IntersectionObserverEntry[],
      _: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const name = entry.target.getAttribute('id')!
          this.navEntries.forEach((navEntry) => {
            navEntry.active = false
            if (navEntry.href.substring(1) === name) {
              navEntry.active = true
            }
          })
        }
      })
    },
    observe() {
      const observed = [
        this.$refs.home as Element,
        this.$refs.histoire as Element,
        this.$refs.asso as Element,
        this.$refs.sponsor as Element,
      ]
      if (this.observer) {
        observed.forEach((elem) => {
          this.observer!.unobserve(elem)
        })
      }
      const y = Math.round(window.innerHeight * 0.7)
      this.observer = new IntersectionObserver(this.observerCallback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,
      })
      observed.forEach((elem) => {
        this.observer!.observe(elem)
      })
    },
  },
})
</script>

<style lang="postcss" scoped>
.myShadow {
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

.ladder {
  position: absolute;
  left: 77%;
  height: 100vh;
  top: -40px;
}

.rope1 {
  position: absolute;
  left: 0;
  width: 600px;

  top: -200px;
  @screen 2xl {
    top: -50px;
  }
}

.rope2 {
  position: absolute;
  left: -70px;
  width: 680px;

  top: -150px;
  @screen 2xl {
    top: 0;
  }
}

.rope3 {
  position: absolute;
  left: -70px;
  width: 700px;

  top: -270px;
  @screen md {
    top: -220px;
  }
  @screen 2xl {
    top: -70px;
  }
}

.rope4 {
  position: absolute;
  top: 50%;
  width: 1800px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -300px;
  margin-left: 50px;

  @screen md {
    margin-top: -200px;
  }
}

.arrow {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  bottom: 0.5em;
}

.nav-burger {
  cursor: pointer;
  &.nav-active {
    .nav-burger-1 {
      transform: translateY(8px) rotate(45deg);
    }
    .nav-burger-2 {
      opacity: 0;
    }
    .nav-burger-3 {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

.nav-burger div {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border: white 1px;
  border-radius: 3px;
  transition: all 0.3s ease;
}
</style>
