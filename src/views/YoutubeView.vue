<script setup>
  import { ref , onMounted, reactive ,nextTick, isProxy, toRaw   } from 'vue'
  import YouTube from 'vue3-youtube'
  import Home from '@/views/HomeView.vue'
  import About from '@/views/AboutView.vue'

  const show = ref(true)

  const tabs = {
    Home,
    About,
  }
  const currentTab = ref('Home')
  console.clear()
  console.log('aa...........tabs', tabs)
  console.log('aa...........tabs[currentTab]', tabs[currentTab])

  const checkedValues= ref([])
  // const playList = ref([])
  let playList = []
  playList = [
    {videoId:'_zdmFfr0GG4', title: 'aagg'},
    {videoId:'V8S--05LCSo', title: ''},
    {videoId:'MFqLddbl9Y0', title: ''},
    {videoId:'WJEVJHxw5gM', title: ''},
    {videoId:'9Z-keU6Mbbo', title: ''},
    {videoId:'c6OKkcQz8WU', title: ''},
    {videoId:'_lGjZ46u8jk', title: ''},
    {videoId:'LFoacsmKV6o', title: ''},
    {videoId:'3VL4QCnTia0', title: ''},
    {videoId:'Gi6EgXxY0GQ', title: ''},
    {videoId:'OqS9iBHAwL4', title: ''},
    {videoId:'8AzGNbs_WmU', title: ''},
    {videoId:'lG0Ys-2d4MA', title: ''},
    {videoId:'fkxfGYPsmgc', title: ''},
    // {videoId:'AoUC4BXmRqI', title: ''},
    // {videoId:'1iwesZ4RSs0', title: ''},
    // {videoId:'ljmDpFM9k9k', title: ''},
    // {videoId:'AmvLmIP6S4g', title: ''},
    // {videoId:'izTqxQxG27o', title: ''},
    // {videoId:'IX5AEXf3uNs', title: ''},
    // {videoId:'MYkEn9rsf28', title: ''},
    // {videoId:'1n83x5g8pQk', title: ''},
    // {videoId:'RksyHK651ig', title: ''},

    // {videoId:'RksyHK651ig', title: ''},
    // {videoId:'RksyHK651ig', title: ''},
    // {videoId:'RksyHK651ig', title: ''},
    // {videoId:'RksyHK651ig', title: ''},
  ]


  // const youtubes = ref([])
  const youtubes = []


  onMounted(() => {
    console.log('♥onMounted...........playList', playList)
    // console.log('♥onMounted...........playList.value', playList.value)
    console.log('♥onMounted...........youtubes', youtubes)
    // console.log('♥onMounted...........youtubes.value', youtubes.value)
    console.log('♥onMounted...........youtubes[0]', youtubes[0])

    playList.forEach((obj, index) => {
        console.log('★Index: ' , index + ' obj: ' , obj);
        // youtubes.value[index].initPlayer()
        console.log('♥onMounted...........youtubes[index]', youtubes[index])
        // console.log('♥onMounted...........youtubes.value[index].target', youtubes.value[index].target)
    });
    youtubes.forEach((obj, index) => {
      console.log('★Index: ' , index + ' obj: ' , obj);
      // console.log('★Index: ' , index + ' obj.data: ' , obj.data);
      // console.log('★Index: ' , index + ' obj.data[0]: ' , obj.data[0]);


// const proxy = new Proxy({}, obj);
      console.log(obj); // Proxy {} [[Target]]: Object {}
      // const target = obj[[Target]];
      const target = Object.assign({}, obj);
      console.log(target); // Object {}
      // const proxy = new Proxy(obj, {} );
      // console.log('♥onMounted...........proxy', proxy)

      // console.log('♥onMounted...........target', target)
      // playList[index].title
// const proxy1 = new Proxy(obj, {});
// console.log(proxy1)
// console.log({...proxy1})
// console.log(JSON.parse(JSON.stringify(proxy1)))

//       const obj2 = JSON.parse(JSON.stringify(proxy1))

      // console.log('★Index: ' , index + ' obj.player: ' , obj.player);
      // obj.value.forEach((item, index) => {
          // console.log('★★★Index: ' , index + ' obj: ' , item);
          // youtubes.value[index].initPlayer()
          // console.log('♥onMounted...........youtubes.value[index]', youtubes.value[index])
          // console.log('♥onMounted...........youtubes.value[index].target', youtubes.value[index].target)
      // });
        // youtubes.value[index].initPlayer()
        // console.log('♥onMounted...........youtubes.value[index]', youtubes.value[index])
        // console.log('♥onMounted...........youtubes.value[index].target', youtubes.value[index].target)
    });

    // increment()
  })
  async function increment() {
    await nextTick()
    // Now the DOM is updated
  }
  async function onReady(e) {
    console.log('♥♥♥onReady...........onReady e', e)
    console.log('♥♥♥onReady...........onReady e.target', e.target)
    console.log('♥♥♥onReady...........onReady e.target.videoTitle', e.target.videoTitle)
    await nextTick()
    playVideo(0) 
  }
  function playVideo(index) {
    console.log(`playVideo...........index`, index)
    // console.log(`playVideo...........target_copy[${index}]`, target_copy[index])
    console.log(`playVideo...........youtubes[${index}]`, youtubes[index])
    youtubes.value[index].playVideo()
  }
  function pauseVideo(index) {
    youtubes.value[index].pauseVideo()
  }
  function stopVideo(index) {
    youtubes.value[index].stopVideo()
  }
</script>

<template>
  <Transition name="slide-fade">
    <div class="youtubes" v-if="show">
      
	    <!-- <component :is="tabs[currentTab]" class="tab"></component> -->

      <h1>This is an youtubes page</h1>
      <p>
        {{ checkedValues }} <button>{{ checkedValues.length }} 선택</button>
      </p>

      <div v-for="(item, index) in playList" :key="index">
        <input type="checkbox" v-model="checkedValues" :value="item.videoId" @click.stop="" />
        {{index}} {{ item }}

        <YouTube 
          width="100%"
            :src="`https://www.youtube.com/watch?v=${item.videoId}`" 
            host="https://www.youtube.com"
            ref="youtubes"  />
            <!-- @ready="onReady" -->
            
        <button @click="playVideo(index)">play</button>
        <button @click="pauseVideo(index)">pause</button>
        <button @click="stopVideo(index)">stop</button>
        
      </div>

    </div>  
  </Transition>

</template>

<style>
@media (min-width: 1024px) {
  .youtubes {
    /* min-height: 100vh; */
    /* display: flex; */
    /* align-items: center; */
  }
}
 


</style>
