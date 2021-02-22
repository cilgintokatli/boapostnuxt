<template>
  <div class="">
    <div class="my-10">
      <form
        v-show="!isSubmitted"
        class=" w-full max-w-lg mx-auto"
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
              class="lg:hidden mr-4 mt-4 rounded hover:border-yellow transition-all hover:text-yellow px-6 py-3 border border-yellow-dark text-grey-light"
              @click.prevent="$emit('close')">
              kapat
            </button>
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

export default {
  mixins: [validationMixin],
  data () {
    return {
      focusedElement: '',
      name: '',
      email: '',
      msg: '',
      submitting: false,
      isSubmitted: false,
      error: false
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