<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-64">
    <div class="order-2 lg:order-1 shadow-2xl bg-white lg:scale-75 transform transition duration-500 lg:hover:scale-100 rounded-xl lg:px-10 lg:py-10 lg:rounded-3xl" v-block-reveal="{isContentHidden:'true', delay:700, bgcolor:'#4cae90', direction: 'rl'}">
      <div class="mx-auto py-5 px-5 bg-white w-full">
          <figure>
              <img :src="require('~/assets/img/index-biz-kimiz.jpg?resize&size=1000')" alt="boapost biz kimiz">
          </figure>
      </div>
    </div>
    <div class="flex flex-col mx-auto text-center py-10 lg:text-right order-1 lg:order-2 self-end">
      <div class="mx-auto" v-block-reveal="{isContentHidden:'true',delay:1000, bgcolor:'#7a2e94'}" >
        <div class="text-2xl lg:text-2xl text-gray-700">
          <p>
            Bakmanın ve görmenin estetiği, görsel sanatların olmazsa olmazıyken
“son dokunuş”
olan post prodüksiyonun da bu düsturdan ayrı olması düşünülemez. Boapost’ta, ilk adımdan itibaren yaratıcı bir sürecin ürünü olan projeleriniz, son adım olan post prodüksiyon aşamasında da yine
–dümeninde sizin olduğunuz-
yaratıcı bir süreçten geçecektir.
          </p>
        </div>
      </div>
      <div class="inline-block">
        <div class="inline-block" v-block-reveal="{ delay: 1150, direction:'rl'}" >
          <nuxt-link class="cta font-bold text-xl text-black lg:text-4xl" to="/about">biz kimiz</nuxt-link>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.block-revealer {
  position: relative;
}

/* The actual block that overlays */
.block-revealer__element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  pointer-events: none;
  opacity: 0;
  z-index:3;
}

.comparison-slider {
    padding-bottom: 56.2222%;
    height: auto;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    width: 100%;
}

.comparison-slider .comparison-after, .comparison-slider .comparison-before {
    height: 100%;
    left: 0;
    margin: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
}
.comparison-slider .comparison-before {
    width: 100%;
    z-index: 1;
}
.comparison-slider .comparison-after {
    max-width: 100%;
    min-width: 0;
    z-index: 2;
}
.comparison-slider .comparison-after img, .comparison-slider .comparison-before img {
    height: 100%;
    object-fit: cover;
    object-position: left center;
    position: absolute;
    width: 100%;
    vertical-align: unset;
}

.comparison-slider .comparison-before .comparison-label {
    right: .8rem;
}
.comparison-slider .comparison-after .comparison-label {
    left: 0.8rem;
}
.comparison-slider .comparison-label {
    background: rgba(48,55,66,.5);
    bottom: .8rem;
    color: #fff;
    padding: .2rem .4rem;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.comparison-slider .comparison-after::before {
    background: 0 0;
    content: "";
    cursor: default;
    height: 100%;
    left: 0;
    position: absolute;
    right: .8rem;
    top: 0;
    z-index: 1;
}
.comparison-slider .comparison-resizer {
    animation: first-run 1.5s 1 ease-in-out;
    cursor: ew-resize;
    height: .8rem;
    left: 0;
    max-width: 100%;
    min-width: .8rem;
    opacity: 0;
    outline: 0;
    position: relative;
    resize: horizontal;
    top: 50%;
    transform: translateY(-50%) scaleY(30);
    width: 0;
}
.comparison-slider .comparison-after::after {
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 -5px, 0 5px;
    color: #fff;
    content: "";
    height: 3px;
    pointer-events: none;
    position: absolute;
    right: .4rem;
    top: 50%;
    transform: translate(50%,-50%);
    width: 3px;
}

</style>