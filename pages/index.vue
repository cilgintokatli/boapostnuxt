<template>

  <div class="py-10 px-16 mt-20 lg:mt-48 bg-gradient">
    <section>
      <Hakkimizda />
    </section>
    <transition name="fade" mode="out-in">
    <section>
      <Servisler class="h-screen" />
    </section>
    </transition>
  </div>
</template>

<script>

import Hakkimizda from '~/components/SecHakkimizda.vue'
import Servisler from '~/components/SecServisler.vue'

export default {
  components: {
    Hakkimizda,
    Servisler,
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.bg-gradient{
  background: rgb(184,147,243);
background: linear-gradient(0deg, rgba(122,46,148,1) 0%, rgba(237,100,166,1) 40%, rgba(235,122,122,1) 60%, rgba(230,255,250,1) 100%);
}

.links {
  padding-top: 15px;
}

/* The container element */



</style>
