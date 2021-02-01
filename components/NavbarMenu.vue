<template>
    <div>
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
        <transition name="slide-left">
          <div v-if="isOpen" class="menu" :class="isOpen ? '-open':'hidden'" >
            <ul>
              <nuxt-link to="/" class="pr-5 text-white">Ana Sayfa</nuxt-link>
              <nuxt-link to="/about/" class="pr-5 text-white">Hakkımızda</nuxt-link>
              <nuxt-link to="/contact/" class="text-white">İletişim</nuxt-link>
            </ul>
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