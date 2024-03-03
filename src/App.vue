<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header style="width: 100%;">

    <div class="wrapper">
      <HelloWorld msg="youtube popsong app" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/youtube">youtube</RouterLink>
      </nav>
    </div>
  </header>


      <RouterView />

    <!-- <RouterView v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </RouterView> -->


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


 
</style>
