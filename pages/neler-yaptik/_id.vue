<template>
      
        <div class="inset-0 fixed z-50">
          <div  class="grid place-items-center min-h-screen pt-4 pb-20 text-center block sm:p-0">
            <div  class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-black opacity-20" style="opacity:0.2" @click.self="$router.push('/neler-yaptik/')" ></div>
            </div>
            <transition name="slide-upp" appear>
            <div class="bg-black rounded-3xl z-50 shadow-xl relative ">
<!--               <nuxt-link to="/neler-yaptik/"
              class="modal-close cursor-pointer z-50 absolute">
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 18 18">
                  <path d="M14.53 4.ß53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </nuxt-link> -->
                <client-only>
                    <vimeo-player ref="player" :video-id="videoID"  />
                </client-only>	
            </div>
            </transition>
          </div>
        </div>
      
</template>

<script>
export default {
    
    data() {
        return {
            videoID: this.$route.params.id,
        }
    },
    async asyncData({ $axios, route }) {
          try{ 
            $axios.setToken(process.env.VIMEO_TOKEN, 'Bearer')
            const ip = await $axios.$get(`https://api.vimeo.com/videos/${route.params.id}`)
            return { 
              videoTitle: ip.name,
              videoDesc: ip.description.replaceAll('\n', ' '),
              videoImg: ip.pictures.sizes[5].link
            }
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
          
        
    },
    head(){
      return {
        title: this.videoTitle,
        meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.videoDesc
        },
        {
          
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.videoTitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.videoDesc
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.videoImg
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.videoTitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.videoTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.videoDesc
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.videoImg
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.videoImg
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.videoTitle
        }
      ]

      }
    }
}
</script>

<style>

.modal-close {
  top:-3em;
  right: 0px;
}
iframe {
  width:100%
}

@media (min-width: 768px){
  .modal-close {
    top: 0px!important;;
    right: -3rem!important;

  }

    iframe  {
      width:640px!important;
    }
}

.slide-upp-enter-active,
.slide-upp-leave-active {
  transition: all 500ms ease-in;
}
.slide-upp-enter,
.slide-upp-leave-active {
  opacity: 0;
  transform: translateY(-20px);
}
</style>>
