<template>
    <nav id="nav" class="mx-auto flex w-full flex-wrap lg:flex-row justify-between items-center py-3 px-12 sticky" :class="{stickynav:active}" >
      <HeaderLogo :class="{'stickylogo':active}" /> 
      <NavbarMenu />
    </nav>
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
    console.log('headerhome')
      window.document.onscroll = () => {
      let navBar = document.getElementById('nav');
      if(window.scrollY > 100){
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
}
</script>

<style scoped>

.stickylogo{
  width: 20%!important;
  top:0px;
}
#nav.stickynav{
  position:fixed!important;
  width:100%;
  background-position: 0 -100%;
}

.logo{
  width: 55%;
  transition: all .9s;
}
#nav{
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, #7a2e94 50%);
    -webkit-transition: background-position .7s;
    -moz-transition: background-position .7s;
    transition: background-position .7s;
  transition: all .9s;
  position:fixed;
  top:0px;
}
.slide-left-leave-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-right-enter-active {
  transition: 0.3s cubic-bezier(.17,.67,.83,.67);
}

.slide-left-enter {
  transform: translatex(100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}


.menu {

  color: #fff;
  background: #000;
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