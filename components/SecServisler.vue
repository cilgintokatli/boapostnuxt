<template>
    <div>
        <div class="display-block text-center lg:text-right mb-10"><nuxt-link class="cta font-bold text-3xl text-black lg:text-4xl" to="/ne-yapiyoruz">ne yapıyoruz?</nuxt-link></div>
        <div class="grid grid-cols-1 gap-0 lg:grid-cols-5 grid-rows-1 lg:gap-4 lg:px-20" >
                <div class="slides order-2 col-span-3 text-gray-700">
                <transition
                    mode="out-in"
                    enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeOutUp"
                >
                    <NuxtDynamic :name="currentTabComponent" />
                </transition>
                </div>
            <div class="slidenav mb-10 lg:mb-0 order-1 lg:col-span-2 grid lg:justify-items-end lg:items-start gap-4 lg:gap-0 auto-rows-auto lg:auto-rows-max">
                <div v-for="tab in tabs"
                        :key="tab"
                        :class="[ { active: currentTab === tab }]"
                        @click="currentTab = tab"
                        class="block lg:text-right text-center lg:gap-4 text-gray-900 font-light text-xl lg:text-5xl underlined underlined--tick lowercase cursor-pointer und-bg-mor"
                    >
                        {{ tab }}
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 'Edit',
            tabs: ['Edit', 'Color','Sound','Graphic','Kurgu ve Color Studio'],
            scrollPosition: null
        }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab.split(" ").join("-").toLowerCase()
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
    background-position: 0 0em;
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: background 0.5s;
}

.underlined:nth-child(3n+1){
    background-image: linear-gradient(to right, #7a2e94 0, #7a2e94 100%);
}
.underlined:nth-child(3n+2){
    background-image: linear-gradient(to right, #e7d434 0, #e7d434 100%);
}
.underlined:nth-child(3n+3){
    background-image: linear-gradient(to right, #20ad8f 0, #20ad8f 100%);
}

@media (max-width: 1024px) {
    .underlined{
        background-position: 0 0em;
    }
    .underlined:hover, .underlined.active{
        color:white;
    }
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
