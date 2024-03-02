<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="youtube popsong app" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/youtube">youtube</RouterLink>
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->

<router-view v-slot="{ Component }">
  <transition name="slide-fade">
    <component :is="Component" />
  </transition>
</router-view>


<!-- <router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" >
    <component :is="Component" />
  </transition>
</router-view> -->





</template>

<style scoped>


/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
  /* transition: opacity 0.5s ease; */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  /* transition: all 0.3s ease-out; */
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  /* transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1); */
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px);
  /* transform: translateX(20px); */
  opacity: 0;
}





header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
