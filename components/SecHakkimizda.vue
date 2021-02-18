<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-64">
    <transition name="fade">
    <div v-show="isModal" class="inset-0 fixed z-30"  >
      <div class="flex items-end justify-center items-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <div class="flex flex-col align-bottom bg-black overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div
          v-on:click="isModal = false" 
          class="modal-close cursor-pointer z-50 pt-5 pr-2 self-end">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
          <div class="relative" style="padding-top: 56.25%">
              <iframe class="absolute inset-0 w-full h-full" src="https://player.vimeo.com/video/513320756" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <div
      v-on:click="isModal = true" 
      class="order-2 lg:order-1 shadow-2xl bg-white lg:scale-75 transform transition duration-500 lg:hover:scale-100 rounded-xl lg:px-10 lg:py-10 lg:rounded-3xl cursor-pointer" v-block-reveal="{isContentHidden:'true', delay:700, bgcolor:'#4cae90', direction: 'rl'}">
      <div class="mx-auto py-5 px-5 bg-white w-full">
          <figure class="relative">
              <img :src="require('~/assets/img/index-biz-kimiz.jpg?resize&size=1000')" alt="boapost biz kimiz" style="filter: brightness(100%);">
                <svg
                class="absolute text-maincolor flex items-center justify-center p-3 opacity-75 hover:opacity-100" style="top:15%;bottom:15%" xmlns="http://www.w3.org/2000/svg" width="100%" height="70%" viewBox="0 0 24 24">
                  <g fill="#fff"> 
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                  </g>
                </svg>
          </figure>
      </div>
    </div>
    <div class="flex flex-col mx-auto text-center py-10 lg:text-right order-1 lg:order-2 self-end">
      <div class="inline-block">
        <div class="inline-block" v-block-reveal="{ delay: 1150, direction:'rl'}" >
          <nuxt-link class="cta font-bold text-3xl text-black lg:text-4xl" to="/biz-kimiz">biz kimiz</nuxt-link>
        </div>
      </div>
      <div class="mx-auto" v-block-reveal="{isContentHidden:'true',delay:1000, bgcolor:'#7a2e94'}" >
        <div class="text-2xl lg:text-2xl text-gray-700">
          <p>
            Bakmanın ve görmenin estetiği, görsel sanatların olmazsa olmazıyken
“son dokunuş”
olan post prodüksiyonun da bu düsturdan ayrı olması düşünülemez. Boapost’ta, ilk adımdan itibaren yaratıcı bir sürecin ürünü olan projeleriniz, son adım olan post prodüksiyon aşamasında da yine
–dümeninde sizin olduğunuz-
yaratıcı bir süreçten geçecektir.
          </p>
        </div>
      </div>
      
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isModal: false
    }
    
  }

}
</script>

<style>

.block-revealer {
  position: relative;
}

/* The actual block that overlays */
.block-revealer__element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  pointer-events: none;
  opacity: 0;
  z-index:3;
}

.comparison-slider {
    padding-bottom: 56.2222%;
    height: auto;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    width: 100%;
}

.comparison-slider .comparison-after, .comparison-slider .comparison-before {
    height: 100%;
    left: 0;
    margin: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
}
.comparison-slider .comparison-before {
    width: 100%;
    z-index: 1;
}
.comparison-slider .comparison-after {
    max-width: 100%;
    min-width: 0;
    z-index: 2;
}
.comparison-slider .comparison-after img, .comparison-slider .comparison-before img {
    height: 100%;
    object-fit: cover;
    object-position: left center;
    position: absolute;
    width: 100%;
    vertical-align: unset;
}

.comparison-slider .comparison-before .comparison-label {
    right: .8rem;
}
.comparison-slider .comparison-after .comparison-label {
    left: 0.8rem;
}
.comparison-slider .comparison-label {
    background: rgba(48,55,66,.5);
    bottom: .8rem;
    color: #fff;
    padding: .2rem .4rem;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.comparison-slider .comparison-after::before {
    background: 0 0;
    content: "";
    cursor: default;
    height: 100%;
    left: 0;
    position: absolute;
    right: .8rem;
    top: 0;
    z-index: 1;
}
.comparison-slider .comparison-resizer {
    animation: first-run 1.5s 1 ease-in-out;
    cursor: ew-resize;
    height: .8rem;
    left: 0;
    max-width: 100%;
    min-width: .8rem;
    opacity: 0;
    outline: 0;
    position: relative;
    resize: horizontal;
    top: 50%;
    transform: translateY(-50%) scaleY(30);
    width: 0;
}
.comparison-slider .comparison-after::after {
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 -5px, 0 5px;
    color: #fff;
    content: "";
    height: 3px;
    pointer-events: none;
    position: absolute;
    right: .4rem;
    top: 50%;
    transform: translate(50%,-50%);
    width: 3px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>