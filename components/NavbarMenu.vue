<template>
    <div class="flex">
        <button @click="toggle" class="button" :class="isOpen ? '-menu-open':'hidden'">
          <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <line x1="0" y1="17" x2="48" y2="17" stroke-width="7" />
              <line x1="0" y1="31" x2="48" y2="31" stroke-width="7" />
            </g>
            
            <g>
              <line x1="0" y1="24" x2="48" y2="24" stroke-width="7" />
              <line x1="0" y1="24" x2="48" y2="24" stroke-width="7" />
            </g>
          </svg>
        </button>
        <transition name="slide-left">
          <div v-if="isOpen" class="menu z-20 bg-maincolor grid-col-1 md:grid-rows-3 md:grid-cols-1" :class="isOpen ? '-open':'hidden'"  >
            <div class="self-end justify-self-center hidden md:block pb-10 px-8">
              <nuxt-link to="/"><img :src="require('~/assets/img/menu-logo.png?resize&size=170')" alt="boapost menu logo"></nuxt-link>
            </div>
            <ul class="flex-col md:flex-row">
              <li><nuxt-link to="/biz-kimiz/" class="pr-0 md:pr-10 text-sari font-bold">biz kimiz</nuxt-link></li>
              <li><nuxt-link to="/ne-yapiyoruz/" class="pr-0 md:pr-10 text-sari font-bold">ne yapıyoruz</nuxt-link></li>
              <li><nuxt-link to="#" class="pr-0 md:pr-10 text-sari font-bold">ekip</nuxt-link></li>
              <li><nuxt-link to="/iletisim/" class="text-sari font-bold">iletişim</nuxt-link></li>
            </ul>
            <div class="self-end justify-center hidden md:grid grid-cols-2 pb-10 px-12">
              <div class="grid grid-cols-6 gap-4 items-end justify-items-end col-start-2">
                <a href="http://www.facebook.com/boapostpro" class="order-4	">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>            </g>
                  </svg>
                </a>
                <a href="http://twitter.com/boapostpro" class="order-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </g>
                  </svg>
                </a>
                <a href="http://www.instagram.com/boapostpro" class="order-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none">
                      <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
                    </g>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UClRQ-HzM-njEfxbGB7zqGLA" class="order-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                    </g>
                  </svg>
                </a>
                <a href="http://www.linkedin.com/company/boapost-production/" class="order-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </g>
                  </svg>
                </a>
                <a href="https://vimeo.com/boapost" class="order-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <g fill="#e7d434" stroke="none"> 
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.82 11.419c-1.306 2.792-4.463 6.595-6.458 6.595-1.966 0-2.25-4.192-3.324-6.983-.527-1.372-.868-1.058-1.858-.364l-.604-.779c1.444-1.27 2.889-2.745 3.778-2.826.998-.096 1.615.587 1.845 2.051.305 1.924.729 4.91 1.472 4.91.577 0 2.003-2.369 2.076-3.215.13-1.24-.912-1.277-1.815-.89 1.43-4.689 7.383-3.825 4.888 1.501z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    '$route' () {
      this.isOpen = false
    }
  }
}
</script>

<style>

#nav{
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, #7a2e94 50%);
    -webkit-transition: background-position .7s;
    -moz-transition: background-position .7s;
    transition: background-position .7s;
  transition: all .9s;
}
.slide-left-leave-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-right-enter-active {
  transition: 0.3s ease-in;
}

.slide-left-enter {
  transform: translatex(100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}


.menu {

  color: #fff;
  font-size: 36px;
  position: fixed;
  display: grid;
   top:0;
    left:0;
    width:100%;
    height:100%;
    visibility: hidden;
}
.menu.-open {
  opacity: 1;
  visibility: visible;

}
.menu ul {
  list-style: none;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
.menu ul li a{
  margin: 20px 0;
  font-size: 1.6em;
  -webkit-text-stroke: 2px #e7d434;
}

.menu li a:hover{
  color: transparent;
}


.button {
  display: flex;
  outline: none;
  box-sizing: border-box;
  height: 36px;
  cursor: pointer;
  position:relative;
  z-index:31;
}

button:focus{
    outline:none;
}

.button svg {
  stroke: #000;
  transition: 0.2s;
}
.button svg g:first-child {
  opacity: 1;
  transition: opacity 0s 0.2s;
}
.button svg g:first-child line {
  transition: transform 0.2s 0.2s;
  transform: translateY(0px);
}

.button svg g:last-child {
  opacity: 0;
  transition: opacity 0s 0.2s;
}
.button svg g:last-child line {
  transition: transform 0.2s;
  transform: rotate(0deg);
  transform-origin: center;
}
.button.-menu-open svg {
  stroke: #e7d434;
}
.button.-menu-open svg g:first-child {
  opacity: 0;
}
.button.-menu-open svg g:first-child line {
  transition: transform 0.2s;
}
.button.-menu-open svg g:first-child line:first-child {
  transform: translateY(7px);
}
.button.-menu-open svg g:first-child line:last-child {
  transform: translateY(-7px);
}
.button.-menu-open svg g:last-child {
  opacity: 1;
}
.button.-menu-open svg g:last-child line {
  transition: transform 0.2s 0.2s;
}
.button.-menu-open svg g:last-child line:first-child {
  transform: rotate(45deg);
}
.button.-menu-open svg g:last-child line:last-child {
  transform: rotate(-45deg);
}

</style>