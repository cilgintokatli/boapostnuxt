<template>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-36 pt-20" >
        <div class="slides order-2 col-span-3 text-white">
            <NuxtDynamic :name="currentTabComponent" />

        </div>
        <div class="slidenav order-1 col-span-2 grid justify-items-end items-start auto-rows-max">
            <button v-for="tab in tabs"
                    :key="tab"
                    :class="[ { active: currentTab === tab }]"
                    @click="currentTab = tab"
                    class="block gap-4 text-gray-900 font-light underlined underlined--tick"
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

<style >
.underlined {
    font-size: 2em;
    line-height: 1.2;
    text-decoration: none;
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
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

</style>>
