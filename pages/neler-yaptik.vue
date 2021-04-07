<template>
  <div class="containet mx-auto px-10">
      <h1 class="text-6xl text-yesil text-center font-bold">
        neler yaptık?
      </h1>
      <div class="vimeos gap-8">
          <div v-for="(video, index) in videos" :key="index"> 
            <span> <nuxt-link :to="{ name:'neler-yaptik-id', params: {id: video.id, pTitle: video.name} }" ><img :src="video.img" class="mb-3"></nuxt-link>  </span>
            <span class="font-bold mt-4">{{ video.name }}</span>
             
          </div>
      </div>
       <nuxt-child :key="$route.params.id" ></nuxt-child>
  </div>
</template>

<script>




export default {
  head(){
      return {
        title: 'Neler Yaptık?'
      }
    },
  data(){
    return{
      videos: [],
      selectedItem: {}
    }
  },
  async mounted() {
    try {
      console.time('timer')
      this.$axios.setToken('5e2f0b63d81b85ee46efc12cabd07fed', 'Bearer')
      const res = await this.$axios.get(`https://api.vimeo.com/me/videos`)
      const results = res.data.data
      console.log(results)
      console.timeEnd('timer')

      this.videos = results.map(data => ({
        name: data.name,
        img: data.pictures.sizes[4].link,
        id: data.link.replace('https://vimeo.com/',''),
        embed: data.embed.html,
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
    }
 
   
 

}
</script>

<style>
.vimeos{
  display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: min-content;;
    margin-top: 40px;
}

</style>