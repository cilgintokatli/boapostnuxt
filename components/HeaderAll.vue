<template>
    <nav id="nav" class="mx-auto flex w-full flex-wrap lg:flex-row justify-between items-center py-3 px-12 sticky stickynav" >
      <HeaderLogo class="stickylogo" /> 
      <NavbarMenu />
    </nav>
</template> 

<script>
import NavbarMenu from '~/components/NavbarMenu'

export default {
  components: {
    NavbarMenu
  }
}
</script>

<style scoped>
#nav{
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, transparent 50%, #7a2e94 50%);
    -webkit-transition: background-position .7s;
    -moz-transition: background-position .7s;
    transition: background-position .7s;
  transition: all .9s;
}
.stickylogo{
  width: 20%!important;
}
#nav.stickynav{
  box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%);
  position:sticky;
  width:100%;
  background-position: 0 100%;
  top:0px;
}

.logo{
  width: 55%;
  transition: all .3s;
}


</style>