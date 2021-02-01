<template>
  <div>
    <transition name="fade">
      <HeaderHome v-if="isHomePage" />
    </transition>
    
    <transition name="fade">
      <HeaderAll v-if="isHomeAll" />
    </transition>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderHome from '~/components/HeaderHome.vue'
import HeaderAll from '~/components/HeaderAll.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HeaderHome,
    HeaderAll,
    Footer
  },
  data() {
        return {
            isHomePage: false,
            isHomeAll: false
        }
    },
  mounted() {
      if (this.$route.path === '/') {
        this.isHomePage = true
        this.isHomeAll = false
      }
      else {
        this.isHomePage= false
        this.isHomeAll = true
      } 
    },
    watch: {
    '$route' () {
      if (this.$route.path === '/') {
        this.isHomePage = true
        this.isHomeAll = false
      }
      else {
        this.isHomePage= false
        this.isHomeAll = true
      }  
    }
  }
}
</script>



<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-teal-100;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}


.slide-enter-active, .slide-leave-active {
  transition: margin-top .8s ease-out;
}

.slide-enter, .slide-leave-to {
  margin-top: -200px;
}

.slide-enter-to, .slide-leave {
  margin-top: 0px;
}

a.cta {
  background: linear-gradient(to bottom, #e7d546 0%, #e7d546 100%);
	background-position: 0 100%;
	background-repeat: repeat-x;
	background-size: 3px 3px;
  color: #000;
  text-decoration: none;
  font-size:2em;
}


a.cta:hover {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23e7d546' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: 0 100%;
  background-size: auto 6px;
  background-repeat: repeat-x;
  text-decoration: none;
}

</style>
