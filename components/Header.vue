<template>

  <div>
        <div v-if="isHomePage"><HeaderHome/></div>
      
      <div v-else><HeaderAll /></div>
      
  </div>
</template>

<script>
import HeaderHome from '~/components/HeaderHome.vue'
import HeaderAll from '~/components/HeaderAll.vue'

export default {
    components:{
        HeaderHome,
        HeaderAll,
    },
    data() {
        return {
            isHomePage: false
        }
    },
    computed: {
      homePage() {
        if(this.$route.path == "/" ) {
          return this.isHomePage = true
        } else {
          return this.isHomePage = false
        }
      }
    },
    mounted() {
        if (this.$route.path === '/') {
            return this.isHomePage = true
        }    
    }
  }
</script>

<style>

</style>