<template>
<div>
    <nav id="nav" class="mx-auto flex w-full flex-wrap lg:flex-row justify-between items-center py-3 px-12" :class="{stickynav:active}" >
            <HeaderLogo :class="{'stickylogo':active}" /> 
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-white hover:text-white hover:border-white">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="white" /></svg>
          </button>
        </div>
        
        <button @click="toggle" class="button" :class="{'-menu-open':isOpen}">
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
        <div class="menu" :class="isOpen ? '-open':'hidden' ">
          <ul>
            <nuxt-link to="/" class="pr-5 text-white">Ana Sayfa</nuxt-link>
            <nuxt-link to="/hakkimizda/" class="pr-5 text-white">Hakkımızda</nuxt-link>
            <nuxt-link to="/isler/" class="pr-5 text-white">İşler</nuxt-link>
            <nuxt-link to="/iletisim/" class="text-white">İletişim</nuxt-link>
          </ul>
      </div>
    </nav>
     
  </div>
</template> 

<script>
import HeaderLogo from '~/components/HeaderLogo'

export default {
  components: {
    HeaderLogo
  },
  data() {
    return {
      isOpen: false,
      active: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    toggleNavClass(){
        if(this.active == false){
          return 'nav'
        } else {
          return 'sticky-nav'
        }

    }
  },
  mounted() {

    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {this.active = true;}, 2000)
        
        // fetch to next page or some code
      }
    }
  }
}
</script>

<style scoped>
.stickylogo{
  width: 20%!important;
}
#nav.stickynav{
  box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%);
  position:fixed;
  width:100%;
  background-position: 0 100%;
}

.logo{
  width: 55%;
  transition: all .3s;
}
#nav{
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, #7a2e94 50%);
    -webkit-transition: background-position .7s;
    -moz-transition: background-position .7s;
    transition: background-position .7s;
  transition: all .9s;
}


.menu {
  opacity: 0;
  color: #fff;
  background: #000;
  transition: all 0.3s ease-in-out;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: fixed;
  display: flex;
   top:0;
    left:0;
    width:100%;
    height:100%;
    visibility: hidden;
}
.menu.-open {
  opacity: 0.9;
  visibility: visible;

}
.menu ul {
  list-style: none;
}
.menu li {
  margin: 20px 0;
}


.button {
  display: flex;
  outline: none;
  box-sizing: border-box;
  height: 36px;
  cursor: pointer;
  position:relative;
  z-index: 2;
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
  stroke: #fff;
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