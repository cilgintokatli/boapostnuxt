<template>
  <div class="">
    <div class="my-10 px-20 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-20">
      <div class="order-2 lg:order-1">
        <form
          v-show="!isSubmitted"
          class=""
          @submit.prevent="validate">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div
              
              class="w-full px-3">
              <label
                for="name"
                class="block tracking-wide text-gray-700 text-xs font-bold mb-2 text-xl">isim</label>
              <input
                id="name"
                v-model.trim="$v.name.$model"
                :class="{'shadow-white': focusedElement === 'name', 'shadow-red': $v.name.$error}"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                @focus="focusedElement = 'name'"
                @blur="foucsedElement = ''">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div
              
              class="w-full px-3">
              <label
                for="email"
                class="block tracking-wide text-gray-700 text-xs font-bold mb-2 text-xl">e mail</label>
              <input
                id="email"
                v-model.trim="$v.email.$model"
                :class="{'shadow-white': focusedElement === 'email', 'shadow-red': $v.email.$error}"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                @focus="focusedElement = 'email'"
                @blur="foucsedElement = ''">
            </div>
          </div>
          <span
            v-show="$v.email.$error"
            class="text-sm self-start ml-2 mb-4 text-red-light">Geçerli bir email adresi girin</span>
          <div class="flex flex-wrap -mx-3 mb-6">
          <div
            class="w-full px-3">
            <label
              for="msg"
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2 text-xl">mesaj</label>
            <textarea
              id="msg"
              v-model.trim="$v.msg.$model"
              :class="{'shadow-white': focusedElement === 'msg', 'shadow-red': $v.msg.$error}"
              class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              rows="6"
              @focus="focusedElement='msg'"
              @blur="foucsedElement = ''"/>
          </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="">
              <button
                :class="submitButtonClasses"
                :disabled="submissionDisabled"
                type="submit">
                gönder
              </button>
            </div>
          </div>
        </form>
        <div
          v-show="isSubmitted"
          class="text-2xl text-developmint">
          Mesajınız gönderildi. En kısa sürede geri dönüş yapacağız!
        </div>
        <div
          v-if="error"
          class="text-2xl text-red-dark">
          Bir hata meydana geldi!
        </div>
      </div>
      <div class="grid lg:content-evenly gap-3 lg:gap-12 order-1 lg:order-2">
        <div class="">
          <h2 class="text-4xl">iletişim</h2>
          <p>0 (216) 505 38 51</p>
          <p>info@boapost.com</p>
        </div>
        <div>
          <h2 class="text-4xl">adres</h2>
          <p>Kısıklı Mah. Alemdağ Yanyolu Cad. SBK İş Merkezi No:5/6 Üsküdar/İstanbul</p>
        </div>
        <div class="grid col-span-1">
      <h2 class="text-4xl">sosyal medya</h2>
      <div class="grid grid-cols-3 grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 items-end  lg:justify-items-start gap-5">
        <a href="http://www.facebook.com/boapostpro" class="order-4	">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#1877F2" stroke="none">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>            </g>
          </svg>
        </a>
        <a href="http://twitter.com/boapostpro" class="order-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#1DA1F2" stroke="none">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
            </g>
          </svg>
        </a>
        <a href="http://www.instagram.com/boapostpro" class="order-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#E4405F" stroke="none">
              <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
            </g>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UClRQ-HzM-njEfxbGB7zqGLA" class="order-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#FF0000" stroke="none">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
            </g>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/boapostpro/" class="order-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#0A66C2" stroke="none">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
            </g>
          </svg>
        </a>
        <a href="https://vimeo.com/boapost" class="order-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <g fill="#19B7EA" stroke="none"> 
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.82 11.419c-1.306 2.792-4.463 6.595-6.458 6.595-1.966 0-2.25-4.192-3.324-6.983-.527-1.372-.868-1.058-1.858-.364l-.604-.779c1.444-1.27 2.889-2.745 3.778-2.826.998-.096 1.615.587 1.845 2.051.305 1.924.729 4.91 1.472 4.91.577 0 2.003-2.369 2.076-3.215.13-1.24-.912-1.277-1.815-.89 1.43-4.689 7.383-3.825 4.888 1.501z"/>
            </g>
          </svg>
        </a>
      </div>
    </div>
        
        
      </div>

    </div>
    <div>
      <Harita />
    </div>
  </div>
</template>



<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.shadow-white {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
  .shadow-red {
    box-shadow: 0 0 0 2px theme("colors.red.500");
  }
</style>


<script>
const { validationMixin } = require('vuelidate')
const { email, minLength, required } = require('vuelidate/lib/validators')

import Harita from '~/components/Harita.vue'

export default {
  components:{
    Harita
  },
    head: {
      title: 'İletişim',
  },
  mixins: [validationMixin],
  data () {
    return {
      focusedElement: '',
      name: '',
      email: '',
      msg: '',
      submitting: false,
      isSubmitted: false,
      error: false,
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    msg: {
      required,
      minLength: minLength(5)
    }
  },
  computed: {
    empty () {
      const dataKeys = ['name', 'email', 'msg']
      return dataKeys.some(k => !this[k])
    },
    submissionDisabled () {
      return this.empty || this.$v.$error || this.submitting
    },
    submitButtonClasses () {
      const baseClasses = 'shadow focus:shadow-outline focus:outline-none text-white font-bold text-xl py-2 px-4 rounded'
      const additionalClasses = this.submissionDisabled
        ? 'bg-purple-500 opacity-50 cursor-not-allowed border-gray--300'
        : 'bg-purple-700'
      return `${baseClasses} ${additionalClasses}`
    }
  },
  mounted () {
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    onKeyUp (event) {
      if (event.keyCode === 27) {
        this.$emit('close')
      }
    },
    validate () {
      if (this.submissionDisabled) {
        return
      }
      this.submitForm()
    },
    async submitForm () {
      this.submitting = true
      this.error = false
      try {
        await this.$axios.$post('https://getform.io/f/53d24d9c-1e6c-4cce-8e3a-a03545731baf', {
          name: this.name,
          email: this.email,
          message: this.msg
        })
        this.submitting = false
        this.isSubmitted = true
        await new Promise(resolve => setTimeout(resolve, 2500))
        console.log('mail gönderildi')
        this.$emit('close')
      } catch (e) {
        this.submitting = false
        this.error = true
        console.error(e)
      }
    }
  }
}
</script>