<template>
  <div class="containet mx-auto px-10">
      <h1 class="text-6xl text-yesil text-center font-bold">
        neler yaptık?
      </h1>
      <div class="vimeos">
          <div v-for="(video, index) in videos" :key="index"> 
              <span> <img @click="show(video)" :src="video.img"> </span>
            <span>{{ video.name }}</span>
            
          </div>
      </div>
      <modal name="my-first-modal" :adaptive="true">
        <div v-html="selectedItem.embed"></div>
    </modal>
  </div>
</template>

<script>




export default {
  data(){
    return{
      videos: [],
      selectedItem: {}
    }
  },
methods: {
        show (video) {
            this.selectedItem = video;
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
  async mounted() {
    try {
      this.$axios.setToken('5e2f0b63d81b85ee46efc12cabd07fed', 'Bearer')
      const res = await this.$axios.get(`https://api.vimeo.com/me/videos`)
      const results = res.data.data
      console.log(results)

      const letters = { "İ":"i", "I":"i", "ı":"i", "Ş":"s", "ş":"s", "Ğ":"g", "ğ":"g", "Ü":"u", "ü":"u", "Ö":"o", "ö":"o", "Ç":"c", "ç":"c" };

      this.videos = results.map(data => ({
        name: data.name,
        img: data.pictures.sizes[4].link,
        link: data.link.replace('https://vimeo.com/',''),
        embed: data.embed.html,
        slug: data.name.toString().toLowerCase()
        .replace(/[İIıŞşĞğÜüÇçÖö]/g, function(letter){ return letters[letter]; })
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
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
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    margin-top: 40px;
}

</style>