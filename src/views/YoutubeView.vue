<script setup>
  import { ref , onMounted } from 'vue'
  import YouTube from 'vue3-youtube'
  import Home from '@/views/HomeView.vue'
  import About from '@/views/AboutView.vue'

  const tabs = {
    Home,
    About,
  }
  const currentTab = ref('Home')
  console.clear()
  console.log('aa...........tabs', tabs)
  console.log('aa...........tabs[currentTab]', tabs[currentTab])


  const checkedValues= ref([])
  const playList = [
    {videoId:'MFqLddbl9Y0', title: ''},
    {videoId:'WJEVJHxw5gM', title: ''},
  ]

  const youtube = ref([])
  let target_copy =  ref([])

  const show = ref(true)

  onMounted(() => {
    console.log('onMounted...........youtube.value', youtube.value)
    console.log('onMounted...........youtube.value[0]', youtube.value[0])
    // console.log(JSON.stringify(youtube.value)); // { a: 0, b: { c: 0}}
    target_copy = Object.assign([], youtube.value)
    console.log('onMounted...........target_copy', target_copy)

    // playVideo(0) 
  })

  function onReady() {
    // playVideo(0) 
    console.log('♥♥♥onReady...........onReady', 0)
  }
  function playVideo(index) {
    console.log(`playVideo...........index`, index)
    console.log(`playVideo...........target_copy[${index}]`, target_copy[index])
    target_copy[index].playVideo()
  }
  function pauseVideo(index) {
    target_copy[index].pauseVideo()
  }
  function stopVideo(index) {
    target_copy[index].stopVideo()
  }
</script>

<template>
  <Transition name="slide-fade">
    <div class="youtube" v-if="show">
      
	    <!-- <component :is="tabs[currentTab]" class="tab"></component> -->

      <h1>This is an youtube page</h1>
      <p>
        {{ checkedValues }} <button>{{ checkedValues.length }} 선택</button>
      </p>

      <div v-for="(item, index) in playList" :key="index">
        {{ item }}

        <YouTube 
          width="100%"
            :src="`https://www.youtube.com/watch?v=${item.videoId}`" 
            host="https://www.youtube.com"
            ref="youtube"  />
            <!-- @ready="onReady" -->
            
        <button @click="playVideo(index)">play</button>
        <button @click="pauseVideo(index)">pause</button>
        <button @click="stopVideo(index)">stop</button>
        <input type="checkbox" v-model="checkedValues" :value="item.videoId" @click.stop="" />
      </div>

    </div>  
  </Transition>

</template>

<style>
@media (min-width: 1024px) {
  .youtube {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
 


</style>
