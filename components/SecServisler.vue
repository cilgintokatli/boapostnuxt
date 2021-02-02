<template>
    <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-5 gap-4 lg:px-20 mb-60" >
        <div class="slides order-2 col-span-3 text-white">
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeInDown"
            leave-active-class="animate__animated animate__fadeOutUp"
          >
            <NuxtDynamic :name="currentTabComponent" />
          </transition>
        </div>
        <div class="slidenav order-1 lg:col-span-2 grid lg:justify-items-end lg:items-start lg:auto-rows-max">
            <button v-for="tab in tabs"
                    :key="tab"
                    :class="[ { active: currentTab === tab }]"
                    @click="currentTab = tab"
                    class="block lg:gap-4 text-gray-900 font-light text-2xl lg:text-5xl underlined underlined--tick"
                >
                    {{ tab }}
               
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      currentTab: 'VFX',
      tabs: ['VFX', 'Retouch', 'Greenscreen'],
      scrollPosition: null
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  }

}
</script>

<style>
.underlined {
    line-height: 1.2;
    text-decoration: none;
    background-image: linear-gradient(to right, #7a2e94 0, #7a2e94 100%);
    background-position: 0 0.3em;
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: background 0.5s;
}
.underlined--thick {
    background-position: 0 -0.1em;
}
.underlined:hover, .underlined.active {
    background-size: 100% 100%;
}

figure > img {
            opacity: 1;
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
            -webkit-filter: brightness(60%);
            filter: brightness(60%);
}

:root {
    --animate-duration: 1.5s;
    --animate-delay: 1s;
    --animate-repeat: 1
}

.animate__animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-duration: var(--animate-duration);
    animation-duration: var(--animate-duration);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -10%, 0);
        transform: translate3d(0, -10%, 0)
    }

    to {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.animate__fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}


@-webkit-keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0)
    }
}

.animate__fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp
}

</style>>
