<template>
    <div>
    <div class="inset-0 fixed z-50" @click.self="console.log('clicked mı vallah')" >
      <div  class="grid place-items-center min-h-screen pt-4 pb-20 text-center block sm:p-0">
        <div  class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-black opacity-20" style="opacity:0.2"></div>
        </div>
        
        <div class="bg-black rounded-3xl z-50 shadow-xl relative">
          <nuxt-link to="/neler-yaptik/"
          class="modal-close cursor-pointer z-50 absolute">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </nuxt-link>
            <client-only>
              
                <vimeo-player ref="player" :video-id="videoID"  />
            </client-only>	
        </div>
      </div>
    </div>
        
    </div>
</template>

<script>
export default {
    props: [
    'pTitle'
  ],
    data() {
        return {
            videoID: this.$route.params.id,
            videoTitle: this.$route.params.pTitle
        }
    },
    head(){
      return {
        title: this.videoTitle
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


</style>>
