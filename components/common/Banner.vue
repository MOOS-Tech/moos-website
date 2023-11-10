<template>
  <section class="" v-if="isSectionVisible">
    <div class="flex items-center justify-between gap-x-6  px-6 py-3.5 sm:pr-2.5 lg:pl-8 "
         style="background-color: #5DB8AD;">

      <p class="flex text-sm leading-6 text-white">
        <img src="~assets/images/cookie.png" alt="Image Description" class="mx-2 h-6 w-6" v-if="isimageVisible"/>
        <a :href="redirectUrl" target="_blank" rel="noopener noreferrer">
          <strong v-if="isboldText" class="font-semibold">{{ title_bold }}&nbsp;</strong>{{ title }}&nbsp;&nbsp;<strong
            class="font-semibold">{{
            boldSub_title
          }}</strong>&nbsp; <i class="fas fa-arrow-right"></i>
        </a>
      </p>
      <div class="flex items-center justify-center">
        <NuxtLink v-if="isButtonVisible" @click="allow()"
                  class="cursor-pointer lg:inline-flex lg:w-auto w-full px-5 py-1 mr-5  rounded text-white items-center justify-center bg-white bg-opacity-25 border border-white hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white">
          <span> Allow All</span>
        </NuxtLink>
        <a class="text-white cursor-pointer" data-te-alert-dismiss aria-label="Close" @click="hideSection">
          <span class="[&>svg]:h-6 [&>svg]:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: "banner",
  props: {
    title: "",
    boldSub_title: "",
    title_bold: "",
    redirectUrl: "",
    isButtonVisible: {
      type: Boolean,
      default: true,
    },
    isimageVisible: {
      type: Boolean,
      default: true,
    }
    ,
    isboldText: {
      type: Boolean,
      default: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    isVisible(val) {
      this.isSectionVisible = val;
    }
  },
  data() {
    return {
      isSectionVisible: false,
    };
  },

  methods: {
    allow(){
      localStorage.setItem('cookies_allowed','YES');
      this.isSectionVisible = false;
    },
    hideSection() {
      this.isSectionVisible = false;
    },
  },
}
</script>
