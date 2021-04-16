<template>
  <div class="grid gap-0 lg:gap-5 grid-cols-1 items-center justify-items-center px-10">
      <h1 class="text-3xl my-5 lg:text-6xl text-yesil text-center font-bold">
        neler yaptık?
      </h1>
      <div class="">
         <transition-group  name="slide-in" class="vimeos grid-cols-1 lg:grid-cols-3 gap-8" :style="{ '--total': videos.length }">
          <div v-for="(video, index) in videos" :key="index" :style="{'--i': index}"> 
            <div class="p-3 bg-white mb-3 rounded-2xl scale-100 lg:scale-95 lg:hover:scale-100 shadow-lg hover:shadow-xl transform transition duration-500">
              <nuxt-link
              :to="{ name:'neler-yaptik-id', params: {id: video.id, pTitle: video.name, slug:video.slug} }"
              :key="$route.params.id"
              >
                <img :src="video.img" class="rounded-lg ">
              </nuxt-link>
            </div>
            <span class="font-bold mt-4">{{ video.name }}</span>
          </div>
         </transition-group>
      </div>
      <transition name="fade">
       <nuxt-child :key="$route.params.id" ></nuxt-child>
      </transition>
       <LoadScreen v-if="showHideSpinner" />
  </div>
</template>

<script>




export default {

  data(){
    return{
      videos: [],
      title: 'neler yaptık?',
      showHideSpinner: true
    }
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  async mounted() {
    
    try {
      console.time('timer')
      this.$axios.setToken(process.env.VIMEO_TOKEN, 'Bearer')
      const res = (await this.$axios.$get(`https://api.vimeo.com/me/videos`)).data
      console.timeEnd('timer')
      const letters = { "İ":"i", "I":"i", "ı":"i", "Ş":"s", "ş":"s", "Ğ":"g", "ğ":"g", "Ü":"u", "ü":"u", "Ö":"o", "ö":"o", "Ç":"c", "ç":"c" };

      this.videos = res.map(data => ({
        name: data.name,
        img: data.pictures.sizes[3].link,
        id: data.link.replace('https://vimeo.com/',''),
      }))
      
    }
    catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err)
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err)
        } else {
          console.log("Client Error:", err)
        }
      }
      this.showHideSpinner = false;
    },
    head(){
      return {
        title: 'Neler Yaptık?'
      }
    },
 
}
</script>

<style>
@media (min-width: 768px){
.grid-auto-auto {
   grid-template-columns: auto auto;
 }
}
 
.vimeos{
  display: grid;
    grid-auto-rows: min-content;;
    margin: 40px 0 40px 0;
}
.slide-in-move {
  transition: opacity 0.5s linear, transform 0.5s ease-in-out;
}
.slide-in-leave-active {
  transition: opacity 0.4s linear, transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4);
  transition-delay: calc( 0.2s * (var(--total) - var(--i)) );
}
.slide-in-enter-active {
  transition: opacity 0.5s linear, transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
  transition-delay: calc( 0.2s * var(--i) );
}
.slide-in-enter, .slide-in-leave-to {
  opacity: 0;
}
.slide-in-enter {
  transform: translateY(1.5em);
}
.slide-in-leave-to {
  transform: translateY(1em);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>